const e = {
    account: {
        blocked: {
            content: "Please try social linkage for unlocking.",
            title: "This account has been locked"
        },
        links: {
            complete: "Social linkage completed",
            link: "Link",
            linked: "Linked",
            linked_description: "To ensure your G123 account security, please link with a social account.",
            success: "Social linkage succeeded",
            title: "Social Linkage",
            title_short: "Linkage",
            unlink: "Unlink",
            unlink_confirm: "Are you sure you want to unlink {{provider}}?",
            unlink_failed: "Social unlinkage failed",
            unlink_success: "Social unlinkage succeeded",
            unlinked_description: "To ensure your G123 account security, please link with a social account."
        },
        login: {
            complete: "Login completed",
            linked_description: "If you want to play with another G123 account, please switch account with your linked social account below.",
            success: "Login succeeded",
            success_and_return: "Login complete. Welcome back. ",
            title: "Switch Account",
            title_short: "Switch Account",
            unlinked_description: "If you already have a G123 account, please login with your linked social account below."
        },
        management: "Account Management",
        recovery: {
            description: "You can recover your account using payment record information.",
            title: "Account Recovery",
            title_short: "Recovery"
        },
        sdk: {
            passkey: {
                not_supported: "This browser does not support Passkey",
                not_platform_authenticator: "Biometric authentication or security key is not available on this device",
                user_rejected_or_timeout: "Authentication was canceled or timed out.",
                invalid_state: "Authentication failed due to invalid authenticator state.",
                operation_not_supported: "This authentication operation is not supported on your device.",
                security_error: "Authentication failed due to security restrictions. Please check your domain settings.",
                operation_aborted: "Authentication was interrupted.",
                constraint_error: "Authentication failed due to invalid credential parameters.",
                data_error: "Authentication failed due to invalid credential data format.",
                unknown_error: "An unknown authentication error occurred.",
                network_error: "Authentication failed due to network issues. Please check your connection."
            },
            authentication_success: "Login Succeeded",
            canceled: "Login Canceled",
            error: "An error occurred: {{code}}",
            links: {
                account_used: "This SNS account is already in use.",
                already_link_others: "This {{providerName}} account is already in use by another G123 ID",
                create_link_sns_already_linked: "This {{providerName}} account linkage succeeded",
                bad_credential: "Linkage failed. (BAD_CREDENTIAL)"
            },
            login: {
                not_linked: "Login failed, this SNS account is not linked.",
                bad_credential: "Login failed. (BAD_CREDENTIAL)"
            },
            imlink: {
                validate_token_not_found: "This link has expired. Please send a new message to the official account to receive a new login link."
            }
        },
        title: "Account"
    }
}
  , n = {
    common: e
};
export {e as common, n as default};
