// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "@oz/access/AccessControl.sol";

/**
 * @title DenomManager
 * @author @byeongsu-hong<hong@byeongsu.dev>
 * @notice This is denomination convertion middleware for Mitosis Gateway.
 * @dev There's a predefined addresses like NONE, ETH. be aware to use them.
 */
contract DenomManager is AccessControl {
    address public constant NONE = address(0x0);
    address public constant ETH = address(0x1);

    mapping(address => address) public denoms;

    bytes32 public constant GATEWAY_ROLE = keccak256("GATEWAY_ROLE");

    constructor() {
        // predefined tokens
        denoms[address(0x0)] = NONE;
        denoms[address(0x1)] = ETH;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
     * @notice convert token address to Mitosis denomination
     * @param _token target token address
     */
    function convert(address _token) public view returns (address) {
        return denoms[_token];
    }

    /**
     * @notice add alias for token address
     * @param _token target token address
     * @param _alias Mitosis denomination that correlates with target token
     * @dev TODO: add access control
     */
    function addAlias(address _token, address _alias) public onlyRole(DEFAULT_ADMIN_ROLE) {
        denoms[_token] = _alias;
    }

    function addGatewayRole(address _gateway) public {
        grantRole(GATEWAY_ROLE, _gateway);
    }

    function removeGatewayRole(address _gateway) public {
        revokeRole(GATEWAY_ROLE, _gateway);
    }

    function addAdminRole(address _newAdmin) public {
        grantRole(DEFAULT_ADMIN_ROLE, _newAdmin);
    }

    function removeAdminRole(address _newAdmin) public {
        revokeRole(DEFAULT_ADMIN_ROLE, _newAdmin);
    }
}
