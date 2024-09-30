@title Getting Started

# Getting Started

This page provides basic information on how to get started with the Twitch extension in your GameMaker project.

## Authentication

**Twitch Reference**: [Authentication](https://dev.twitch.tv/docs/authentication/)

To authenticate with Twitch, use ${function.twitch_auth} or ${function.twitch_auth_from_cache}: 

```gml
twitch_auth([TWITCH_SCOPE_USER_EDIT],,,
    function(_data)
    {
        show_debug_message("Authentication Successful!");
    },
    function(_data)
    {
        show_debug_message("Authentication Failed.");
    }
);
```

Pass the [Scopes](https://dev.twitch.tv/docs/authentication/scopes/) to ${function.twitch_auth} as well as a success callback and failure callback function.

[[Note: The Twitch extension automatically refreshes the token periodically, so in general you shouldn't need to call ${function.twitch_auth_refresh_token} manually.]]

[[Note: ${function.twitch_auth_from_cache} can only be used if cached credentials exist, i.e. if the user was authenticated before using ${function.twitch_auth}.]]

## Callback Functions

The Twitch extension uses [callback functions](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Overview/Method_Variables.htm) that you pass to the functions (rather than async events). Functions take a **success** callback and a **failure** callback. The **success** callback is called if the function succeeds, the **failure** callback is called if it fails. These functions take a single parameter that holds the data returned by Twitch. In the extension you access this as a ${type.struct}. See the **success** callback of a function for detailed information on the data it returns.

## Parsing Chat Messages

The Twitch extension comes with example code in `twitch_parse_message()`, which performs basic chat message parsing. The code is based on example code which was previously available in the Twitch documentation. It can be used as a starting point for your own message parsing code, though will be removed when it is out-of-date with Twitch's IRC interface.

See the Twitch documentation on [IRC Concepts](https://dev.twitch.tv/docs/chat/irc/) for the latest up-to-date information on how to parse IRC messages.