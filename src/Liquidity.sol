// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import {ERC20} from "@solmate/tokens/ERC20.sol";
import {Owned} from "@solmate/auth/Owned.sol";
import "@oz/access/AccessControl.sol";

import {Token, TokenPermit} from "@src/Types.sol";
import {Utils} from "@src/Utils.sol";

/**
 * @title Liquidity
 * @author @byeongsu-hong<hong@byeongsu.dev>
 * @notice This is the liquidity manager of the protocol. Users can deposit and withdraw their tokens.
 * @dev TODO: concern about the liquidity isolation
 */
contract Liquidity is ERC20, AccessControl {
    address public token;

    bytes32 public constant GATEWAY_ROLE = keccak256("GATEWAY_ROLE");

    constructor(string memory _denom, address _token) ERC20(_denom, string(abi.encodePacked("MITO_LP-", _denom)), 18) {
        token = _token;

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
     * @notice deposit ERC20 token after pre-approval with specific sender changes
     * @param _depositor address of depositor
     * @param _amount amount of tokens
     */
    function deposit(address _depositor, uint256 _amount) public {
        ERC20(token).transferFrom(msg.sender, address(this), _amount);

        _mint(_depositor, _amount);
    }

    /**
     * @notice deposit ERC20 (ERC2612) token with any sender changes
     * @param _depositor address of depositor
     * @param _amount amount of tokens
     * @param _deadline deadline of permit
     * @param _signature signature of permit
     */
    function deposit(address _depositor, uint256 _amount, uint256 _deadline, bytes memory _signature) public {
        (uint8 v, bytes32 r, bytes32 s) = Utils.unwrapSig(_signature);

        ERC20(token).permit(msg.sender, address(this), _amount, _deadline, v, r, s);

        deposit(_depositor, _amount);
    }

    /**
     * @notice withdraw ETH / ERC20 to sender address
     * @dev if you set to _token.addr to zero address, The contract will detect it as ETH
     * @param _receiver address to receive tokens
     * @param _amount amount to burn
     */
    function withdraw(address _receiver, uint256 _amount) public {
        transferFrom(msg.sender, address(this), _amount);

        ERC20(token).transfer(_receiver, _amount);

        _burn(address(this), _amount);
    }

    /**
     * @notice withdraw ETH / ERC20 to receiver address
     * @dev if you set to _token.addr to zero address, The contract will detect it as ETH
     * @param _receiver address of receiver
     * @param _amount amount of tokens
     * @param _deadline deadline of permit
     * @param _signature signature of permit
     */
    function withdraw(address _receiver, uint256 _amount, uint256 _deadline, bytes memory _signature) public {
        (uint8 v, bytes32 r, bytes32 s) = Utils.unwrapSig(_signature);

        permit(msg.sender, address(this), _amount, _deadline, v, r, s);

        withdraw(_receiver, _amount);
    }
}
