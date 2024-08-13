

/**
 * @func twitch_auth
 * @desc Open Twitch 

Oficial page referece: [click here]()
 * 
 * @param {string} scopes 	The APIs that you’re calling identify the scopes you must list. 
 * @param {number} forced_verify Set to true to force the user to re-authorize your app’s access to their resources. The default is false. 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users.  |
 * | ___id | ${type.string}  | An ID that identifies the user.  |
 * | ___login | ${type.string}  | The user’s login name.  |
 * | ___display_name | ${type.string}  | The user’s display name.  |
 * | ___type | ${type.string}  | The type of user. Possible values are: admin — Twitch administrator global_modstaff — Twitch staff"" — Normal user  |
 * | ___broadcaster_type | ${type.string}  | The type of broadcaster. Possible values are: affiliate — An affiliate broadcaster affiliate broadcasterpartner — A partner broadcaster partner broadcaster"" — A normal broadcaster  |
 * | ___description | ${type.string}  | The user’s description of their channel.  |
 * | ___profile_image_url | ${type.string}  | A URL to the user’s profile image.  |
 * | ___offline_image_url | ${type.string}  | A URL to the user’s offline image.  |
 * | ___view_count | ${type.number}  | The number of times the user’s channel has been viewed. NOTE: This field has been deprecated (see Get Users API endpoint – “view_count” deprecation). Any data in this field is not valid and should not be used.  |
 * | ___email | ${type.string}  | The user’s verified email address. The object includes this field only if the user access token includes the user:read:email scope. If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | ___created_at | ${type.string}  | The UTC date and time that the user’s account was created. The timestamp is in RFC3339 format.  |
 * @event_end
@func_end
 */
function twitch_auth(scopes,forced_verify) {}


/**
 * @func twitch_auth_exchange_code
 * @desc The second step in this flow is to use the authorization code (see above) to get an access token and refresh token.

Oficial page referece: [click here]()
 * 
 * @param {string} code The code that the /authorize response returned in the code query parameter.
 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users.  |
 * | ___id | ${type.string}  | An ID that identifies the user.  |
 * | ___login | ${type.string}  | The user’s login name.  |
 * | ___display_name | ${type.string}  | The user’s display name.  |
 * | ___type | ${type.string}  | The type of user. Possible values are: admin — Twitch administrator global_modstaff — Twitch staff"" — Normal user  |
 * | ___broadcaster_type | ${type.string}  | The type of broadcaster. Possible values are: affiliate — An affiliate broadcaster affiliate broadcasterpartner — A partner broadcaster partner broadcaster"" — A normal broadcaster  |
 * | ___description | ${type.string}  | The user’s description of their channel.  |
 * | ___profile_image_url | ${type.string}  | A URL to the user’s profile image.  |
 * | ___offline_image_url | ${type.string}  | A URL to the user’s offline image.  |
 * | ___view_count | ${type.number}  | The number of times the user’s channel has been viewed. NOTE: This field has been deprecated (see Get Users API endpoint – “view_count” deprecation). Any data in this field is not valid and should not be used.  |
 * | ___email | ${type.string}  | The user’s verified email address. The object includes this field only if the user access token includes the user:read:email scope. If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | ___created_at | ${type.string}  | The UTC date and time that the user’s account was created. The timestamp is in RFC3339 format.  |
 * @event_end
@func_end
 */
function twitch_auth_exchange_code(code) {}


/**
 * @func twitch_auth_app_token
 * @desc The client credentials grant flow is meant only for server-to-server API requests that use an app access token.

Oficial page referece: [click here]()
 * 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users.  |
 * | ___id | ${type.string}  | An ID that identifies the user.  |
 * | ___login | ${type.string}  | The user’s login name.  |
 * | ___display_name | ${type.string}  | The user’s display name.  |
 * | ___type | ${type.string}  | The type of user. Possible values are: admin — Twitch administrator global_modstaff — Twitch staff"" — Normal user  |
 * | ___broadcaster_type | ${type.string}  | The type of broadcaster. Possible values are: affiliate — An affiliate broadcaster affiliate broadcasterpartner — A partner broadcaster partner broadcaster"" — A normal broadcaster  |
 * | ___description | ${type.string}  | The user’s description of their channel.  |
 * | ___profile_image_url | ${type.string}  | A URL to the user’s profile image.  |
 * | ___offline_image_url | ${type.string}  | A URL to the user’s offline image.  |
 * | ___view_count | ${type.number}  | The number of times the user’s channel has been viewed. NOTE: This field has been deprecated (see Get Users API endpoint – “view_count” deprecation). Any data in this field is not valid and should not be used.  |
 * | ___email | ${type.string}  | The user’s verified email address. The object includes this field only if the user access token includes the user:read:email scope. If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | ___created_at | ${type.string}  | The UTC date and time that the user’s account was created. The timestamp is in RFC3339 format.  |
 * @event_end
@func_end
 */
function twitch_auth_app_token() {}


/**
 * @func twitch_auth_refresh_token
 * @desc The second step in this flow is to use the authorization code (see above) to get an access token and refresh token.

Oficial page referece: [click here]()
 * 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users.  |
 * | ___id | ${type.string}  | An ID that identifies the user.  |
 * | ___login | ${type.string}  | The user’s login name.  |
 * | ___display_name | ${type.string}  | The user’s display name.  |
 * | ___type | ${type.string}  | The type of user. Possible values are: admin — Twitch administrator global_modstaff — Twitch staff"" — Normal user  |
 * | ___broadcaster_type | ${type.string}  | The type of broadcaster. Possible values are: affiliate — An affiliate broadcaster affiliate broadcasterpartner — A partner broadcaster partner broadcaster"" — A normal broadcaster  |
 * | ___description | ${type.string}  | The user’s description of their channel.  |
 * | ___profile_image_url | ${type.string}  | A URL to the user’s profile image.  |
 * | ___offline_image_url | ${type.string}  | A URL to the user’s offline image.  |
 * | ___view_count | ${type.number}  | The number of times the user’s channel has been viewed. NOTE: This field has been deprecated (see Get Users API endpoint – “view_count” deprecation). Any data in this field is not valid and should not be used.  |
 * | ___email | ${type.string}  | The user’s verified email address. The object includes this field only if the user access token includes the user:read:email scope. If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | ___created_at | ${type.string}  | The UTC date and time that the user’s account was created. The timestamp is in RFC3339 format.  |
 * @event_end
@func_end
 */
function twitch_auth_refresh_token() {}


/**
 * @func twitch_auth_from_cache
 * @desc The second step in this flow is to use the authorization code (see above) to get an access token and refresh token. but refresh token saved from previosly sessions

Oficial page referece: [click here]()
 * 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users.  |
 * | ___id | ${type.string}  | An ID that identifies the user.  |
 * | ___login | ${type.string}  | The user’s login name.  |
 * | ___display_name | ${type.string}  | The user’s display name.  |
 * | ___type | ${type.string}  | The type of user. Possible values are: admin — Twitch administrator global_modstaff — Twitch staff"" — Normal user  |
 * | ___broadcaster_type | ${type.string}  | The type of broadcaster. Possible values are: affiliate — An affiliate broadcaster affiliate broadcasterpartner — A partner broadcaster partner broadcaster"" — A normal broadcaster  |
 * | ___description | ${type.string}  | The user’s description of their channel.  |
 * | ___profile_image_url | ${type.string}  | A URL to the user’s profile image.  |
 * | ___offline_image_url | ${type.string}  | A URL to the user’s offline image.  |
 * | ___view_count | ${type.number}  | The number of times the user’s channel has been viewed. NOTE: This field has been deprecated (see Get Users API endpoint – “view_count” deprecation). Any data in this field is not valid and should not be used.  |
 * | ___email | ${type.string}  | The user’s verified email address. The object includes this field only if the user access token includes the user:read:email scope. If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | ___created_at | ${type.string}  | The UTC date and time that the user’s account was created. The timestamp is in RFC3339 format.  |
 * @event_end
@func_end
 */
function twitch_auth_from_cache() {}


/**
 * @func twitch_auth_signout
 * @desc Signout from Twitch

Oficial page referece: [click here]()
 * 
@func_end
 */
function twitch_auth_signout() {}


/**
 * @func twitch_bits_get_cheermotes
 * @desc Gets a list of Cheermotes that users can use to cheer Bits in any Bits-enabled channel’s chat room. Cheermotes are animated emotes that viewers can assign Bits to.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-cheermotes)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${type.string} : The ID of the broadcaster whose custom Cheermotes you want to get. Specify the broadcaster’s ID if you want to include the broadcaster’s Cheermotes in the response (not all broadcasters upload Cheermotes). If not specified, the response contains only global Cheermotes.<br><br>If the broadcaster uploaded Cheermotes, the <code class="highlighter-rouge">type</code> field in the response is set to <strong>channel_custom</strong>.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of Cheermotes. The list is in ascending order by the order field’s value.  |
 * | ___prefix | ${type.string}  | The name portion of the Cheermote string that you use in chat to cheer Bits. The full Cheermote string is the concatenation of {prefix} + {number of Bits}. For example, if the prefix is “Cheer” and you want to cheer 100 Bits, the full Cheermote string is Cheer100. When the Cheermote string is entered in chat, Twitch converts it to the image associated with the Bits tier that was cheered.  |
 * | ___tiers | ${type.array}  | A list of tier levels that the Cheermote supports. Each tier identifies the range of Bits that you can cheer at that tier level and an image that graphically identifies the tier level.  |
 * | ______min_bits | ${type.number}  | The minimum number of Bits that you must cheer at this tier level. The maximum number of Bits that you can cheer at this level is determined by the required minimum Bits of the next tier level minus 1. For example, if min_bits is 1 and min_bits for the next tier is 100, the Bits range for this tier level is 1 through 99. The minimum Bits value of the last tier is the maximum number of Bits you can cheer using this Cheermote. For example, 10000.  |
 * | ______id | ${type.string}  | The tier level. Possible tiers are:11005001000500010000100000  |
 * | ______color | ${type.string}  | The hex code of the color associated with this tier level (for example, #979797).  |
 * | ______images | ${type.Dictionary}  | The animated and static image sets for the Cheermote. The dictionary of images is organized by theme, format, and size. The theme keys are dark and light. Each theme is a dictionary of formats: animated and static. Each format is a dictionary of sizes: 1, 1.5, 2, 3, and 4. The value of each size contains the URL to the image.  |
 * | ______can_cheer | ${type.boolean}  | A Boolean value that determines whether users can cheer at this tier level.  |
 * | ______show_in_bits_card | ${type.boolean}  | A Boolean value that determines whether this tier level is shown in the Bits card. Is true if this tier level is shown in the Bits card.  |
 * | ___type | ${type.string}  | The type of Cheermote. Possible values are:global_first_party &mdash; A Twitch-defined Cheermote that is shown in the Bits card.global_third_party &mdash; A Twitch-defined Cheermote that is not shown in the Bits card.channel_custom &mdash; A broadcaster-defined Cheermote.display_only &mdash; Do not use; for internal use only.sponsored &mdash; A sponsor-defined Cheermote. When used, the sponsor adds additional Bits to the amount that the user cheered. For example, if the user cheered Terminator100, the broadcaster might receive 110 Bits, which includes the sponsor's 10 Bits contribution.  |
 * | ___order | ${type.number}  | The order that the Cheermotes are shown in the Bits card. The numbers may not be consecutive. For example, the numbers may jump from 1 to 7 to 13. The order numbers are unique within a Cheermote type (for example, global_first_party) but may not be unique amongst all Cheermotes in the response.  |
 * | ___last_updated | ${type.string}  | The date and time, in RFC3339 format, when this Cheermote was last updated.  |
 * | ___is_charitable | ${type.boolean}  | A Boolean value that indicates whether this Cheermote provides a charitable contribution match during charity campaigns.  |
 * @event_end
@func_end
 */
function twitch_bits_get_cheermotes(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_bits_get_extension_transactions
 * @desc Gets an extension’s list of transactions. A transaction records the exchange of a currency (for example, Bits) for a digital product.

Requires an app access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-extension-transactions)
 * 
 * @param {string} extension_id The ID of the extension whose list of transactions you want to get. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `id` : ${type.string} : A transaction ID used to filter the list of transactions. Specify this parameter for each transaction you want to get. For example, <code class="highlighter-rouge">id=1234&amp;id=5678</code>. You may specify a maximum of 100 IDs.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of transactions.  |
 * | ___id | ${type.string}  | An ID that identifies the transaction.  |
 * | ___timestamp | ${type.string}  | The UTC date and time (in RFC3339 format) of the transaction.  |
 * | ___broadcaster_id | ${type.string}  | The ID of the broadcaster that owns the channel where the transaction occurred.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___user_id | ${type.string}  | The ID of the user that purchased the digital product.  |
 * | ___user_login | ${type.string}  | The user’s login name.  |
 * | ___user_name | ${type.string}  | The user’s display name.  |
 * | ___product_type | ${type.string}  | The type of transaction. Possible values are:BITS_IN_EXTENSION  |
 * | ___product_data | ${type.struct}  | Contains details about the digital product.  |
 * | ______sku | ${type.string}  | An ID that identifies the digital product.  |
 * | ______domain | ${type.string}  | Set to twitch.ext. + &lt;the extension's ID&gt;.  |
 * | ______cost | ${type.struct}  | Contains details about the digital product’s cost.  |
 * | _________amount | ${type.number}  | The amount exchanged for the digital product.  |
 * | _________type | ${type.string}  | The type of currency exchanged. Possible values are:bits  |
 * | ______inDevelopment | ${type.boolean}  | A Boolean value that determines whether the product is in development. Is true if the digital product is in development and cannot be exchanged.  |
 * | ______displayName | ${type.string}  | The name of the digital product.  |
 * | ______expiration | ${type.string}  | This field is always empty since you may purchase only unexpired products.  |
 * | ______broadcast | ${type.boolean}  | A Boolean value that determines whether the data was broadcast to all instances of the extension. Is true if the data was broadcast to all instances.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * @event_end
@func_end
 */
function twitch_bits_get_extension_transactions(extension_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_channels_get_channel_information
 * @desc Gets information about one or more channels.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-channel-information)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose channel you want to get. To specify more than one ID, include this parameter for each broadcaster you want to get. For example, broadcaster_id=1234&amp;broadcaster_id=5678. You may specify a maximum of 100 IDs. The API ignores duplicate IDs and IDs that are not found. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains information about the specified channels. The list is empty if the specified channels weren’t found.  |
 * | ___broadcaster_id | ${type.string}  | An ID that uniquely identifies the broadcaster.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___broadcaster_language | ${type.string}  | The broadcaster’s preferred language. The value is an ISO 639-1 two-letter language code (for example, en for English). The value is set to “other” if the language is not a Twitch supported language.  |
 * | ___game_name | ${type.string}  | The name of the game that the broadcaster is playing or last played. The value is an empty string if the broadcaster has never played a game.  |
 * | ___game_id | ${type.string}  | An ID that uniquely identifies the game that the broadcaster is playing or last played. The value is an empty string if the broadcaster has never played a game.  |
 * | ___title | ${type.string}  | The title of the stream that the broadcaster is currently streaming or last streamed. The value is an empty string if the broadcaster has never streamed.  |
 * | ___delay | ${type.number}  | The value of the broadcaster’s stream delay setting, in seconds. This field’s value defaults to zero unless 1) the request specifies a user access token, 2) the ID in the broadcaster_id query parameter matches the user ID in the access token, and 3) the broadcaster has partner status and they set a non-zero stream delay value.  |
 * | ___tags | ${type.array} of ${type.string}  | The tags applied to the channel.  |
 * | ___content_classification_labels | ${type.array} of ${type.string}  | The CCLs applied to the channel.  |
 * | ___is_branded_content | ${type.boolean}  | Boolean flag indicating if the channel has branded content.  |
 * @event_end
@func_end
 */
function twitch_channels_get_channel_information(broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_channels_modify_channel_information
 * @desc Updates a channel’s properties.

Requires a user access token that includes the channel:manage:broadcast scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#modify-channel-information)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose channel you want to update. This ID must match the user ID in the user access token. 
 * @param {string} id ID of the Content Classification Labels that must be added/removed from the channel. Can be one of the following values:DrugsIntoxicationSexualThemesViolentGraphicGamblingProfanityVulgarity 
 * @param {boolean} is_enabled Boolean flag indicating whether the label should be enabled (true) or disabled for the channel. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `game_id` : ${type.string} : The ID of the game that the user plays. The game is not updated if the ID isn’t a game ID that Twitch recognizes. To unset this field, use “0” or “” (an empty string).
 * - `broadcaster_language` : ${type.string} : The user’s preferred language. Set the value to an ISO 639-1 two-letter language code (for example, <em>en</em> for English). Set to “other” if the user’s preferred language is not a Twitch supported language. The language isn’t updated if the language code isn’t a Twitch supported language.
 * - `title` : ${type.string} : The title of the user’s stream. You may not set this field to an empty string.
 * - `delay` : ${type.number} : The number of seconds you want your broadcast buffered before streaming it live. The delay helps ensure fairness during competitive play. Only users with Partner status may set this field. The maximum delay is 900 seconds (15 minutes).
 * - `tags` : ${type.array} of ${type.string} : A list of channel-defined tags to apply to the channel. To remove all tags from the channel, set tags to an empty array. Tags help identify the content that the channel streams. <a href="https://help.twitch.tv/s/article/guide-to-tags">Learn More</a><br><br>A channel may specify a maximum of 10 tags. Each tag is limited to a maximum of 25 characters and may not be an empty string or contain spaces or special characters. Tags are case insensitive. For readability, consider using camelCasing or PascalCasing.
 * - `content_classification_labels` : ${Label[]} : List of labels that should be set as the Channel’s CCLs.
 * - `is_branded_content` : ${type.boolean} : Boolean flag indicating if the channel has branded content.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_channels_modify_channel_information(broadcaster_id,id,is_enabled,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_channels_get_channel_editors
 * @desc Gets the broadcaster’s list editors.

Requires a user access token that includes the channel:read:editors scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-channel-editors)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the channel. This ID must match the user ID in the access token. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list of users that are editors for the specified broadcaster. The list is empty if the broadcaster doesn’t have editors.  |
 * | __user_id | ${type.string}  | An ID that uniquely identifies a user with editor permissions.  |
 * | __user_name | ${type.string}  | The user’s display name.  |
 * | __created_at | ${type.string}  | The date and time, in RFC3339 format, when the user became one of the broadcaster’s editors.  |
 * @event_end
@func_end
 */
function twitch_channels_get_channel_editors(broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_channels_get_followed_channels
 * @desc Gets a list of broadcasters that the specified user follows. You can also use this endpoint to see whether a user follows a specific broadcaster.

Requires a user access token that includes the user:read:follows scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-followed-channels)
 * 
 * @param {string} user_id A user’s ID. Returns the list of broadcasters that this user follows. This ID must match the user ID in the user OAuth token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${type.string} : A broadcaster’s ID. Use this parameter to see whether the user follows this broadcaster. If specified, the response contains this broadcaster if the user follows them. If not specified, the response contains all broadcasters that the user follows.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="https://dev.twitch.tv/docs/api/guide#pagination">Read more</a>.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of broadcasters that the user follows. The list is in descending order by followed_at (with the most recently followed broadcaster first). The list is empty if the user doesn’t follow anyone.  |
 * | __broadcaster_id | ${type.string}  | An ID that uniquely identifies the broadcaster that this user is following.  |
 * | __broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | __broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | __followed_at | ${type.string}  | The UTC timestamp when the user started following the broadcaster.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read more.  |
 * | __cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * | total | ${type.number}  | The total number of broadcasters that the user follows. As someone pages through the list, the number may change as the user follows or unfollows broadcasters.  |
 * @event_end
@func_end
 */
function twitch_channels_get_followed_channels(user_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_channels_get_channel_followers
 * @desc Gets a list of users that follow the specified broadcaster. You can also use this endpoint to see whether a specific user follows the broadcaster.

This endpoint will return specific follower information only if both of the above are true. If a scope is not provided or the user isn’t the broadcaster or a moderator for the specified channel, only the total follower count will be included in the response.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-channel-followers)
 * 
 * @param {string} broadcaster_id The broadcaster’s ID. Returns the list of users that follow this broadcaster. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `user_id` : ${type.string} : A user’s ID. Use this parameter to see whether the user follows this broadcaster. If specified, the response contains this user if they follow the broadcaster. If not specified, the response contains all users that follow the broadcaster.<br><br>Using this parameter requires both a user access token with the <strong>moderator:read:followers</strong> scope and the user ID in the access token match the broadcaster_id or be the user ID for a moderator of the specified broadcaster.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="https://dev.twitch.tv/docs/api/guide#pagination">Read more</a>.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users that follow the specified broadcaster. The list is in descending order by followed_at (with the most recent follower first). The list is empty if nobody follows the broadcaster, the specified user_id isn’t in the follower list, the user access token is missing the moderator:read:followers scope, or the user isn’t the broadcaster or moderator for the channel.  |
 * | ___followed_at | ${type.string}  | The UTC timestamp when the user started following the broadcaster.  |
 * | ___user_id | ${type.string}  | An ID that uniquely identifies the user that’s following the broadcaster.  |
 * | ___user_login | ${type.string}  | The user’s login name.  |
 * | ___user_name | ${type.string}  | The user’s display name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read more.  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * | total | ${type.number}  | The total number of users that follow this broadcaster. As someone pages through the list, the number of users may change as users follow or unfollow the broadcaster.  |
 * @event_end
@func_end
 */
function twitch_channels_get_channel_followers(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_channel_points_create_custom_rewards
 * @desc Creates a Custom Reward in the broadcaster’s channel. The maximum number of custom rewards per channel is 50, which includes both enabled and disabled rewards.

Requires a user access token that includes the channel:manage:redemptions scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#create-custom-rewards)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster to add the custom reward to. This ID must match the user ID found in the OAuth token. 
 * @param {string} title The custom reward’s title. The title may contain a maximum of 45 characters and it must be unique amongst all of the broadcaster’s custom rewards. 
 * @param {int64} cost The cost of the reward, in Channel Points. The minimum is 1 point. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `prompt` : ${type.string} : The prompt shown to the viewer when they redeem the reward. Specify a prompt if <code class="highlighter-rouge">is_user_input_required</code> is <strong>true</strong>. The prompt is limited to a maximum of 200 characters.
 * - `is_enabled` : ${type.boolean} : A Boolean value that determines whether the reward is enabled. Viewers see only enabled rewards. The default is <strong>true</strong>.
 * - `background_color` : ${type.string} : The background color to use for the reward. Specify the color using Hex format (for example, #9147FF).
 * - `is_user_input_required` : ${type.boolean} : A Boolean value that determines whether the user needs to enter information when redeeming the reward. See the <code class="highlighter-rouge">prompt</code> field. The default is <strong>false</strong>.
 * - `is_max_per_stream_enabled` : ${type.boolean} : A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream (see the <code class="highlighter-rouge">max_per_stream</code> field). The default is <strong>false</strong>.
 * - `max_per_stream` : ${type.number} : The maximum number of redemptions allowed per live stream. Applied only if <code class="highlighter-rouge">is_max_per_stream_enabled</code> is <strong>true</strong>. The minimum value is 1.
 * - `is_max_per_user_per_stream_enabled` : ${type.boolean} : A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream (see the <code class="highlighter-rouge">max_per_user_per_stream</code> field). The default is <strong>false</strong>.
 * - `max_per_user_per_stream` : ${type.number} : The maximum number of redemptions allowed per user per stream. Applied only if <code class="highlighter-rouge">is_max_per_user_per_stream_enabled</code> is <strong>true</strong>. The minimum value is 1.
 * - `is_global_cooldown_enabled` : ${type.boolean} : A Boolean value that determines whether to apply a cooldown period between redemptions (see the <code class="highlighter-rouge">global_cooldown_seconds</code> field for the duration of the cooldown period). The default is <strong>false</strong>.
 * - `global_cooldown_seconds` : ${type.number} : The cooldown period, in seconds. Applied only if the <code class="highlighter-rouge">is_global_cooldown_enabled</code> field is <strong>true</strong>. The minimum value is 1; however, the minimum value is 60 for it to be shown in the Twitch UX.
 * - `should_redemptions_skip_request_queue` : ${type.boolean} : A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If <strong>false</strong>, status is set to UNFULFILLED and follows the normal request queue process. The default is <strong>false</strong>.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single custom reward you created.  |
 * | ___broadcaster_id | ${type.string}  | The ID that uniquely identifies the broadcaster.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___id | ${type.string}  | The ID that uniquely identifies this custom reward.  |
 * | ___title | ${type.string}  | The title of the reward.  |
 * | ___prompt | ${type.string}  | The prompt shown to the viewer when they redeem the reward if user input is required (see the is_user_input_required field).  |
 * | ___cost | ${type.number}  | The cost of the reward in Channel Points.  |
 * | ___image | ${type.struct}  | A set of custom images for the reward. This field is set to null if the broadcaster didn’t upload images.  |
 * | ______url_1x | ${type.string}  | The URL to a small version of the image.  |
 * | ______url_2x | ${type.string}  | The URL to a medium version of the image.  |
 * | ______url_4x | ${type.string}  | The URL to a large version of the image.  |
 * | ___default_image | ${type.struct}  | A set of default images for the reward.  |
 * | ______url_1x | ${type.string}  | The URL to a small version of the image.  |
 * | ______url_2x | ${type.string}  | The URL to a medium version of the image.  |
 * | ______url_4x | ${type.string}  | The URL to a large version of the image.  |
 * | ___background_color | ${type.string}  | The background color to use for the reward. The color is in Hex format (for example, #00E5CB).  |
 * | ___is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward is enabled. Is true if enabled; otherwise, false. Disabled rewards aren’t shown to the user.  |
 * | ___is_user_input_required | ${type.boolean}  | A Boolean value that determines whether the user must enter information when redeeming the reward. Is true if the reward requires user input.  |
 * | ___max_per_stream_setting | ${type.struct}  | The settings used to determine whether to apply a maximum to the number to the redemptions allowed per live stream.  |
 * | ______is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per live stream. Is true if the reward applies a limit.  |
 * | ______max_per_stream | ${type.int64}  | The maximum number of redemptions allowed per live stream.  |
 * | ___max_per_user_per_stream_setting | ${type.struct}  | The settings used to determine whether to apply a maximum to the number of redemptions allowed per user per live stream.  |
 * | ______is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per user per live stream. Is true if the reward applies a limit.  |
 * | ______max_per_user_per_stream | ${type.int64}  | The maximum number of redemptions allowed per user per live stream.  |
 * | ___global_cooldown_setting | ${type.struct}  | The settings used to determine whether to apply a cooldown period between redemptions and the length of the cooldown.  |
 * | ______is_enabled | ${type.boolean}  | A Boolean value that determines whether to apply a cooldown period. Is true if a cooldown period is enabled.  |
 * | ______global_cooldown_seconds | ${type.int64}  | The cooldown period, in seconds.  |
 * | ___is_paused | ${type.boolean}  | A Boolean value that determines whether the reward is currently paused. Is true if the reward is paused. Viewers can’t redeem paused rewards.  |
 * | ___is_in_stock | ${type.boolean}  | A Boolean value that determines whether the reward is currently in stock. Is true if the reward is in stock. Viewers can’t redeem out of stock rewards.  |
 * | ___should_redemptions_skip_request_queue | ${type.boolean}  | A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If false, status is UNFULFILLED and follows the normal request queue process.  |
 * | ___redemptions_redeemed_current_stream | ${type.number}  | The number of redemptions redeemed during the current live stream. The number counts against the max_per_stream_setting limit. This field is null if the broadcaster’s stream isn’t live or max_per_stream_setting isn’t enabled.  |
 * | ___cooldown_expires_at | ${type.string}  | The timestamp of when the cooldown period expires. Is null if the reward isn’t in a cooldown state (see the global_cooldown_setting field).  |
 * @event_end
@func_end
 */
function twitch_channel_points_create_custom_rewards(broadcaster_id,title,cost,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_channel_points_delete_custom_reward
 * @desc Deletes a custom reward that the broadcaster created.

The app used to create the reward is the only app that may delete it. If the reward’s redemption status is UNFULFILLED at the time the reward is deleted, its redemption status is marked as FULFILLED.

Requires a user access token that includes the channel:manage:redemptions scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#delete-custom-reward)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that created the custom reward. This ID must match the user ID found in the OAuth token. 
 * @param {string} id The ID of the custom reward to delete. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_channel_points_delete_custom_reward(broadcaster_id,id,callback_success,callback_failed) {}


/**
 * @func twitch_channel_points_get_custom_reward
 * @desc Gets a list of custom rewards that the specified broadcaster created.

NOTE: A channel may offer a maximum of 50 rewards, which includes both enabled and disabled rewards.

Requires a user access token that includes the channel:read:redemptions or channel:manage:redemptions scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-custom-reward)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose custom rewards you want to get. This ID must match the user ID found in the OAuth token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `id` : ${type.string} : A list of IDs to filter the rewards by. To specify more than one ID, include this parameter for each reward you want to get. For example, <code class="highlighter-rouge">id=1234&amp;id=5678</code>. You may specify a maximum of 50 IDs.<br><br>Duplicate IDs are ignored. The response contains only the IDs that were found. If none of the IDs were found, the response is 404 Not Found.
 * - `only_manageable_rewards` : ${type.boolean} : A Boolean value that determines whether the response contains only the custom rewards that the app may manage (the app is identified by the ID in the Client-Id header). Set to <strong>true</strong> to get only the custom rewards that the app may manage. The default is <strong>false</strong>.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list of custom rewards. The list is in ascending order by id. If the broadcaster hasn’t created custom rewards, the list is empty.  |
 * | ___broadcaster_id | ${type.string}  | The ID that uniquely identifies the broadcaster.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___id | ${type.string}  | The ID that uniquely identifies this custom reward.  |
 * | ___title | ${type.string}  | The title of the reward.  |
 * | ___prompt | ${type.string}  | The prompt shown to the viewer when they redeem the reward if user input is required (see the is_user_input_required field).  |
 * | ___cost | ${type.number}  | The cost of the reward in Channel Points.  |
 * | ___image | ${type.struct}  | A set of custom images for the reward. This field is null if the broadcaster didn’t upload images.  |
 * | ______url_1x | ${type.string}  | The URL to a small version of the image.  |
 * | ______url_2x | ${type.string}  | The URL to a medium version of the image.  |
 * | ______url_4x | ${type.string}  | The URL to a large version of the image.  |
 * | ___default_image | ${type.struct}  | A set of default images for the reward.  |
 * | ______url_1x | ${type.string}  | The URL to a small version of the image.  |
 * | ______url_2x | ${type.string}  | The URL to a medium version of the image.  |
 * | ______url_4x | ${type.string}  | The URL to a large version of the image.  |
 * | ___background_color | ${type.string}  | The background color to use for the reward. The color is in Hex format (for example, #00E5CB).  |
 * | ___is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward is enabled. Is true if enabled; otherwise, false. Disabled rewards aren’t shown to the user.  |
 * | ___is_user_input_required | ${type.boolean}  | A Boolean value that determines whether the user must enter information when redeeming the reward. Is true if the user is prompted.  |
 * | ___max_per_stream_setting | ${type.struct}  | The settings used to determine whether to apply a maximum to the number of redemptions allowed per live stream.  |
 * | ______is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per live stream. Is true if the reward applies a limit.  |
 * | ______max_per_stream | ${type.int64}  | The maximum number of redemptions allowed per live stream.  |
 * | ___max_per_user_per_stream_setting | ${type.struct}  | The settings used to determine whether to apply a maximum to the number of redemptions allowed per user per live stream.  |
 * | ______is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per user per live stream. Is true if the reward applies a limit.  |
 * | ______max_per_user_per_stream | ${type.int64}  | The maximum number of redemptions allowed per user per live stream.  |
 * | ___global_cooldown_setting | ${type.struct}  | The settings used to determine whether to apply a cooldown period between redemptions and the length of the cooldown.  |
 * | ______is_enabled | ${type.boolean}  | A Boolean value that determines whether to apply a cooldown period. Is true if a cooldown period is enabled.  |
 * | ______global_cooldown_seconds | ${type.int64}  | The cooldown period, in seconds.  |
 * | ___is_paused | ${type.boolean}  | A Boolean value that determines whether the reward is currently paused. Is true if the reward is paused. Viewers can’t redeem paused rewards.  |
 * | ___is_in_stock | ${type.boolean}  | A Boolean value that determines whether the reward is currently in stock. Is true if the reward is in stock. Viewers can’t redeem out of stock rewards.  |
 * | ___should_redemptions_skip_request_queue | ${type.boolean}  | A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If false, status is set to UNFULFILLED and follows the normal request queue process.  |
 * | ___redemptions_redeemed_current_stream | ${type.number}  | The number of redemptions redeemed during the current live stream. The number counts against the max_per_stream_setting limit. This field is null if the broadcaster’s stream isn’t live or max_per_stream_setting isn’t enabled.  |
 * | ___cooldown_expires_at | ${type.string}  | The timestamp of when the cooldown period expires. Is null if the reward isn’t in a cooldown state. See the global_cooldown_setting field.  |
 * @event_end
@func_end
 */
function twitch_channel_points_get_custom_reward(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_channel_points_get_custom_reward_redemption
 * @desc Gets a list of redemptions for the specified custom reward. The app used to create the reward is the only app that may get the redemptions.

Requires a user access token that includes the channel:read:redemptions or channel:manage:redemptions scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-custom-reward-redemption)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the custom reward. This ID must match the user ID found in the user OAuth token. 
 * @param {string} reward_id The ID that identifies the custom reward whose redemptions you want to get. 
 * @param {string} status The status of the redemptions to return. The possible case-sensitive values are:CANCELEDFULFILLEDUNFULFILLEDNOTE: This field is required only if you don’t specify the id query parameter.NOTE: Canceled and fulfilled redemptions are returned for only a few days after they’re canceled or fulfilled. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `id` : ${type.string} : A list of IDs to filter the redemptions by. To specify more than one ID, include this parameter for each redemption you want to get. For example, <code class="highlighter-rouge">id=1234&amp;id=5678</code>. You may specify a maximum of 50 IDs.<br><br>Duplicate IDs are ignored. The response contains only the IDs that were found. If none of the IDs were found, the response is 404 Not Found.
 * - `sort` : ${type.string} : The order to sort redemptions by. The possible case-sensitive values are:<ul><li>OLDEST</li><li>NEWEST</li></ul>The default is OLDEST.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read more</a>
 * - `first` : ${type.number} : The maximum number of redemptions to return per page in the response. The minimum page size is 1 redemption per page and the maximum is 50. The default is 20.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of redemptions for the specified reward. The list is empty if there are no redemptions that match the redemption criteria.  |
 * | ___broadcaster_id | ${type.string}  | The ID that uniquely identifies the broadcaster.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___id | ${type.string}  | The ID that uniquely identifies this redemption.  |
 * | ___user_login | ${type.string}  | The user’s login name.  |
 * | ___user_id | ${type.string}  | The ID that uniquely identifies the user that redeemed the reward.  |
 * | ___user_name | ${type.string}  | The user’s display name.  |
 * | ___user_input | ${type.string}  | The text the user entered at the prompt when they redeemed the reward; otherwise, an empty string if user input was not required.  |
 * | ___status | ${type.string}  | The state of the redemption. Possible values are:CANCELEDFULFILLEDUNFULFILLED  |
 * | ___redeemed_at | ${type.string}  | The date and time of when the reward was redeemed, in RFC3339 format.  |
 * | ___reward | ${type.struct}  | The reward that the user redeemed.  |
 * | ______id | ${type.string}  | The ID that uniquely identifies the redeemed reward.  |
 * | ______title | ${type.string}  | The reward’s title.  |
 * | ______prompt | ${type.string}  | The prompt displayed to the viewer if user input is required.  |
 * | ______cost | ${type.int64}  | The reward’s cost, in Channel Points.  |
 * @event_end
@func_end
 */
function twitch_channel_points_get_custom_reward_redemption(broadcaster_id,reward_id,status,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_channel_points_update_custom_reward
 * @desc Updates a custom reward. The app used to create the reward is the only app that may update the reward.

Requires a user access token that includes the channel:manage:redemptions scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-custom-reward)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that’s updating the reward. This ID must match the user ID found in the OAuth token. 
 * @param {string} id The ID of the reward to update. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `title` : ${type.string} : The reward’s title. The title may contain a maximum of 45 characters and it must be unique amongst all of the broadcaster’s custom rewards.
 * - `prompt` : ${type.string} : The prompt shown to the viewer when they redeem the reward. Specify a prompt if <code class="highlighter-rouge">is_user_input_required</code> is <strong>true</strong>. The prompt is limited to a maximum of 200 characters.
 * - `cost` : ${int64} : The cost of the reward, in channel points. The minimum is 1 point.
 * - `background_color` : ${type.string} : The background color to use for the reward. Specify the color using Hex format (for example, \#00E5CB).
 * - `is_enabled` : ${type.boolean} : A Boolean value that indicates whether the reward is enabled. Set to <strong>true</strong> to enable the reward. Viewers see only enabled rewards.
 * - `is_user_input_required` : ${type.boolean} : A Boolean value that determines whether users must enter information to redeem the reward. Set to <strong>true</strong> if user input is required. See the <code class="highlighter-rouge">prompt</code> field.
 * - `is_max_per_stream_enabled` : ${type.boolean} : A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream (see the <code class="highlighter-rouge">max_per_stream</code> field). Set to <strong>true</strong> to limit redemptions.
 * - `max_per_stream` : ${int64} : The maximum number of redemptions allowed per live stream. Applied only if <code class="highlighter-rouge">is_max_per_stream_enabled</code> is <strong>true</strong>. The minimum value is 1.
 * - `is_max_per_user_per_stream_enabled` : ${type.boolean} : A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream (see <code class="highlighter-rouge">max_per_user_per_stream</code>). The minimum value is 1. Set to <strong>true</strong> to limit redemptions.
 * - `max_per_user_per_stream` : ${int64} : The maximum number of redemptions allowed per user per stream. Applied only if <code class="highlighter-rouge">is_max_per_user_per_stream_enabled</code> is <strong>true</strong>.
 * - `is_global_cooldown_enabled` : ${type.boolean} : A Boolean value that determines whether to apply a cooldown period between redemptions. Set to <strong>true</strong> to apply a cooldown period. For the duration of the cooldown period, see <code class="highlighter-rouge">global_cooldown_seconds</code>.
 * - `global_cooldown_seconds` : ${int64} : The cooldown period, in seconds. Applied only if <code class="highlighter-rouge">is_global_cooldown_enabled</code> is <strong>true</strong>. The minimum value is 1; however, for it to be shown in the Twitch UX, the minimum value is 60.
 * - `is_paused` : ${type.boolean} : A Boolean value that determines whether to pause the reward. Set to <strong>true</strong> to pause the reward. Viewers can’t redeem paused rewards..
 * - `should_redemptions_skip_request_queue` : ${type.boolean} : A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If <strong>false</strong>, status is set to UNFULFILLED and follows the normal request queue process.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list contains the single reward that you updated.  |
 * | __broadcaster_id | ${type.string}  | The ID that uniquely identifies the broadcaster.  |
 * | __broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | __broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | __id | ${type.string}  | The ID that uniquely identifies this custom reward.  |
 * | __title | ${type.string}  | The title of the reward.  |
 * | __prompt | ${type.string}  | The prompt shown to the viewer when they redeem the reward if user input is required. See the is_user_input_required field.  |
 * | __cost | ${type.int64}  | The cost of the reward in Channel Points.  |
 * | __image | ${type.struct}  | A set of custom images for the reward. This field is null if the broadcaster didn’t upload images.  |
 * | ___url_1x | ${type.string}  | The URL to a small version of the image.  |
 * | ___url_2x | ${type.string}  | The URL to a medium version of the image.  |
 * | ___url_4x | ${type.string}  | The URL to a large version of the image.  |
 * | __default_image | ${type.struct}  | A set of default images for the reward.  |
 * | ___url_1x | ${type.string}  | The URL to a small version of the image.  |
 * | ___url_2x | ${type.string}  | The URL to a medium version of the image.  |
 * | ___url_4x | ${type.string}  | The URL to a large version of the image.  |
 * | __background_color | ${type.string}  | The background color to use for the reward. The color is in Hex format (for example, #00E5CB).  |
 * | __is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward is enabled. Is true if enabled; otherwise, false. Disabled rewards aren’t shown to the user.  |
 * | __is_user_input_required | ${type.boolean}  | A Boolean value that determines whether the user must enter information when they redeem the reward. Is true if the user is prompted.  |
 * | __max_per_stream_setting | ${type.struct}  | The settings used to determine whether to apply a maximum to the number of redemptions allowed per live stream.  |
 * | ___is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per live stream. Is true if the reward applies a limit.  |
 * | ___max_per_stream | ${type.int64}  | The maximum number of redemptions allowed per live stream.  |
 * | __max_per_user_per_stream_setting | ${type.struct}  | The settings used to determine whether to apply a maximum to the number of redemptions allowed per user per live stream.  |
 * | ___is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per user per live stream. Is true if the reward applies a limit.  |
 * | ___max_per_user_per_stream | ${type.int64}  | The maximum number of redemptions allowed per user per live stream.  |
 * | __global_cooldown_setting | ${type.struct}  | The settings used to determine whether to apply a cooldown period between redemptions and the length of the cooldown.  |
 * | ___is_enabled | ${type.boolean}  | A Boolean value that determines whether to apply a cooldown period. Is true if a cooldown period is enabled.  |
 * | ___global_cooldown_seconds | ${type.int64}  | The cooldown period, in seconds.  |
 * | __is_paused | ${type.boolean}  | A Boolean value that determines whether the reward is currently paused. Is true if the reward is paused. Viewers can’t redeem paused rewards.  |
 * | __is_in_stock | ${type.boolean}  | A Boolean value that determines whether the reward is currently in stock. Is true if the reward is in stock. Viewers can’t redeem out of stock rewards.  |
 * | __should_redemptions_skip_request_queue | ${type.boolean}  | A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If false, status is set to UNFULFILLED and follows the normal request queue process.  |
 * | __redemptions_redeemed_current_stream | ${type.number}  | The number of redemptions redeemed during the current live stream. The number counts against the max_per_stream_setting limit. This field is null if the broadcaster’s stream isn’t live or max_per_stream_setting isn’t enabled.  |
 * | __cooldown_expires_at | ${type.string}  | The timestamp of when the cooldown period expires. Is null if the reward isn’t in a cooldown state. See the global_cooldown_setting field.  |
 * @event_end
@func_end
 */
function twitch_channel_points_update_custom_reward(broadcaster_id,id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_channel_points_update_redemption_status
 * @desc Updates a redemption’s status. You may update a redemption only if its status is UNFULFILLED. The app used to create the reward is the only app that may update the redemption.

Requires a user access token that includes the channel:manage:redemptions scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-redemption-status)
 * 
 * @param {string} id A list of IDs that identify the redemptions to update. To specify more than one ID, include this parameter for each redemption you want to update. For example, id=1234&amp;id=5678. You may specify a maximum of 50 IDs. 
 * @param {string} broadcaster_id The ID of the broadcaster that’s updating the redemption. This ID must match the user ID in the user access token. 
 * @param {string} reward_id The ID that identifies the reward that’s been redeemed. 
 * @param {string} status The status to set the redemption to. Possible values are:CANCELEDFULFILLEDSetting the status to CANCELED refunds the user’s channel points. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list contains the single redemption that you updated.  |
 * | ___broadcaster_id | ${type.string}  | The ID that uniquely identifies the broadcaster.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___id | ${type.string}  | The ID that uniquely identifies this redemption..  |
 * | ___user_id | ${type.string}  | The ID of the user that redeemed the reward.  |
 * | ___user_name | ${type.string}  | The user’s display name.  |
 * | ___user_login | ${type.string}  | The user’s login name.  |
 * | ___reward | ${type.struct}  | An object that describes the reward that the user redeemed.  |
 * | ______id | ${type.string}  | The ID that uniquely identifies the reward.  |
 * | ______title | ${type.string}  | The reward’s title.  |
 * | ______prompt | ${type.string}  | The prompt displayed to the viewer if user input is required.  |
 * | ______cost | ${type.int64}  | The reward’s cost, in Channel Points.  |
 * | ___user_input | ${type.string}  | The text that the user entered at the prompt when they redeemed the reward; otherwise, an empty string if user input was not required.  |
 * | ___status | ${type.string}  | The state of the redemption. Possible values are:CANCELEDFULFILLEDUNFULFILLED  |
 * | ___redeemed_at | ${type.string}  | The date and time of when the reward was redeemed, in RFC3339 format.  |
 * @event_end
@func_end
 */
function twitch_channel_points_update_redemption_status(id,broadcaster_id,reward_id,status,callback_success,callback_failed) {}


/**
 * @func twitch_charity_get_charity_campaign
 * @desc Gets information about the charity campaign that a broadcaster is running. For example, the campaign’s fundraising goal and the current amount of donations.

To receive events when progress is made towards the campaign’s goal or the broadcaster changes the fundraising goal, subscribe to the channel.charity_campaign.progress subscription type.

Requires a user access token that includes the channel:read:charity scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-charity-campaign)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that’s currently running a charity campaign. This ID must match the user ID in the access token. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the charity campaign that the broadcaster is currently running. The list is empty if the broadcaster is not running a charity campaign; the campaign information is not available after the campaign ends.  |
 * | ___id | ${type.string}  | An ID that identifies the charity campaign.  |
 * | ___broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that’s running the campaign.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___charity_name | ${type.string}  | The charity’s name.  |
 * | ___charity_description | ${type.string}  | A description of the charity.  |
 * | ___charity_logo | ${type.string}  | A URL to an image of the charity’s logo. The image’s type is PNG and its size is 100px X 100px.  |
 * | ___charity_website | ${type.string}  | A URL to the charity’s website.  |
 * | ___current_amount | ${type.struct}  | The current amount of donations that the campaign has received.  |
 * | ______value | ${type.number}  | The monetary amount. The amount is specified in the currency’s minor unit. For example, the minor units for USD is cents, so if the amount is $5.50 USD, value is set to 550.  |
 * | ______decimal_places | ${type.number}  | The number of decimal places used by the currency. For example, USD uses two decimal places. Use this number to translate value from minor units to major units by using the formula:value / 10^decimal_places  |
 * | ______currency | ${type.string}  | The ISO-4217 three-letter currency code that identifies the type of currency in value.  |
 * | ___target_amount | ${type.struct}  | The campaign’s fundraising goal. This field is null if the broadcaster has not defined a fundraising goal.  |
 * | ______value | ${type.number}  | The monetary amount. The amount is specified in the currency’s minor unit. For example, the minor units for USD is cents, so if the amount is $5.50 USD, value is set to 550.  |
 * | ______decimal_places | ${type.number}  | The number of decimal places used by the currency. For example, USD uses two decimal places. Use this number to translate value from minor units to major units by using the formula:value / 10^decimal_places  |
 * | ______currency | ${type.string}  | The ISO-4217 three-letter currency code that identifies the type of currency in value.  |
 * @event_end
@func_end
 */
function twitch_charity_get_charity_campaign(broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_charity_get_charity_campaign_donations
 * @desc Gets the list of donations that users have made to the broadcaster’s active charity campaign.

To receive events as donations occur, subscribe to the channel.charity_campaign.donate subscription type.

Requires a user access token that includes the channel:read:charity scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-charity-campaign-donations)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that’s currently running a charity campaign. This ID must match the user ID in the access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the donations that users have made to the broadcaster’s charity campaign.  The list is empty if the broadcaster is not currently running a charity campaign; the donation information is not available after the campaign ends.  |
 * | ___id | ${type.string}  | An ID that identifies the donation. The ID is unique across campaigns.  |
 * | ___campaign_id | ${type.string}  | An ID that identifies the charity campaign that the donation applies to.  |
 * | ___user_id | ${type.string}  | An ID that identifies a user that donated money to the campaign.  |
 * | ___user_login | ${type.string}  | The user’s login name.  |
 * | ___user_name | ${type.string}  | The user’s display name.  |
 * | ___amount | ${type.struct}  | An object that contains the amount of money that the user donated.  |
 * | ______value | ${type.number}  | The monetary amount. The amount is specified in the currency’s minor unit. For example, the minor units for USD is cents, so if the amount is $5.50 USD, value is set to 550.  |
 * | ______decimal_places | ${type.number}  | The number of decimal places used by the currency. For example, USD uses two decimal places. Use this number to translate value from minor units to major units by using the formula:value / 10^decimal_places  |
 * | ______currency | ${type.string}  | The ISO-4217 three-letter currency code that identifies the type of currency in value.  |
 * | pagination | ${type.struct}  | An object that contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * @event_end
@func_end
 */
function twitch_charity_get_charity_campaign_donations(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_chat_get_chatters
 * @desc Gets the list of users that are connected to the broadcaster’s chat session.

NOTE: There is a delay between when users join and leave a chat and when the list is updated accordingly.

To determine whether a user is a moderator or VIP, use the Get Moderators and Get VIPs endpoints. You can check the roles of up to 100 users.

Requires a user access token that includes the moderator:read:chatters scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-chatters)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose list of chatters you want to get. 
 * @param {string} moderator_id The ID of the broadcaster or one of the broadcaster’s moderators. This ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 1,000. The default is 100.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users that are connected to the broadcaster’s chat room. The list is empty if no users are connected to the chat room.  |
 * | ___user_id | ${type.string}  | The ID of a user that’s connected to the broadcaster’s chat room.  |
 * | ___user_login | ${type.string}  | The user’s login name.  |
 * | ___user_name | ${type.string}  | The user’s display name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * | total | ${type.number}  | The total number of users that are connected to the broadcaster’s chat room. As you page through the list, the number of users may change as users join and leave the chat room.  |
 * @event_end
@func_end
 */
function twitch_chat_get_chatters(broadcaster_id,moderator_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_chat_get_channel_emotes
 * @desc Gets the broadcaster’s list of custom emotes. Broadcasters create these custom emotes for users who subscribe to or follow the channel or cheer Bits in the channel’s chat window. Learn More

For information about the custom emotes, see subscriber emotes, Bits tier emotes, and follower emotes.

NOTE: With the exception of custom follower emotes, users may use custom emotes in any Twitch chat.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-channel-emotes)
 * 
 * @param {string} broadcaster_id An ID that identifies the broadcaster whose emotes you want to get. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of emotes that the specified broadcaster created. If the broadcaster hasn't created custom emotes, the list is empty.  |
 * | __id | ${type.string}  | An ID that identifies this emote.  |
 * | __name | ${type.string}  | The name of the emote. This is the name that viewers type in the chat window to get the emote to appear.  |
 * | __images | ${type.struct}  | The image URLs for the emote. These image URLs always provide a static, non-animated emote image with a light background.NOTE: You should use the templated URL in the template field to fetch the image instead of using these URLs.  |
 * | ___url_1x | ${type.string}  | A URL to the small version (28px x 28px) of the emote.  |
 * | ___url_2x | ${type.string}  | A URL to the medium version (56px x 56px) of the emote.  |
 * | ___url_4x | ${type.string}  | A URL to the large version (112px x 112px) of the emote.  |
 * | __tier | ${type.string}  | The subscriber tier at which the emote is unlocked. This field contains the tier information only if emote_type is set to subscriptions, otherwise, it's an empty string.  |
 * | __emote_type | ${type.string}  | The type of emote. The possible values are:bitstier — A custom Bits tier emote.follower — A custom follower emote.subscriptions — A custom subscriber emote.  |
 * | __emote_set_id | ${type.string}  | An ID that identifies the emote set that the emote belongs to.  |
 * | __format | ${type.array} of ${type.string}  | The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only static. But if the emote is available as a static PNG and an animated GIF, the array contains static and animated. The possible formats are:animated — An animated GIF is available for this emote.static — A static PNG file is available for this emote.  |
 * | __scale | ${type.array} of ${type.string}  | The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0. Possible sizes are:1.0 — A small version (28px x 28px) is available.2.0 — A medium version (56px x 56px) is available.3.0 — A large version (112px x 112px) is available.  |
 * | __theme_mode | ${type.array} of ${type.string}  | The background themes that the emote is available in. Possible themes are:darklight  |
 * | template | ${type.string}  | A templated URL. Use the values from the id, format, scale, and theme_mode fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes, see Emote CDN URL format. You should use this template instead of using the URLs in the images object.  |
 * @event_end
@func_end
 */
function twitch_chat_get_channel_emotes(broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_chat_get_global_emotes
 * @desc Gets the list of global emotes. Global emotes are Twitch-created emotes that users can use in any Twitch chat.

Learn More

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-global-emotes)
 * 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of global emotes.  |
 * | __id | ${type.string}  | An ID that identifies this emote.  |
 * | __name | ${type.string}  | The name of the emote. This is the name that viewers type in the chat window to get the emote to appear.  |
 * | __images | ${type.struct}  | The image URLs for the emote. These image URLs always provide a static, non-animated emote image with a light background.NOTE: You should use the templated URL in the template field to fetch the image instead of using these URLs.  |
 * | ___url_1x | ${type.string}  | A URL to the small version (28px x 28px) of the emote.  |
 * | ___url_2x | ${type.string}  | A URL to the medium version (56px x 56px) of the emote.  |
 * | ___url_4x | ${type.string}  | A URL to the large version (112px x 112px) of the emote.  |
 * | __format | ${type.array} of ${type.string}  | The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only static. But if the emote is available as a static PNG and an animated GIF, the array contains static and animated. The possible formats are:animated — An animated GIF is available for this emote.static — A static PNG file is available for this emote.  |
 * | __scale | ${type.array} of ${type.string}  | The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0. Possible sizes are:1.0 — A small version (28px x 28px) is available.2.0 — A medium version (56px x 56px) is available.3.0 — A large version (112px x 112px) is available.  |
 * | __theme_mode | ${type.array} of ${type.string}  | The background themes that the emote is available in. Possible themes are:darklight  |
 * | template | ${type.string}  | A templated URL. Use the values from the id, format, scale, and theme_mode fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes, see Emote CDN URL format. You should use this template instead of using the URLs in the images object.  |
 * @event_end
@func_end
 */
function twitch_chat_get_global_emotes(callback_success,callback_failed) {}


/**
 * @func twitch_chat_get_emote_sets
 * @desc Gets emotes for one or more specified emote sets.

An emote set groups emotes that have a similar context. For example, Twitch places all the subscriber emotes that a broadcaster uploads for their channel in the same emote set.

Learn More

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-emote-sets)
 * 
 * @param {string} emote_set_id An ID that identifies the emote set to get. Include this parameter for each emote set you want to get. For example, emote_set_id=1234&amp;emote_set_id=5678. You may specify a maximum of 25 IDs. The response contains only the IDs that were found and ignores duplicate IDs.To get emote set IDs, use the Get Channel Emotes API. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of emotes found in the specified emote sets. The list is empty if none of the IDs were found. The list is in the same order as the set IDs specified in the request. Each set contains one or more emoticons.  |
 * | ___id | ${type.string}  | An ID that uniquely identifies this emote.  |
 * | ___name | ${type.string}  | The name of the emote. This is the name that viewers type in the chat window to get the emote to appear.  |
 * | ___images | ${type.struct}  | The image URLs for the emote. These image URLs always provide a static, non-animated emote image with a light background.NOTE: You should use the templated URL in the template field to fetch the image instead of using these URLs.  |
 * | ______url_1x | ${type.string}  | A URL to the small version (28px x 28px) of the emote.  |
 * | ______url_2x | ${type.string}  | A URL to the medium version (56px x 56px) of the emote.  |
 * | ______url_4x | ${type.string}  | A URL to the large version (112px x 112px) of the emote.  |
 * | ___emote_type | ${type.string}  | The type of emote. The possible values are: bitstier &mdash; A Bits tier emote.follower &mdash; A follower emote.subscriptions &mdash; A subscriber emote.  |
 * | ___emote_set_id | ${type.string}  | An ID that identifies the emote set that the emote belongs to.  |
 * | ___owner_id | ${type.string}  | The ID of the broadcaster who owns the emote.  |
 * | ___format | ${type.array} of ${type.string}  | The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only static. But if the emote is available as a static PNG and an animated GIF, the array contains static and animated. The possible formats are: animated &mdash; An animated GIF is available for this emote.static &mdash; A static PNG file is available for this emote.  |
 * | ___scale | ${type.array} of ${type.string}  | The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0. Possible sizes are: 1.0 &mdash; A small version (28px x 28px) is available.2.0 &mdash; A medium version (56px x 56px) is available.3.0 &mdash; A large version (112px x 112px) is available.  |
 * | ___theme_mode | ${type.array} of ${type.string}  | The background themes that the emote is available in. Possible themes are: darklight  |
 * | template | ${type.string}  | A templated URL. Use the values from the id, format, scale, and theme_mode fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes, see Emote CDN URL format. You should use this template instead of using the URLs in the images object.  |
 * @event_end
@func_end
 */
function twitch_chat_get_emote_sets(emote_set_id,callback_success,callback_failed) {}


/**
 * @func twitch_chat_get_channel_chat_badges
 * @desc Gets the broadcaster’s list of custom chat badges. The list is empty if the broadcaster hasn’t created custom chat badges. For information about custom badges, see subscriber badges and Bits badges.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-channel-chat-badges)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose chat badges you want to get. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of chat badges. The list is sorted in ascending order by set_id, and within a set, the list is sorted in ascending order by id.  |
 * | ___set_id | ${type.string}  | An ID that identifies this set of chat badges. For example, Bits or Subscriber.  |
 * | ___versions | ${type.array}  | The list of chat badges in this set.  |
 * | ______id | ${type.string}  | An ID that identifies this version of the badge. The ID can be any value. For example, for Bits, the ID is the Bits tier level, but for World of Warcraft, it could be Alliance or Horde.  |
 * | ______image_url_1x | ${type.string}  | A URL to the small version (18px x 18px) of the badge.  |
 * | ______image_url_2x | ${type.string}  | A URL to the medium version (36px x 36px) of the badge.  |
 * | ______image_url_4x | ${type.string}  | A URL to the large version (72px x 72px) of the badge.  |
 * | ______title | ${type.string}  | The title of the badge.  |
 * | ______description | ${type.string}  | The description of the badge.  |
 * | ______click_action | ${type.string}  | The action to take when clicking on the badge. Set to null if no action is specified.  |
 * | ______click_url | ${type.string}  | The URL to navigate to when clicking on the badge. Set to null if no URL is specified.  |
 * @event_end
@func_end
 */
function twitch_chat_get_channel_chat_badges(broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_chat_get_global_chat_badges
 * @desc Gets Twitch’s list of chat badges, which users may use in any channel’s chat room. For information about chat badges, see Twitch Chat Badges Guide.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-global-chat-badges)
 * 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of chat badges. The list is sorted in ascending order by set_id, and within a set, the list is sorted in ascending order by id.  |
 * | ___set_id | ${type.string}  | An ID that identifies this set of chat badges. For example, Bits or Subscriber.  |
 * | ___versions | ${type.array}  | The list of chat badges in this set.  |
 * | ______id | ${type.string}  | An ID that identifies this version of the badge. The ID can be any value. For example, for Bits, the ID is the Bits tier level, but for World of Warcraft, it could be Alliance or Horde.  |
 * | ______image_url_1x | ${type.string}  | A URL to the small version (18px x 18px) of the badge.  |
 * | ______image_url_2x | ${type.string}  | A URL to the medium version (36px x 36px) of the badge.  |
 * | ______image_url_4x | ${type.string}  | A URL to the large version (72px x 72px) of the badge.  |
 * | ______title | ${type.string}  | The title of the badge.  |
 * | ______description | ${type.string}  | The description of the badge.  |
 * | ______click_action | ${type.string}  | The action to take when clicking on the badge. Set to null if no action is specified.  |
 * | ______click_url | ${type.string}  | The URL to navigate to when clicking on the badge. Set to null if no URL is specified.  |
 * @event_end
@func_end
 */
function twitch_chat_get_global_chat_badges(callback_success,callback_failed) {}


/**
 * @func twitch_chat_get_chat_settings
 * @desc Gets the broadcaster’s chat settings.

For an overview of chat settings, see Chat Commands for Broadcasters and Moderators and Moderator Preferences.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-chat-settings)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose chat settings you want to get. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `moderator_id` : ${type.string} : The ID of the broadcaster or one of the broadcaster’s moderators.<br><br>This field is required only if you want to include the <code class="highlighter-rouge">non_moderator_chat_delay</code> and <code class="highlighter-rouge">non_moderator_chat_delay_duration</code> settings in the response.<br><br>If you specify this field, this ID must match the user ID in the user access token.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of chat settings. The list contains a single object with all the settings.  |
 * | ___broadcaster_id | ${type.string}  | The ID of the broadcaster specified in the request.  |
 * | ___emote_mode | ${type.boolean}  | A Boolean value that determines whether chat messages must contain only emotes. Is true if chat messages may contain only emotes; otherwise, false.  |
 * | ___follower_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster restricts the chat room to followers only.Is true if the broadcaster restricts the chat room to followers only; otherwise, false.See the follower_mode_duration field for how long users must follow the broadcaster before being able to participate in the chat room.  |
 * | ___follower_mode_duration | ${type.number}  | The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. Is null if follower_mode is false.  |
 * | ___moderator_id | ${type.string}  | The moderator’s ID. The response includes this field only if the request specifies a user access token that includes the  moderator:read:chat_settings scope.  |
 * | ___non_moderator_chat_delay | ${type.boolean}  | A Boolean value that determines whether the broadcaster adds a short delay before chat messages appear in the chat room. This gives chat moderators and bots a chance to remove them before viewers can see the message. See the non_moderator_chat_delay_duration field for the length of the delay. Is true if the broadcaster applies a delay; otherwise, false.The response includes this field only if the request specifies a user access token that includes the  moderator:read:chat_settings scope and the user in the moderator_id query parameter is one of the broadcaster’s moderators.  |
 * | ___non_moderator_chat_delay_duration | ${type.number}  | The amount of time, in seconds, that messages are delayed before appearing in chat. Is null if non_moderator_chat_delay is false.The response includes this field only if the request specifies a user access token that includes the  moderator:read:chat_settings scope and the user in the moderator_id query parameter is one of the broadcaster’s moderators.  |
 * | ___slow_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages.Is true if the broadcaster applies a delay; otherwise, false.See the slow_mode_wait_time field for the delay.  |
 * | ___slow_mode_wait_time | ${type.number}  | The amount of time, in seconds, that users must wait between sending messages.Is null if slow_mode is false.  |
 * | ___subscriber_mode | ${type.boolean}  | A Boolean value that determines whether only users that subscribe to the broadcaster’s channel may talk in the chat room.Is true if the broadcaster restricts the chat room to subscribers only; otherwise, false.  |
 * | ___unique_chat_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room.Is true if the broadcaster requires unique messages only; otherwise, false.  |
 * @event_end
@func_end
 */
function twitch_chat_get_chat_settings(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_chat_get_user_emotes
 * @desc NEW Retrieves emotes available to the user across all channels.

Requires a user access token that includes the user:read:emotes scope.

Query parameter user_id must match the user_id in the user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-user-emotes)
 * 
 * @param {string} user_id The ID of the user. This ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `after` : ${type.string} : The cursor used to get the next page of results. The Pagination object in the response contains the cursor’s value.
 * - `broadcaster_id` : ${type.string} : The User ID of a broadcaster you wish to get follower emotes of. Using this query parameter will guarantee inclusion of the broadcaster’s follower emotes in the response body.  <br><br><strong>Note:</strong> If the user specified in <code class="highlighter-rouge">user_id</code> is subscribed to the broadcaster specified, their follower emotes will appear in the response body regardless if this query parameter is used.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  |   |
 * | ___id | ${type.string}  | An ID that uniquely identifies this emote.  |
 * | ___name | ${type.string}  | The User ID of broadcaster whose channel is receiving the unban request.  |
 * | ___emote_type | ${type.string}  | The type of emote. The possible values are: none — No emote type was assigned to this emote.bitstier — A Bits tier emote.follower — A follower emote.subscriptions — A subscriber emote.channelpoints — An emote granted by using channel points.rewards — An emote granted to the user through a special event.hypetrain — An emote granted for participation in a Hype Train.prime — An emote granted for linking an Amazon Prime account.turbo — An emote granted for having Twitch Turbo.smilies — Emoticons supported by Twitch.globals — An emote accessible by everyone.owl2019 — Emotes related to Overwatch League 2019.twofactor — Emotes granted by enabling two-factor authentication on an account.limitedtime — Emotes that were granted for only a limited time.  |
 * | ___emote_set_id | ${type.string}  | An ID that identifies the emote set that the emote belongs to.  |
 * | ___owner_id | ${type.string}  | The ID of the broadcaster who owns the emote.  |
 * | ___format | ${type.array} of ${type.string}  | The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only static. But if the emote is available as a static PNG and an animated GIF, the array contains static and animated. animated —  An animated GIF is available for this emote.static — A static PNG file is available for this emote.  |
 * | ___scale | ${type.array} of ${type.string}  | The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0.   1.0 —  A small version (28px x 28px) is available.2.0 — A medium version (56px x 56px) is available.3.0 —  A large version (112px x 112px) is available.  |
 * | ___theme_mode | ${type.array} of ${type.string}  | The background themes that the emote is available in.  darklight  |
 * | template | ${type.string}  | A templated URL. Uses the values from the id, format, scale, and theme_mode fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote.  For information about what the template looks like and how to use it to fetch emotes, see Emote CDN URL format.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.  For more information about pagination support, see Twitch API Guide - Pagination.  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * @event_end
@func_end
 */
function twitch_chat_get_user_emotes(user_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_chat_update_chat_settings
 * @desc Updates the broadcaster’s chat settings.

Requires a user access token that includes the moderator:manage:chat_settings scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-chat-settings)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose chat settings you want to update. 
 * @param {string} moderator_id The ID of a user that has permission to moderate the broadcaster’s chat room, or the broadcaster’s ID if they’re making the update. This ID must match the user ID in the user access token. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | emote_mode | ${type.boolean}  | A Boolean value that determines whether chat messages must contain only emotes.Set to true if only emotes are allowed; otherwise, false. The default is false.  |
 * | follower_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster restricts the chat room to followers only.Set to true if the broadcaster restricts the chat room to followers only; otherwise, false. The default is true.To specify how long users must follow the broadcaster before being able to participate in the chat room, see the follower_mode_duration field.  |
 * | follower_mode_duration | ${type.number}  | The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. Set only if follower_mode is true. Possible values are: 0 (no restriction) through 129600 (3 months). The default is 0.  |
 * | non_moderator_chat_delay | ${type.boolean}  | A Boolean value that determines whether the broadcaster adds a short delay before chat messages appear in the chat room. This gives chat moderators and bots a chance to remove them before viewers can see the message.Set to true if the broadcaster applies a delay; otherwise, false. The default is false.To specify the length of the delay, see the non_moderator_chat_delay_duration field.  |
 * | non_moderator_chat_delay_duration | ${type.number}  | The amount of time, in seconds, that messages are delayed before appearing in chat. Set only if non_moderator_chat_delay is true. Possible values are:2  &mdash;  2 second delay (recommended)4  &mdash;  4 second delay6  &mdash;  6 second delay  |
 * | slow_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages. Set to true if the broadcaster applies a wait period between messages; otherwise, false. The default is false.To specify the delay, see the slow_mode_wait_time field.  |
 * | slow_mode_wait_time | ${type.number}  | The amount of time, in seconds, that users must wait between sending messages. Set only if slow_mode is true.Possible values are: 3 (3 second delay) through 120 (2 minute delay). The default is 30 seconds.  |
 * | subscriber_mode | ${type.boolean}  | A Boolean value that determines whether only users that subscribe to the broadcaster’s channel may talk in the chat room.Set to true if the broadcaster restricts the chat room to subscribers only; otherwise, false. The default is false.  |
 * | unique_chat_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room.Set to true if the broadcaster allows only unique messages; otherwise, false. The default is false.  |
 * | data | ${type.array}  | The list of chat settings. The list contains a single object with all the settings.  |
 * | ___broadcaster_id | ${type.string}  | The ID of the broadcaster specified in the request.  |
 * | ___emote_mode | ${type.boolean}  | A Boolean value that determines whether chat messages must contain only emotes. Is true if chat messages may contain only emotes; otherwise, false.  |
 * | ___follower_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster restricts the chat room to followers only.Is true if the broadcaster restricts the chat room to followers only; otherwise, false.See the follower_mode_duration field for how long users must follow the broadcaster before being able to participate in the chat room.  |
 * | ___follower_mode_duration | ${type.number}  | The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. Is null if follower_mode is false.  |
 * | ___moderator_id | ${type.string}  | The moderator’s ID. The response includes this field only if the request specifies a user access token that includes the  moderator:read:chat_settings scope.  |
 * | ___non_moderator_chat_delay | ${type.boolean}  | A Boolean value that determines whether the broadcaster adds a short delay before chat messages appear in the chat room. This gives chat moderators and bots a chance to remove them before viewers can see the message. See the non_moderator_chat_delay_duration field for the length of the delay. Is true if the broadcaster applies a delay; otherwise, false.  |
 * | ___non_moderator_chat_delay_duration | ${type.number}  | The amount of time, in seconds, that messages are delayed before appearing in chat. Is null if non_moderator_chat_delay is false.  |
 * | ___slow_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages.Is true if the broadcaster applies a delay; otherwise, false.See the slow_mode_wait_time field for the delay.  |
 * | ___slow_mode_wait_time | ${type.number}  | The amount of time, in seconds, that users must wait between sending messages.Is null if slow_mode is false.  |
 * | ___subscriber_mode | ${type.boolean}  | A Boolean value that determines whether only users that subscribe to the broadcaster’s channel may talk in the chat room.Is true if the broadcaster restricts the chat room to subscribers only; otherwise, false.  |
 * | ___unique_chat_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room.Is true if the broadcaster requires unique messages only; otherwise, false.  |
 * @event_end
@func_end
 */
function twitch_chat_update_chat_settings(broadcaster_id,moderator_id,callback_success,callback_failed) {}


/**
 * @func twitch_chat_send_chat_announcement
 * @desc Sends an announcement to the broadcaster’s chat room.

Requires a user access token that includes the moderator:manage:announcements scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#send-chat-announcement)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the chat room to send the announcement to. 
 * @param {string} moderator_id The ID of a user who has permission to moderate the broadcaster’s chat room, or the broadcaster’s ID if they’re sending the announcement. This ID must match the user ID in the user access token. 
 * @param {string} message The announcement to make in the broadcaster’s chat room. Announcements are limited to a maximum of 500 characters; announcements longer than 500 characters are truncated. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `color` : ${type.string} : The color used to highlight the announcement. Possible case-sensitive values are:<ul><li>blue</li><li>green</li><li>orange</li><li>purple</li><li>primary (default)</li></ul>If <code class="highlighter-rouge">color</code> is set to <em>primary</em> or is not set, the channel’s accent color is used to highlight the announcement (see <strong>Profile Accent Color</strong> under <a href="https://www.twitch.tv/settings/profile">profile settings</a>, <strong>Channel and Videos</strong>, and <strong>Brand</strong>).
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_chat_send_chat_announcement(broadcaster_id,moderator_id,message,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_chat_send_a_shoutout
 * @desc Sends a Shoutout to the specified broadcaster. Typically, you send Shoutouts when you or one of your moderators notice another broadcaster in your chat, the other broadcaster is coming up in conversation, or after they raid your broadcast.

Twitch’s Shoutout feature is a great way for you to show support for other broadcasters and help them grow. Viewers who do not follow the other broadcaster will see a pop-up Follow button in your chat that they can click to follow the other broadcaster. Learn More

Rate Limits The broadcaster may send a Shoutout once every 2 minutes. They may send the same broadcaster a Shoutout once every 60 minutes.

To receive notifications when a Shoutout is sent or received, subscribe to the channel.shoutout.create and channel.shoutout.receive subscription types. The channel.shoutout.create event includes cooldown periods that indicate when the broadcaster may send another Shoutout without exceeding the endpoint’s rate limit.

Requires a user access token that includes the moderator:manage:shoutouts scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#send-a-shoutout)
 * 
 * @param {string} from_broadcaster_id The ID of the broadcaster that’s sending the Shoutout. 
 * @param {string} to_broadcaster_id The ID of the broadcaster that’s receiving the Shoutout. 
 * @param {string} moderator_id The ID of the broadcaster or a user that is one of the broadcaster’s moderators. This ID must match the user ID in the access token. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_chat_send_a_shoutout(from_broadcaster_id,to_broadcaster_id,moderator_id,callback_success,callback_failed) {}


/**
 * @func twitch_chat_send_chat_message
 * @desc NEW Sends a message to the broadcaster’s chat room.

Requires an app access token or user access token that includes the user:write:chat scope. If app access token used, then additionally requires user:bot scope from chatting user, and either channel:bot scope from broadcaster or moderator status.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#send-chat-message)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose chat room the message will be sent to. 
 * @param {string} sender_id The ID of the user sending the message. This ID must match the user ID in the user access token. 
 * @param {string} message The message to send. The message is limited to a maximum of 500 characters. Chat messages can also include emoticons. To include emoticons, use the name of the emote. The names are case sensitive. Don’t include colons around the name (e.g., :bleedPurple:). If Twitch recognizes the name, Twitch converts the name to the emote before writing the chat message to the chat room 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `reply_parent_message_id` : ${type.string} : The ID of the chat message being replied to.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  |   |
 * | __message_id | ${type.string}  | The message id for the message that was sent.  |
 * | __is_sent | ${type.boolean}  | If the message passed all checks and was sent.  |
 * | __drop_reason | ${type.struct}  | The reason the message was dropped, if any.  |
 * | ___code | ${type.string}  | Code for why the message was dropped.  |
 * | ___message | ${type.string}  | Message for why the message was dropped.  |
 * @event_end
@func_end
 */
function twitch_chat_send_chat_message(broadcaster_id,sender_id,message,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_chat_get_user_chat_color
 * @desc Gets the color used for the user’s name in chat.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-user-chat-color)
 * 
 * @param {string} user_id The ID of the user whose username color you want to get. To specify more than one user, include the user_id parameter for each user to get. For example, &amp;user_id=1234&amp;user_id=5678. The maximum number of IDs that you may specify is 100.The API ignores duplicate IDs and IDs that weren’t found. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users and the color code they use for their name.  |
 * | ___user_id | ${type.string}  | An ID that uniquely identifies the user.  |
 * | ___user_login | ${type.string}  | The user’s login name.  |
 * | ___user_name | ${type.string}  | The user’s display name.  |
 * | ___color | ${type.string}  | The Hex color code that the user uses in chat for their name. If the user hasn’t specified a color in their settings, the string is empty.  |
 * @event_end
@func_end
 */
function twitch_chat_get_user_chat_color(user_id,callback_success,callback_failed) {}


/**
 * @func twitch_chat_update_user_chat_color
 * @desc Updates the color used for the user’s name in chat.

Requires a user access token that includes the user:manage:chat_color scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-user-chat-color)
 * 
 * @param {string} user_id The ID of the user whose chat color you want to update. This ID must match the user ID in the access token. 
 * @param {string} color The color to use for the user's name in chat. All users may specify one of the following named color values.blueblue_violetcadet_bluechocolatecoraldodger_bluefirebrickgolden_rodgreenhot_pinkorange_redredsea_greenspring_greenyellow_greenTurbo and Prime users may specify a named color or a Hex color code like #9146FF. If you use a Hex color code, remember to URL encode it. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_chat_update_user_chat_color(user_id,color,callback_success,callback_failed) {}


/**
 * @func twitch_clips_create_clip
 * @desc Creates a clip from the broadcaster’s stream.

This API captures up to 90 seconds of the broadcaster’s stream. The 90 seconds spans the point in the stream from when you called the API. For example, if you call the API at the 4:00 minute mark, the API captures from approximately the 3:35 mark to approximately the 4:05 minute mark. Twitch tries its best to capture 90 seconds of the stream, but the actual length may be less. This may occur if you begin capturing the clip near the beginning or end of the stream.

By default, Twitch publishes up to the last 30 seconds of the 90 seconds window and provides a default title for the clip. To specify the title and the portion of the 90 seconds window that’s used for the clip, use the URL in the response’s edit_url field. You can specify a clip that’s from 5 seconds to 60 seconds in length. The URL is valid for up to 24 hours or until the clip is published, whichever comes first.

Creating a clip is an asynchronous process that can take a short amount of time to complete. To determine whether the clip was successfully created, call Get Clips using the clip ID that this request returned. If Get Clips returns the clip, the clip was successfully created. If after 15 seconds Get Clips hasn’t returned the clip, assume it failed.

Requires a user access token that includes the clips:edit scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#create-clip)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose stream you want to create a clip from. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `has_delay` : ${type.boolean} : A Boolean value that determines whether the API captures the clip at the moment the viewer requests it or after a delay. If <strong>false</strong> (default), Twitch captures the clip at the moment the viewer requests it (this is the same clip experience as the Twitch UX). If <strong>true</strong>, Twitch adds a delay before capturing the clip (this basically shifts the capture window to the right slightly).
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | edit_url | ${type.string}  | A URL that you can use to edit the clip’s title, identify the part of the clip to publish, and publish the clip. Learn MoreThe URL is valid for up to 24 hours or until the clip is published, whichever comes first.  |
 * | id | ${type.string}  | An ID that uniquely identifies the clip.  |
 * @event_end
@func_end
 */
function twitch_clips_create_clip(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_clips_get_clips
 * @desc Gets one or more video clips that were captured from streams. For information about clips, see How to use clips.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-clips)
 * 
 * @param {string} broadcaster_id An ID that identifies the broadcaster whose video clips you want to get. Use this parameter to get clips that were captured from the broadcaster’s streams. 
 * @param {string} game_id An ID that identifies the game whose clips you want to get. Use this parameter to get clips that were captured from streams that were playing this game. 
 * @param {string} id An ID that identifies the clip to get. To specify more than one ID, include this parameter for each clip you want to get. For example, id=foo&amp;id=bar. You may specify a maximum of 100 IDs. The API ignores duplicate IDs and IDs that aren’t found. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `started_at` : ${type.string} : The start date used to filter clips. The API returns only clips within the start and end date window. Specify the date and time in RFC3339 format.
 * - `ended_at` : ${type.string} : The end date used to filter clips. If not specified, the time window is the start date plus one week. Specify the date and time in RFC3339 format.
 * - `first` : ${type.number} : The maximum number of clips to return per page in the response. The minimum page size is 1 clip per page and the maximum is 100. The default is 20.
 * - `before` : ${type.string} : The cursor used to get the previous page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 * - `is_featured` : ${type.boolean} : A Boolean value that determines whether the response includes featured clips. If <strong>true</strong>, returns only clips that are featured. If <strong>false</strong>, returns only clips that aren’t featured. All clips are returned if this parameter is not present.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of video clips. For clips returned by game_id or broadcaster_id, the list is in descending order by view count. For lists returned by id, the list is in the same order as the input IDs.  |
 * | __id | ${type.string}  | An ID that uniquely identifies the clip.  |
 * | __url | ${type.string}  | A URL to the clip.  |
 * | __embed_url | ${type.string}  | A URL that you can use in an iframe to embed the clip (see Embedding Video and Clips).  |
 * | __broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that the video was clipped from.  |
 * | __broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | __creator_id | ${type.string}  | An ID that identifies the user that created the clip.  |
 * | __creator_name | ${type.string}  | The user’s display name.  |
 * | __video_id | ${type.string}  | An ID that identifies the video that the clip came from. This field contains an empty string if the video is not available.  |
 * | __game_id | ${type.string}  | The ID of the game that was being played when the clip was created.  |
 * | __language | ${type.string}  | The ISO 639-1 two-letter language code that the broadcaster broadcasts in. For example, en for English. The value is other if the broadcaster uses a language that Twitch doesn’t support.  |
 * | __title | ${type.string}  | The title of the clip.  |
 * | __view_count | ${type.number}  | The number of times the clip has been viewed.  |
 * | __created_at | ${type.string}  | The date and time of when the clip was created. The date and time is in RFC3339 format.  |
 * | __thumbnail_url | ${type.string}  | A URL to a thumbnail image of the clip.  |
 * | __duration | ${type.float}  | The length of the clip, in seconds. Precision is 0.1.  |
 * | __vod_offset | ${type.number}  | The zero-based offset, in seconds, to where the clip starts in the video (VOD). Is null if the video is not available or hasn’t been created yet from the live stream (see video_id).Note that there’s a delay between when a clip is created during a broadcast and when the offset is set. During the delay period, vod_offset is null. The delay is indeterminant but is typically minutes long.  |
 * | __is_featured | ${type.boolean}  | A Boolean value that indicates if the clip is featured or not.  |
 * | pagination | ${type.struct}  | The information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | __cursor | ${type.string}  | The cursor used to get the next page of results. Set the request’s after or before query parameter to this value depending on whether you’re paging forwards or backwards.  |
 * @event_end
@func_end
 */
function twitch_clips_get_clips(broadcaster_id,game_id,id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_conduits_get_conduits
 * @desc NEW  Gets the conduits for a client ID.

Requires an app access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-conduits)
 * 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | List of information about the client’s conduits.  |
 * | __id | ${type.string}  | Conduit ID.  |
 * | __shard_count | ${type.number}  | Number of shards associated with this conduit.  |
 * @event_end
@func_end
 */
function twitch_conduits_get_conduits(callback_success,callback_failed) {}


/**
 * @func twitch_conduits_create_conduits
 * @desc NEW Creates a new conduit.

Requires an app access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#create-conduits)
 * 
 * @param {number} shard_count The number of shards to create for this conduit. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | List of information about the client’s conduits.  |
 * | __id | ${type.string}  | Conduit ID.  |
 * | __shard_count | ${type.number}  | Number of shards created for this conduit.  |
 * @event_end
@func_end
 */
function twitch_conduits_create_conduits(shard_count,callback_success,callback_failed) {}


/**
 * @func twitch_conduits_update_conduits
 * @desc NEW Updates a conduit’s shard count. To delete shards, update the count to a lower number, and the shards above the count will be deleted. For example, if the existing shard count is 100, by resetting shard count to 50, shards 50-99 are disabled.

Requires an app access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-conduits)
 * 
 * @param {string} id Conduit ID. 
 * @param {number} shard_count The new number of shards for this conduit. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | List of information about the client’s conduits.  |
 * | __id | ${type.string}  | Conduit ID.  |
 * | __shard_count | ${type.number}  | Number of shards associated with this conduit after the update.  |
 * @event_end
@func_end
 */
function twitch_conduits_update_conduits(id,shard_count,callback_success,callback_failed) {}


/**
 * @func twitch_conduits_delete_conduit
 * @desc NEW Deletes a specified conduit. Note that it may take some time for Eventsub subscriptions on a deleted conduit to show as disabled when calling Get Eventsub Subscriptions.

Requires an app access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#delete-conduit)
 * 
 * @param {string} id Conduit ID. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_conduits_delete_conduit(id,callback_success,callback_failed) {}


/**
 * @func twitch_conduits_get_conduit_shards
 * @desc NEW Gets a lists of all shards for a conduit.

Requires an app access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-conduit-shards)
 * 
 * @param {string} conduit_id Conduit ID. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `status` : ${type.string} : Status to filter by.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The pagination object in the response contains the cursor’s value.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | List of information about a conduit's shards.  |
 * | __id | ${type.string}  | Shard ID.  |
 * | __status | ${type.string}  | The shard status. The subscriber receives events only for enabled shards. Possible values are:enabled — The shard is enabled.webhook_callback_verification_pending — The shard is pending verification of the specified callback URL.webhook_callback_verification_failed — The specified callback URL failed verification.notification_failures_exceeded — The notification delivery failure rate was too high.websocket_disconnected — The client closed the connection.websocket_failed_ping_pong — The client failed to respond to a ping message.websocket_received_inbound_traffic — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message).websocket_internal_error — The Twitch WebSocket server experienced an unexpected error.websocket_network_timeout — The Twitch WebSocket server timed out writing the message to the client.websocket_network_error — The Twitch WebSocket server experienced a network error writing the message to the client.websocket_failed_to_reconnect - The client failed to reconnect to the Twitch WebSocket server within the required time after a Reconnect Message.  |
 * | __transport | ${type.struct}  | The transport details used to send the notifications.  |
 * | ___method | ${type.string}  | The transport method. Possible values are:webhookwebsocket  |
 * | ___callback | ${type.string}  | The callback URL where the notifications are sent. Included only if method is set to webhook.  |
 * | ___session_id | ${type.string}  | An ID that identifies the WebSocket that notifications are sent to. Included only if method is set to websocket.  |
 * | ___connected_at | ${type.string}  | The UTC date and time that the WebSocket connection was established. Included only if method is set to websocket.  |
 * | ___disconnected_at | ${type.string}  | The UTC date and time that the WebSocket connection was lost. Included only if method is set to websocket.  |
 * | pagination | ${type.struct}  | Contains information used to page through a list of results. The object is empty if there are no more pages left to page through.  |
 * | __cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * @event_end
@func_end
 */
function twitch_conduits_get_conduit_shards(conduit_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_conduits_update_conduit_shards
 * @desc NEW Updates shard(s) for a conduit.

NOTE: Shard IDs are indexed starting at 0, so a conduit with a shard_count of 5 will have shards with IDs 0 through 4.

Requires an app access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-conduit-shards)
 * 
 * @param {string} conduit_id Conduit ID. 
 * @param {array[struct]} shards List of shards to update. 
 * @param {string} id Shard ID. 
 * @param {struct} transport The transport details that you want Twitch to use when sending you notifications. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `method` : ${type.string} : The transport method. Possible values are:<ul><li>webhook</li><li>websocket</li></ul>
 * - `callback` : ${type.string} : The callback URL where the notifications are sent. The URL must use the HTTPS protocol and port 443. See Processing an event.Specify this field only if method is set to webhook.NOTE: Redirects are not followed.
 * - `secret` : ${type.string} : The secret used to verify the signature. The secret must be an ASCII string that’s a minimum of 10 characters long and a maximum of 100 characters long. For information about how the secret is used, see Verifying the event message.Specify this field only if method is set to webhook.
 * - `session_id` : ${type.string} : An ID that identifies the WebSocket to send notifications to. When you connect to EventSub using WebSockets, the server returns the ID in the Welcome message.Specify this field only if method is set to websocket.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | List of successful shard updates.  |
 * | __id | ${type.string}  | Shard ID.  |
 * | __status | ${type.string}  | The shard status. The subscriber receives events only for enabled shards. Possible values are:enabled — The shard is enabled.webhook_callback_verification_pending — The shard is pending verification of the specified callback URL.webhook_callback_verification_failed — The specified callback URL failed verification.notification_failures_exceeded — The notification delivery failure rate was too high.websocket_disconnected — The client closed the connection.websocket_failed_ping_pong — The client failed to respond to a ping message.websocket_received_inbound_traffic — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message).websocket_internal_error — The Twitch WebSocket server experienced an unexpected error.websocket_network_timeout — The Twitch WebSocket server timed out writing the message to the client.websocket_network_error — The Twitch WebSocket server experienced a network error writing the message to the client.websocket_failed_to_reconnect - The client failed to reconnect to the Twitch WebSocket server within the required time after a Reconnect Message.  |
 * | __transport | ${type.struct}  | The transport details used to send the notifications.  |
 * | ___method | ${type.string}  | The transport method. Possible values are:webhookwebsocket  |
 * | ___callback | ${type.string}  | The callback URL where the notifications are sent. Included only if method is set to webhook.  |
 * | ___session_id | ${type.string}  | An ID that identifies the WebSocket that notifications are sent to. Included only if method is set to websocket.  |
 * | ___connected_at | ${type.string}  | The UTC date and time that the WebSocket connection was established. Included only if method is set to websocket.  |
 * | ___disconnected_at | ${type.string}  | The UTC date and time that the WebSocket connection was lost. Included only if method is set to websocket.  |
 * | errors | ${type.array}  | List of unsuccessful updates.  |
 * | __id | ${type.string}  | Shard ID.  |
 * | __message | ${type.string}  | The error that occurred while updating the shard. Possible errors:The length of the string in the secret field is not valid.The URL in the transport's callback field is not valid. The URL must use the HTTPS protocol and the 443 port number.The value specified in the method field is not valid.The callback field is required if you specify the webhook transport method.The session_id field is required if you specify the WebSocket transport method.The websocket session is not connected.The shard id is outside of the conduit’s range.  |
 * | __code | ${type.string}  | Error codes used to represent a specific error condition while attempting to update shards.  |
 * @event_end
@func_end
 */
function twitch_conduits_update_conduit_shards(conduit_id,shards,id,transport,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_ccls_get_content_classification_labels
 * @desc Gets information about Twitch content classification labels.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-content-classification-labels)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `locale` : ${type.string} : Locale for the Content Classification Labels. You may specify a maximum of 1 locale. Default: <code class="highlighter-rouge">“en-US”</code><br>Supported locales: <code class="highlighter-rouge">"bg-BG", "cs-CZ", "da-DK", "da-DK", "de-DE", "el-GR", "en-GB", "en-US", "es-ES", "es-MX", "fi-FI", "fr-FR", "hu-HU", "it-IT", "ja-JP", "ko-KR", "nl-NL", "no-NO", "pl-PL", "pt-BT", "pt-PT", "ro-RO", "ru-RU", "sk-SK", "sv-SE", "th-TH", "tr-TR", "vi-VN", "zh-CN", "zh-TW"</code>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains information about the available content classification labels.  |
 * | __content_classification_labels | ${type.Label[]}  | The list of CCLs available.  |
 * | ___id | ${type.string}  | Unique identifier for the CCL.  |
 * | ___description | ${type.string}  | Localized description of the CCL.  |
 * | ___name | ${type.string}  | Localized name of the CCL.  |
 * @event_end
@func_end
 */
function twitch_ccls_get_content_classification_labels(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_entitlements_get_drops_entitlements
 * @desc Gets an organization’s list of entitlements that have been granted to a game, a user, or both.

NOTE: Entitlements returned in the response body data are not guaranteed to be sorted by any field returned by the API. To retrieve CLAIMED or FULFILLED entitlements, use the fulfillment_status query parameter to filter results. To retrieve entitlements for a specific game, use the game_id query parameter to filter results.

The following table identifies the request parameters that you may specify based on the type of access token used.

Requires an app access token or user access token. The client ID in the access token must own the game.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-drops-entitlements)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `id` : ${type.string} : An ID that identifies the entitlement to get. Include this parameter for each entitlement you want to get. For example, <code class="highlighter-rouge">id=1234&amp;id=5678</code>. You may specify a maximum of 100 IDs.
 * - `user_id` : ${type.string} : An ID that identifies a user that was granted entitlements.
 * - `game_id` : ${type.string} : An ID that identifies a game that offered entitlements.
 * - `fulfillment_status` : ${type.string} : The entitlement’s fulfillment status. Used to filter the list to only those with the specified status. Possible values are: <ul><li>CLAIMED</li><li>FULFILLED</li></ul>
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 * - `first` : ${type.number} : The maximum number of entitlements to return per page in the response. The minimum page size is 1 entitlement per page and the maximum is 1000. The default is 20.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | App | ${type.None}  | If you don’t specify request parameters, the request returns all entitlements that your organization owns.  |
 * | App | ${type.user_id}  | The request returns all entitlements for any game that the organization granted to the specified user.  |
 * | App | ${type.user_id, game_id}  | The request returns all entitlements that the specified game granted to the specified user.  |
 * | App | ${type.game_id}  | The request returns all entitlements that the specified game granted to all entitled users.  |
 * | User | ${type.None}  | If you don’t specify request parameters, the request returns all entitlements for any game that the organization granted to the user identified in the access token.  |
 * | User | ${type.user_id}  | Invalid.  |
 * | User | ${type.user_id, game_id}  | Invalid.  |
 * | User | ${type.game_id}  | The request returns all entitlements that the specified game granted to the user identified in the access token.  |
 * | data | ${type.array}  | The list of entitlements.  |
 * | ___id | ${type.string}  | An ID that identifies the entitlement.  |
 * | ___benefit_id | ${type.string}  | An ID that identifies the benefit (reward).  |
 * | ___timestamp | ${type.string}  | The UTC date and time (in RFC3339 format) of when the entitlement was granted.  |
 * | ___user_id | ${type.string}  | An ID that identifies the user who was granted the entitlement.  |
 * | ___game_id | ${type.string}  | An ID that identifies the game the user was playing when the reward was entitled.  |
 * | ___fulfillment_status | ${type.string}  | The entitlement’s fulfillment status. Possible values are: CLAIMEDFULFILLED  |
 * | ___last_updated | ${type.string}  | The UTC date and time (in RFC3339 format) of when the entitlement was last updated.  |
 * | pagination | ${type.struct}  | The information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Set the request’s after query parameter to this value to page forward through the results.  |
 * @event_end
@func_end
 */
function twitch_entitlements_get_drops_entitlements(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_entitlements_update_drops_entitlements
 * @desc Updates the Drop entitlement’s fulfillment status.

The following table identifies which entitlements are updated based on the type of access token used.

Requires an app access token or user access token. The client ID in the access token must own the game.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-drops-entitlements)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `entitlement_ids` : ${type.array} of ${type.string} : A list of IDs that identify the entitlements to update. You may specify a maximum of 100 IDs.
 * - `fulfillment_status` : ${type.string} : The fulfillment status to set the entitlements to. Possible values are:<ul><li>CLAIMED &mdash; The user claimed the benefit.</li><li>FULFILLED &mdash; The developer granted the benefit that the user claimed.</li></ul>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that indicates which entitlements were successfully updated and those that weren’t.  |
 * | ___status | ${type.string}  | A string that indicates whether the status of the entitlements in the ids field were successfully updated. Possible values are:INVALID_ID &mdash; The entitlement IDs in the ids field are not valid.NOT_FOUND &mdash; The entitlement IDs in the ids field were not found.SUCCESS &mdash; The status of the entitlements in the ids field were successfully updated.UNAUTHORIZED &mdash; The user or organization identified by the user access token is not authorized to update the entitlements.UPDATE_FAILED &mdash; The update failed. These are considered transient errors and the request should be retried later.  |
 * | ___ids | ${type.array} of ${type.string}  | The list of entitlements that the status in the status field applies to.  |
 * @event_end
@func_end
 */
function twitch_entitlements_update_drops_entitlements(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_extensions_get_extension_configuration_segment
 * @desc Gets the specified configuration segment from the specified extension.

Rate Limits: You may retrieve each segment a maximum of 20 times per minute.

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see Signing the JWT. The signed JWT must include the role, user_id, and exp fields (see JWT Schema). The role field must be set to external.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-extension-configuration-segment)
 * 
 * @param {string} extension_id The ID of the extension that contains the configuration segment you want to get. 
 * @param {string} segment The type of configuration segment to get. Possible case-sensitive values are: broadcasterdeveloperglobalYou may specify one or more segments. To specify multiple segments, include the segment parameter for each segment to get. For example, segment=broadcaster&amp;segment=developer. Ignores duplicate segments. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${type.string} : The ID of the broadcaster that installed the extension. This parameter is required if you set the <em>segment</em> parameter to broadcaster or developer. Do not specify this parameter if you set <em>segment</em> to global.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of requested configuration segments. The list is returned in the same order that you specified the list of segments in the request.  |
 * | ___segment | ${type.string}  | The type of segment. Possible values are: broadcasterdeveloperglobal  |
 * | ___broadcaster_id | ${type.string}  | The ID of the broadcaster that installed the extension. The object includes this field only if the segment query parameter is set to developer or broadcaster.  |
 * | ___content | ${type.string}  | The contents of the segment. This string may be a plain-text string or a string-encoded JSON object.  |
 * | ___version | ${type.string}  | The version number that identifies this definition of the segment’s data.  |
 * @event_end
@func_end
 */
function twitch_extensions_get_extension_configuration_segment(extension_id,segment,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_extensions_set_extension_configuration_segment
 * @desc Updates a configuration segment. The segment is limited to 5 KB. Extensions that are active on a channel do not receive the updated configuration.

Rate Limits: You may update the configuration a maximum of 20 times per minute.

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see Signing the JWT. The signed JWT must include the role, user_id, and exp fields (see JWT Schema). The role field must be set to external.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#set-extension-configuration-segment)
 * 
 * @param {string} extension_id The ID of the extension to update. 
 * @param {string} segment The configuration segment to update. Possible case-sensitive values are:broadcasterdeveloperglobal 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${type.string} : The ID of the broadcaster that installed the extension. Include this field only if the <code class="highlighter-rouge">segment</code> is set to developer or broadcaster.
 * - `content` : ${type.string} : The contents of the segment. This string may be a plain-text string or a string-encoded JSON object.
 * - `version` : ${type.string} : The version number that identifies this definition of the segment’s data. If not specified, the latest definition is updated.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_extensions_set_extension_configuration_segment(extension_id,segment,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_extensions_set_extension_required_configuration
 * @desc Updates the extension’s required_configuration string. Use this endpoint if your extension requires the broadcaster to configure the extension before activating it (to require configuration, you must select Custom/My Own Service in Extension Capabilities). For more information, see Required Configurations and Setting Required Configuration.

Requires a signed JSON Web Token (JWT) created by an EBS. For signing requirements, see Signing the JWT. The signed JWT must include the role, user_id, and exp fields (see JWT Schema). Set the role field to external and the user_id field to the ID of the user that owns the extension.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#set-extension-required-configuration)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that installed the extension on their channel. 
 * @param {string} extension_id The ID of the extension to update. 
 * @param {string} extension_version The version of the extension to update. 
 * @param {string} required_configuration The required_configuration string to use with the extension. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_extensions_set_extension_required_configuration(broadcaster_id,extension_id,extension_version,required_configuration,callback_success,callback_failed) {}


/**
 * @func twitch_extensions_send_extension_pubsub_message
 * @desc Sends a message to one or more viewers. You can send messages to a specific channel or to all channels where your extension is active. This endpoint uses the same mechanism as the send JavaScript helper function used to send messages.

Rate Limits: You may send a maximum of 100 messages per minute per combination of extension client ID and broadcaster ID.

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see Signing the JWT. The signed JWT must include the role, user_id, and exp fields (see JWT Schema) along with the channel_id and pubsub_perms fields. The role field must be set to external.

To send the message to a specific channel, set the channel_id field in the JWT to the channel’s ID and set the pubsub_perms.send array to broadcast.

To send the message to all channels on which your extension is active, set the channel_id field to all and set the pubsub_perms.send array to global.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#send-extension-pubsub-message)
 * 
 * @param {String[]} target The target of the message. Possible values are:broadcastglobalwhisper-&lt;user-id&gt;If is_global_broadcast is true, you must set this field to global. The broadcast and global values are mutually exclusive; specify only one of them. 
 * @param {string} broadcaster_id The ID of the broadcaster to send the message to. Don’t include this field if is_global_broadcast is set to true. 
 * @param {string} message The message to send. The message can be a plain-text string or a string-encoded JSON object. The message is limited to a maximum of 5 KB. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `is_global_broadcast` : ${type.boolean} : A Boolean value that determines whether the message should be sent to all channels where your extension is active. Set to <strong>true</strong> if the message should be sent to all channels. The default is <strong>false</strong>.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_extensions_send_extension_pubsub_message(target,broadcaster_id,message,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_extensions_get_extension_live_channels
 * @desc Gets a list of broadcasters that are streaming live and have installed or activated the extension.

It may take a few minutes for the list to include or remove broadcasters that have recently gone live or stopped broadcasting.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-extension-live-channels)
 * 
 * @param {string} extension_id The ID of the extension to get. Returns the list of broadcasters that are live and that have installed or activated this extension. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <code class="highlighter-rouge">pagination</code> field in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of broadcasters that are streaming live and that have installed or activated the extension.  |
 * | ___broadcaster_id | ${type.string}  | The ID of the broadcaster that is streaming live and has installed or activated the extension.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___game_name | ${type.string}  | The name of the category or game being streamed.  |
 * | ___game_id | ${type.string}  | The ID of the category or game being streamed.  |
 * | ___title | ${type.string}  | The title of the broadcaster’s stream. May be an empty string if not specified.  |
 * | pagination | ${type.string}  | This field contains the cursor used to page through the results. The field is empty if there are no more pages left to page through. Note that this field is a string compared to other endpoints that use a Pagination object. Read More  |
 * @event_end
@func_end
 */
function twitch_extensions_get_extension_live_channels(extension_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_extensions_get_extension_secrets
 * @desc Gets an extension’s list of shared secrets.

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see Signing the JWT. The signed JWT must include the role, user_id, and exp fields (see JWT Schema). The role field must be set to external.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-extension-secrets)
 * 
 * @param {string} extension_id The ID of the extension whose shared secrets you want to get. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of shared secrets that the extension created.  |
 * | ___format_version | ${type.number}  | The version number that identifies this definition of the secret’s data.  |
 * | ___secrets | ${type.array}  | The list of secrets.  |
 * | ______content | ${type.string}  | The raw secret that you use with JWT encoding.  |
 * | ______active_at | ${type.string}  | The UTC date and time (in RFC3339 format) that you may begin using this secret to sign a JWT.  |
 * | ______expires_at | ${type.string}  | The UTC date and time (in RFC3339 format) that you must stop using this secret to decode a JWT.  |
 * @event_end
@func_end
 */
function twitch_extensions_get_extension_secrets(extension_id,callback_success,callback_failed) {}


/**
 * @func twitch_extensions_create_extension_secret
 * @desc Creates a shared secret used to sign and verify JWT tokens. Creating a new secret removes the current secrets from service. Use this function only when you are ready to use the new secret it returns.

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see Signing the JWT. The signed JWT must include the role, user_id, and exp fields (see JWT Schema). The role field must be set to external.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#create-extension-secret)
 * 
 * @param {string} extension_id The ID of the extension to apply the shared secret to. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `delay` : ${type.number} : The amount of time, in seconds, to delay activating the secret. The delay should provide enough time for instances of the extension to gracefully switch over to the new secret. The minimum delay is 300 seconds (5 minutes). The default is 300 seconds.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the newly added secrets.  |
 * | ___format_version | ${type.number}  | The version number that identifies this definition of the secret’s data.  |
 * | ___secrets | ${type.array}  | The list of secrets.  |
 * | ______content | ${type.string}  | The raw secret that you use with JWT encoding.  |
 * | ______active_at | ${type.string}  | The UTC date and time (in RFC3339 format) that you may begin using this secret to sign a JWT.  |
 * | ______expires_at | ${type.string}  | The UTC date and time (in RFC3339 format) that you must stop using this secret to decode a JWT.  |
 * @event_end
@func_end
 */
function twitch_extensions_create_extension_secret(extension_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_extensions_send_extension_chat_message
 * @desc Sends a message to the specified broadcaster’s chat room. The extension’s name is used as the username for the message in the chat room. To send a chat message, your extension must enable Chat Capabilities (under your extension’s Capabilities tab).

Rate Limits: You may send a maximum of 12 messages per minute per channel.

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see Signing the JWT. The signed JWT must include the role and user_id fields (see JWT Schema). The role field must be set to external.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#send-extension-chat-message)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that has activated the extension. 
 * @param {string} text The message. The message may contain a maximum of 280 characters. 
 * @param {string} extension_id The ID of the extension that’s sending the chat message. 
 * @param {string} extension_version The extension’s version number. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_extensions_send_extension_chat_message(broadcaster_id,text,extension_id,extension_version,callback_success,callback_failed) {}


/**
 * @func twitch_extensions_get_extensions
 * @desc Gets information about an extension.

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see Signing the JWT. The signed JWT must include the role field (see JWT Schema), and the role field must be set to external.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-extensions)
 * 
 * @param {string} extension_id The ID of the extension to get. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `extension_version` : ${type.string} : The version of the extension to get. If not specified, it returns the latest, released version. If you don’t have a released version, you must specify a version; otherwise, the list is empty.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the specified extension.  |
 * | ___author_name | ${type.string}  | The name of the user or organization that owns the extension.  |
 * | ___bits_enabled | ${type.boolean}  | A Boolean value that determines whether the extension has features that use Bits. Is true if the extension has features that use Bits.  |
 * | ___can_install | ${type.boolean}  | A Boolean value that determines whether a user can install the extension on their channel. Is true if a user can install the extension.Typically, this is set to false if the extension is currently in testing mode and requires users to be allowlisted (the allowlist is configured on Twitch’s developer site under the Extensions -&gt; Extension -&gt; Version -&gt; Access).  |
 * | ___configuration_location | ${type.string}  | The location of where the extension’s configuration is stored. Possible values are:hosted &mdash; The Extensions Configuration Service hosts the configuration.custom &mdash; The Extension Backend Service (EBS) hosts the configuration.none &mdash; The extension doesn't require configuration.  |
 * | ___description | ${type.string}  | A longer description of the extension. It appears on the details page.  |
 * | ___eula_tos_url | ${type.string}  | A URL to the extension’s Terms of Service.  |
 * | ___has_chat_support | ${type.boolean}  | A Boolean value that determines whether the extension can communicate with the installed channel’s chat. Is true if the extension can communicate with the channel’s chat room.  |
 * | ___icon_url | ${type.string}  | A URL to the default icon that’s displayed in the Extensions directory.  |
 * | ___icon_urls | ${type.map[string]string}  | A dictionary that contains URLs to different sizes of the default icon. The dictionary’s key identifies the icon’s size (for example, 24x24), and the dictionary’s value contains the URL to the icon.  |
 * | ___id | ${type.string}  | The extension’s ID.  |
 * | ___name | ${type.string}  | The extension’s name.  |
 * | ___privacy_policy_url | ${type.string}  | A URL to the extension’s privacy policy.  |
 * | ___request_identity_link | ${type.boolean}  | A Boolean value that determines whether the extension wants to explicitly ask viewers to link their Twitch identity.  |
 * | ___screenshot_urls | ${type.array} of ${type.string}  | A list of URLs to screenshots that are shown in the Extensions marketplace.  |
 * | ___state | ${type.string}  | The extension’s state. Possible values are:ApprovedAssetsUploadedDeletedDeprecatedInReviewInTestPendingActionRejectedReleased  |
 * | ___subscriptions_support_level | ${type.string}  | Indicates whether the extension can view the user’s subscription level on the channel that the extension is installed on. Possible values are:none &mdash; The extension can't view the user’s subscription level.optional &mdash; The extension can view the user’s subscription level.  |
 * | ___summary | ${type.string}  | A short description of the extension that streamers see when hovering over the discovery splash screen in the Extensions manager.  |
 * | ___support_email | ${type.string}  | The email address that users use to get support for the extension.  |
 * | ___version | ${type.string}  | The extension’s version number.  |
 * | ___viewer_summary | ${type.string}  | A brief description displayed on the channel to explain how the extension works.  |
 * | ___views | ${type.struct}  | Describes all views-related information such as how the extension is displayed on mobile devices.  |
 * | ______mobile | ${type.struct}  | Describes how the extension is displayed on mobile devices.  |
 * | _________viewer_url | ${type.string}  | The HTML file that is shown to viewers on mobile devices. This page is presented to viewers as a panel behind the chat area of the mobile app.  |
 * | ______panel | ${type.struct}  | Describes how the extension is rendered if the extension may be activated as a panel extension.  |
 * | _________viewer_url | ${type.string}  | The HTML file that is shown to viewers on the channel page when the extension is activated in a Panel slot.  |
 * | _________height | ${type.number}  | The height, in pixels, of the panel component that the extension is rendered in.  |
 * | _________can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | ______video_overlay | ${type.struct}  | Describes how the extension is rendered if the extension may be activated as a video-overlay extension.  |
 * | _________viewer_url | ${type.string}  | The HTML file that is shown to viewers on the channel page when the extension is activated on the Video - Overlay slot.  |
 * | _________can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | ______component | ${type.struct}  | Describes how the extension is rendered if the extension may be activated as a video-component extension.  |
 * | _________viewer_url | ${type.string}  | The HTML file that is shown to viewers on the channel page when the extension is activated in a Video - Component slot.  |
 * | _________aspect_ratio_x | ${type.number}  | The width value of the ratio (width : height) which determines the extension’s width, and how the extension’s iframe will resize in different video player environments.  |
 * | _________aspect_ratio_y | ${type.number}  | The height value of the ratio (width : height) which determines the extension’s height, and how the extension’s iframe will resize in different video player environments.  |
 * | _________autoscale | ${type.boolean}  | A Boolean value that determines whether to apply CSS zoom. If true, a CSS zoom is applied such that the size of the extension is variable but the inner dimensions are fixed based on Scale Pixels. This allows your extension to render as if it is of fixed width and height. If false, the inner dimensions of the extension iframe are variable, meaning your extension must implement responsiveness.  |
 * | _________scale_pixels | ${type.number}  | The base width, in pixels, of the extension to use when scaling (see autoscale). This value is ignored if autoscale is false.  |
 * | _________target_height | ${type.number}  | The height as a percent of the maximum height of a video component extension. Values are between 1% - 100%.  |
 * | _________can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | ______config | ${type.struct}  | Describes the view that is shown to broadcasters while they are configuring your extension within the Extension Manager.  |
 * | _________viewer_url | ${type.string}  | The HTML file shown to broadcasters while they are configuring your extension within the Extension Manager.  |
 * | _________can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | ___allowlisted_config_urls | ${type.array} of ${type.string}  | Allowlisted configuration URLs for displaying the extension (the allowlist is configured on Twitch’s developer site under the Extensions -&gt; Extension -&gt; Version -&gt; Capabilities).  |
 * | ___allowlisted_panel_urls | ${type.array} of ${type.string}  | Allowlisted panel URLs for displaying the extension (the allowlist is configured on Twitch’s developer site under the Extensions -&gt; Extension -&gt; Version -&gt; Capabilities).  |
 * @event_end
@func_end
 */
function twitch_extensions_get_extensions(extension_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_extensions_get_released_extensions
 * @desc Gets information about a released extension. Returns the extension if its state is Released.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-released-extensions)
 * 
 * @param {string} extension_id The ID of the extension to get. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `extension_version` : ${type.string} : The version of the extension to get. If not specified, it returns the latest version.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the specified extension.  |
 * | ___author_name | ${type.string}  | The name of the user or organization that owns the extension.  |
 * | ___bits_enabled | ${type.boolean}  | A Boolean value that determines whether the extension has features that use Bits. Is true if the extension has features that use Bits.  |
 * | ___can_install | ${type.boolean}  | A Boolean value that determines whether a user can install the extension on their channel. Is true if a user can install the extension.Typically, this is set to false if the extension is currently in testing mode and requires users to be allowlisted (the allowlist is configured on Twitch’s developer site under the Extensions -&gt; Extension -&gt; Version -&gt; Access).  |
 * | ___configuration_location | ${type.string}  | The location of where the extension’s configuration is stored. Possible values are:hosted &mdash; The Extensions Configuration Service hosts the configuration.custom &mdash; The Extension Backend Service (EBS) hosts the configuration.none &mdash; The extension doesn't require configuration.  |
 * | ___description | ${type.string}  | A longer description of the extension. It appears on the details page.  |
 * | ___eula_tos_url | ${type.string}  | A URL to the extension’s Terms of Service.  |
 * | ___has_chat_support | ${type.boolean}  | A Boolean value that determines whether the extension can communicate with the installed channel’s chat. Is true if the extension can communicate with the channel’s chat room.  |
 * | ___icon_url | ${type.string}  | A URL to the default icon that’s displayed in the Extensions directory.  |
 * | ___icon_urls | ${type.map[string]string}  | A dictionary that contains URLs to different sizes of the default icon. The dictionary’s key identifies the icon’s size (for example, 24x24), and the dictionary’s value contains the URL to the icon.  |
 * | ___id | ${type.string}  | The extension’s ID.  |
 * | ___name | ${type.string}  | The extension’s name.  |
 * | ___privacy_policy_url | ${type.string}  | A URL to the extension’s privacy policy.  |
 * | ___request_identity_link | ${type.boolean}  | A Boolean value that determines whether the extension wants to explicitly ask viewers to link their Twitch identity.  |
 * | ___screenshot_urls | ${type.array} of ${type.string}  | A list of URLs to screenshots that are shown in the Extensions marketplace.  |
 * | ___state | ${type.string}  | The extension’s state. Possible values are:ApprovedAssetsUploadedDeletedDeprecatedInReviewInTestPendingActionRejectedReleased  |
 * | ___subscriptions_support_level | ${type.string}  | Indicates whether the extension can view the user’s subscription level on the channel that the extension is installed on. Possible values are:none &mdash; The extension can't view the user’s subscription level.optional &mdash; The extension can view the user’s subscription level.  |
 * | ___summary | ${type.string}  | A short description of the extension that streamers see when hovering over the discovery splash screen in the Extensions manager.  |
 * | ___support_email | ${type.string}  | The email address that users use to get support for the extension.  |
 * | ___version | ${type.string}  | The extension’s version number.  |
 * | ___viewer_summary | ${type.string}  | A brief description displayed on the channel to explain how the extension works.  |
 * | ___views | ${type.struct}  | Describes all views-related information such as how the extension is displayed on mobile devices.  |
 * | ______mobile | ${type.struct}  | Describes how the extension is displayed on mobile devices.  |
 * | _________viewer_url | ${type.string}  | The HTML file that is shown to viewers on mobile devices. This page is presented to viewers as a panel behind the chat area of the mobile app.  |
 * | ______panel | ${type.struct}  | Describes how the extension is rendered if the extension may be activated as a panel extension.  |
 * | _________viewer_url | ${type.string}  | The HTML file that is shown to viewers on the channel page when the extension is activated in a Panel slot.  |
 * | _________height | ${type.number}  | The height, in pixels, of the panel component that the extension is rendered in.  |
 * | _________can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | ______video_overlay | ${type.struct}  | Describes how the extension is rendered if the extension may be activated as a video-overlay extension.  |
 * | _________viewer_url | ${type.string}  | The HTML file that is shown to viewers on the channel page when the extension is activated on the Video - Overlay slot.  |
 * | _________can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | ______component | ${type.struct}  | Describes how the extension is rendered if the extension may be activated as a video-component extension.  |
 * | _________viewer_url | ${type.string}  | The HTML file that is shown to viewers on the channel page when the extension is activated in a Video - Component slot.  |
 * | _________aspect_ratio_x | ${type.number}  | The width value of the ratio (width : height) which determines the extension’s width, and how the extension’s iframe will resize in different video player environments.  |
 * | _________aspect_ratio_y | ${type.number}  | The height value of the ratio (width : height) which determines the extension’s height, and how the extension’s iframe will resize in different video player environments.  |
 * | _________autoscale | ${type.boolean}  | A Boolean value that determines whether to apply CSS zoom. If true, a CSS zoom is applied such that the size of the extension is variable but the inner dimensions are fixed based on Scale Pixels. This allows your extension to render as if it is of fixed width and height. If false, the inner dimensions of the extension iframe are variable, meaning your extension must implement responsiveness.  |
 * | _________scale_pixels | ${type.number}  | The base width, in pixels, of the extension to use when scaling (see autoscale). This value is ignored if autoscale is false.  |
 * | _________target_height | ${type.number}  | The height as a percent of the maximum height of a video component extension. Values are between 1% - 100%.  |
 * | _________can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | ______config | ${type.struct}  | Describes the view that is shown to broadcasters while they are configuring your extension within the Extension Manager.  |
 * | _________viewer_url | ${type.string}  | The HTML file shown to broadcasters while they are configuring your extension within the Extension Manager.  |
 * | _________can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | ___allowlisted_config_urls | ${type.array} of ${type.string}  | Allowlisted configuration URLs for displaying the extension (the allowlist is configured on Twitch’s developer site under the Extensions -&gt; Extension -&gt; Version -&gt; Capabilities).  |
 * | ___allowlisted_panel_urls | ${type.array} of ${type.string}  | Allowlisted panel URLs for displaying the extension (the allowlist is configured on Twitch’s developer site under the Extensions -&gt; Extension -&gt; Version -&gt; Capabilities).  |
 * @event_end
@func_end
 */
function twitch_extensions_get_released_extensions(extension_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_extensions_get_extension_bits_products
 * @desc Gets the list of Bits products that belongs to the extension. The client ID in the app access token identifies the extension.

Requires an app access token. The client ID in the app access token must be the extension’s client ID.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-extension-bits-products)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `should_include_all` : ${type.boolean} : A Boolean value that determines whether to include disabled or expired Bits products in the response. The default is <strong>false</strong>.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list of Bits products that the extension created. The list is in ascending SKU order. The list is empty if the extension hasn’t created any products or they’re all expired or disabled.  |
 * | ___sku | ${type.string}  | The product’s SKU. The SKU is unique across an extension’s products.  |
 * | ___cost | ${type.struct}  | An object that contains the product’s cost information.  |
 * | ______amount | ${type.number}  | The product’s price.  |
 * | ______type | ${type.string}  | The type of currency. Possible values are:bits  |
 * | ___in_development | ${type.boolean}  | A Boolean value that indicates whether the product is in development. If true, the product is not available for public use.  |
 * | ___display_name | ${type.string}  | The product’s name as displayed in the extension.  |
 * | ___expiration | ${type.string}  | The date and time, in RFC3339 format, when the product expires.  |
 * | ___is_broadcast | ${type.boolean}  | A Boolean value that determines whether Bits product purchase events are broadcast to all instances of an extension on a channel. The events are broadcast via the onTransactionComplete helper callback. Is true if the event is broadcast to all instances.  |
 * @event_end
@func_end
 */
function twitch_extensions_get_extension_bits_products(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_extensions_update_extension_bits_product
 * @desc Adds or updates a Bits product that the extension created. If the SKU doesn’t exist, the product is added. You may update all fields except the sku field.

Requires an app access token. The client ID in the app access token must match the extension’s client ID.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-extension-bits-product)
 * 
 * @param {string} sku The product's SKU. The SKU must be unique within an extension. The product's SKU cannot be changed. The SKU may contain only alphanumeric characters, dashes (-), underscores (_), and periods (.) and is limited to a maximum of 255 characters. No spaces. 
 * @param {struct} cost An object that contains the product's cost information. 
 * @param {number} amount The product's price. 
 * @param {string} type The type of currency. Possible values are:bits — The minimum price is 1 and the maximum is 10000. 
 * @param {string} display_name The product's name as displayed in the extension. The maximum length is 255 characters. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `in_development` : ${type.boolean} : A Boolean value that indicates whether the product is in development. Set to <strong>true</strong> if the product is in development and not available for public use. The default is <strong>false</strong>.
 * - `expiration` : ${type.string} : The date and time, in RFC3339 format, when the product expires. If not set, the product does not expire. To disable the product, set the expiration date to a date in the past.
 * - `is_broadcast` : ${type.boolean} : A Boolean value that determines whether Bits product purchase events are broadcast to all instances of the extension on a channel. The events are broadcast via the <code>onTransactionComplete</code> helper callback. The default is <strong>false</strong>.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list of Bits products that the extension created. The list is in ascending SKU order. The list is empty if the extension hasn't created any products or they're all expired or disabled.  |
 * | __sku | ${type.string}  | The product's SKU. The SKU is unique across an extension's products.  |
 * | __cost | ${type.struct}  | An object that contains the product's cost information.  |
 * | ___amount | ${type.number}  | The product's price.  |
 * | ___type | ${type.string}  | The type of currency. Possible values are:bits  |
 * | __in_development | ${type.boolean}  | A Boolean value that indicates whether the product is in development. If true, the product is not available for public use.  |
 * | __display_name | ${type.string}  | The product's name as displayed in the extension.  |
 * | __expiration | ${type.string}  | The date and time, in RFC3339 format, when the product expires.  |
 * | __is_broadcast | ${type.boolean}  | A Boolean value that determines whether Bits product purchase events are broadcast to all instances of an extension on a channel. The events are broadcast via the onTransactionComplete helper callback. Is true if the event is broadcast to all instances.  |
 * @event_end
@func_end
 */
function twitch_extensions_update_extension_bits_product(sku,cost,amount,type,display_name,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_eventsub_create_eventsub_subscription
 * @desc Creates an EventSub subscription.

If you use webhooks to receive events, the request must specify an app access token. The request will fail if you use a user access token. If the subscription type requires user authorization, the user must have granted your app (client ID) permissions to receive those events before you subscribe to them. For example, to subscribe to channel.subscribe events, your app must get a user access token that includes the channel:read:subscriptions scope, which adds the required permission to your app access token’s client ID.

If you use WebSockets to receive events, the request must specify a user access token. The request will fail if you use an app access token. If the subscription type requires user authorization, the token must include the required scope. However, if the subscription type doesn’t include user authorization, the token may include any scopes or no scopes.

If you use Conduits to receive events, the request must specify an app access token. The request will fail if you use a user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#create-eventsub-subscription)
 * 
 * @param {string} type The type of subscription to create. For a list of subscriptions that you can create, see&nbsp;Subscription Types. Set this field to the value in the&nbsp;Name&nbsp;column of the Subscription Types table. 
 * @param {string} version The version number that identifies the definition of the subscription type that you want the response to use. 
 * @param {struct} condition A JSON object that contains the parameter values that are specific to the specified subscription type. For the object’s required and optional fields, see the subscription type’s documentation. 
 * @param {struct} transport The transport details that you want Twitch to use when sending you notifications. 
 * @param {string} method The transport method. Possible values are:webhookwebsocketconduit 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `callback` : ${type.string} : <p>The callback URL where the notifications are sent. The URL must use the HTTPS protocol and port 443. See&nbsp;<a rel="nofollow" href="https://dev.twitch.tv/docs/eventsub/handling-webhook-events#processing-an-event">Processing an event</a>. Specify this field only if&nbsp;<code>method</code>&nbsp;is set to&nbsp;<strong>webhook</strong>.</p><p><strong>NOTE</strong>: Redirects are not followed.</p>
 * - `secret` : ${type.string} : The secret used to verify the signature. The secret must be an ASCII string that’s a minimum of 10 characters long and a maximum of 100 characters long. For information about how the secret is used, see&nbsp;<a rel="nofollow" href="https://dev.twitch.tv/docs/eventsub/handling-webhook-events#verifying-the-event-message">Verifying the event message</a>. Specify this field only if&nbsp;<code>method</code>&nbsp;is set to&nbsp;<strong>webhook</strong>.
 * - `session_id` : ${type.string} : An ID that identifies the WebSocket to send notifications to. When you connect to EventSub using WebSockets, the server returns the ID in the Welcome message. Specify this field only if&nbsp;<code>method</code>&nbsp;is set to&nbsp;<strong>websocket</strong>.
 * - `conduit_id` : ${type.string} : An ID that identifies the conduit to send notifications to. When you create a conduit, the server returns the conduit ID. Specify this field only if&nbsp;<code>method</code>&nbsp;is set to&nbsp;<strong>conduit</strong>.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single subscription that you created.  |
 * | __id | ${type.string}  | An ID that identifies the subscription.  |
 * | __status | ${type.string}  | The subscription’s status. The subscriber receives events only for enabled subscriptions. Possible values are:enabled — The subscription is enabled.webhook_callback_verification_pending — The subscription is pending verification of the specified callback URL (seeResponding to a challenge request).  |
 * | __type | ${type.string}  | The subscription’s type. SeeSubscription Types.  |
 * | __version | ${type.string}  | The version number that identifies this definition of the subscription’s data.  |
 * | __condition | ${type.struct}  | The subscription’s parameter values. This is a string-encoded JSON object whose contents are determined by the subscription type.  |
 * | __created_at | ${type.string}  | The date and time (in RFC3339 format) of when the subscription was created.  |
 * | __transport | ${type.struct}  | The transport details used to send the notifications.  |
 * | ___method | ${type.string}  | The transport method. Possible values are:webhookwebsocketconduit  |
 * | ___callback | ${type.string}  | The callback URL where the notifications are sent. Included only ifmethodis set towebhook.  |
 * | ___session_id | ${type.string}  | An ID that identifies the WebSocket that notifications are sent to. Included only ifmethodis set towebsocket.  |
 * | ___connected_at | ${type.string}  | The UTC date and time that the WebSocket connection was established. Included only ifmethodis set towebsocket.  |
 * | ___conduit_id | ${type.string}  | An ID that identifies the conduit to send notifications to. Included only ifmethodis set toconduit.  |
 * | __cost | ${type.number}  | The amount that the subscription counts against your limit.Learn More  |
 * | total | ${type.number}  | The total number of subscriptions you’ve created.  |
 * | total_cost | ${type.number}  | The sum of all of your subscription costs.Learn More  |
 * | max_total_cost | ${type.number}  | The maximum total cost that you’re allowed to incur for all subscriptions you create.  |
 * @event_end
@func_end
 */
function twitch_eventsub_create_eventsub_subscription(type,version,condition,transport,method,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_eventsub_delete_eventsub_subscription
 * @desc Deletes an EventSub subscription.

If you use webhooks to receive events, the request must specify an app access token. The request will fail if you use a user access token.

If you use WebSockets to receive events, the request must specify a user access token. The request will fail if you use an app access token. The token may include any scopes.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#delete-eventsub-subscription)
 * 
 * @param {string} id The ID of the subscription to delete. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_eventsub_delete_eventsub_subscription(id,callback_success,callback_failed) {}


/**
 * @func twitch_eventsub_get_eventsub_subscriptions
 * @desc Gets a list of EventSub subscriptions that the client in the access token created.

If you use Webhooks or Conduits to receive events, the request must specify an app access token. The request will fail if you use a user access token.

If you use WebSockets to receive events, the request must specify a user access token. The request will fail if you use an app access token. The token may include any scopes.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-eventsub-subscriptions)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `status` : ${type.string} : Filter subscriptions by its status. Possible values are:<ul><li>enabled — The subscription is enabled.</li><li>webhook_callback_verification_pending — The subscription is pending verification of the specified callback URL.</li><li>webhook_callback_verification_failed — The specified callback URL failed verification.</li><li>notification_failures_exceeded — The notification delivery failure rate was too high.</li><li>authorization_revoked — The authorization was revoked for one or more users specified in the <b>Condition</b> object.</li><li>moderator_removed — The moderator that authorized the subscription is no longer one of the broadcaster's moderators.</li><li>user_removed — One of the users specified in the <b>Condition</b> object was removed.</li><li>chat_user_banned - The user specified in the <b>Condition</b> object was banned from the broadcaster's chat.</li><li>version_removed — The subscription to subscription type and version is no longer supported.</li><li>beta_maintenance — The subscription to the beta subscription type was removed due to maintenance.</li><li>websocket_disconnected — The client closed the connection.</li><li>websocket_failed_ping_pong — The client failed to respond to a ping message.</li><li>websocket_received_inbound_traffic — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message).</li><li>websocket_connection_unused — The client failed to subscribe to events within the required time.</li><li>websocket_internal_error — The Twitch WebSocket server experienced an unexpected error.</li><li>websocket_network_timeout — The Twitch WebSocket server timed out writing the message to the client.</li><li>websocket_network_error — The Twitch WebSocket server experienced a network error writing the message to the client.</li><li>websocket_failed_to_reconnect - The client failed to reconnect to the Twitch WebSocket server within the required time after a Reconnect Message.</li></ul>
 * - `type` : ${type.string} : Filter subscriptions by subscription type. For a list of subscription types, see <a href="/docs/eventsub/eventsub-subscription-types#subscription-types">Subscription Types</a>.
 * - `user_id` : ${type.string} : Filter subscriptions by user ID. The response contains subscriptions where this ID matches a user ID that you specified in the <strong>Condition</strong> object when you <a href="/docs/api/reference#create-eventsub-subscription">created the subscription</a>.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <code>pagination</code> object in the response contains the cursor's value.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of subscriptions. The list is ordered by the oldest subscription first. The list is empty if the client hasn't created subscriptions or there are no subscriptions that match the specified filter criteria.  |
 * | __id | ${type.string}  | An ID that identifies the subscription.  |
 * | __status | ${type.string}  | The subscription's status. The subscriber receives events only for enabled subscriptions. Possible values are:enabled — The subscription is enabled.webhook_callback_verification_pending — The subscription is pending verification of the specified callback URL.webhook_callback_verification_failed — The specified callback URL failed verification.notification_failures_exceeded — The notification delivery failure rate was too high.authorization_revoked — The authorization was revoked for one or more users specified in the Condition object.moderator_removed — The moderator that authorized the subscription is no longer one of the broadcaster's moderators.user_removed — One of the users specified in the Condition object was removed.version_removed — The subscription to subscription type and version is no longer supported.beta_maintenance — The subscription to the beta subscription type was removed due to maintenance.websocket_disconnected — The client closed the connection.websocket_failed_ping_pong — The client failed to respond to a ping message.websocket_received_inbound_traffic — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message).websocket_connection_unused — The client failed to subscribe to events within the required time.websocket_internal_error — The Twitch WebSocket server experienced an unexpected error.websocket_network_timeout — The Twitch WebSocket server timed out writing the message to the client.websocket_network_error — The Twitch WebSocket server experienced a network error writing the message to the client.  |
 * | __type | ${type.string}  | The subscription's type. See Subscription Types.  |
 * | __version | ${type.string}  | The version number that identifies this definition of the subscription's data.  |
 * | __condition | ${type.struct}  | The subscription's parameter values. This is a string-encoded JSON object whose contents are determined by the subscription type.  |
 * | __created_at | ${type.string}  | The date and time (in RFC3339 format) of when the subscription was created.  |
 * | __transport | ${type.struct}  | The transport details used to send the notifications.  |
 * | ___method | ${type.string}  | The transport method. Possible values are:webhookwebsocket  |
 * | ___callback | ${type.string}  | The callback URL where the notifications are sent. Included only if method is set to webhook.  |
 * | ___session_id | ${type.string}  | An ID that identifies the WebSocket that notifications are sent to. Included only if method is set to websocket.  |
 * | ___connected_at | ${type.string}  | The UTC date and time that the WebSocket connection was established. Included only if method is set to websocket.  |
 * | ___disconnected_at | ${type.string}  | The UTC date and time that the WebSocket connection was lost. Included only if method is set to websocket.  |
 * | __cost | ${type.number}  | The amount that the subscription counts against your limit. Learn More  |
 * | total | ${type.number}  | The total number of subscriptions that you've created.  |
 * | total_cost | ${type.number}  | The sum of all of your subscription costs. Learn More  |
 * | max_total_cost | ${type.number}  | The maximum total cost that you're allowed to incur for all subscriptions that you create.  |
 * | pagination | ${type.struct}  | An object that contains the cursor used to get the next page of subscriptions. The object is empty if there are no more pages to get. The number of subscriptions returned per page is undertermined.  |
 * | __cursor | ${type.string}  | The cursor value that you set the after query parameter to.  |
 * @event_end
@func_end
 */
function twitch_eventsub_get_eventsub_subscriptions(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_games_get_top_games
 * @desc Gets information about all broadcasts on Twitch.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-top-games)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 * - `before` : ${type.string} : The cursor used to get the previous page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of broadcasts. The broadcasts are sorted by the number of viewers, with the most popular first.  |
 * | ___id | ${type.string}  | An ID that identifies the category or game.  |
 * | ___name | ${type.string}  | The category’s or game’s name.  |
 * | ___box_art_url | ${type.string}  | A URL to the category’s or game’s box art. You must replace the {width}x{height} placeholder with the size of image you want.  |
 * | ___igdb_id | ${type.string}  | The ID that IGDB uses to identify this game. If the IGDB ID is not available to Twitch, this field is set to an empty string.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after or before query parameter to get the next or previous page of results.  |
 * @event_end
@func_end
 */
function twitch_games_get_top_games(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_games_get_games
 * @desc Gets information about specified categories or games.

You may get up to 100 categories or games by specifying their ID or name. You may specify all IDs, all names, or a combination of IDs and names. If you specify a combination of IDs and names, the total number of IDs and names must not exceed 100.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-games)
 * 
 * @param {string} id The ID of the category or game to get. Include this parameter for each category or game you want to get. For example, &amp;id=1234&amp;id=5678. You may specify a maximum of 100 IDs. The endpoint ignores duplicate and invalid IDs or IDs that weren’t found. 
 * @param {string} name The name of the category or game to get. The name must exactly match the category’s or game’s title. Include this parameter for each category or game you want to get. For example, &amp;name=foo&amp;name=bar. You may specify a maximum of 100 names. The endpoint ignores duplicate names and names that weren’t found. 
 * @param {string} igdb_id The IGDB ID of the game to get. Include this parameter for each game you want to get. For example, &amp;igdb_id=1234&amp;igdb_id=5678. You may specify a maximum of 100 IDs. The endpoint ignores duplicate and invalid IDs or IDs that weren’t found. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of categories and games. The list is empty if the specified categories and games weren’t found.  |
 * | ___id | ${type.string}  | An ID that identifies the category or game.  |
 * | ___name | ${type.string}  | The category’s or game’s name.  |
 * | ___box_art_url | ${type.string}  | A URL to the category’s or game’s box art. You must replace the {width}x{height} placeholder with the size of image you want.  |
 * | ___igdb_id | ${type.string}  | The ID that IGDB uses to identify this game. If the IGDB ID is not available to Twitch, this field is set to an empty string.  |
 * @event_end
@func_end
 */
function twitch_games_get_games(id,name,igdb_id,callback_success,callback_failed) {}


/**
 * @func twitch_goals_get_creator_goals
 * @desc Gets the broadcaster’s list of active goals. Use this endpoint to get the current progress of each goal.

Instead of polling for the progress of a goal, consider subscribing to receive notifications when a goal makes progress using the channel.goal.progress subscription type. Read More

Requires a user access token that includes the channel:read:goals scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-creator-goals)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that created the goals. This ID must match the user ID in the user access token. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of goals. The list is empty if the broadcaster hasn’t created goals.  |
 * | ___id | ${type.string}  | An ID that identifies this goal.  |
 * | ___broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the goal.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___type | ${type.string}  | The type of goal. Possible values are: follower &mdash; The goal is to increase followers.subscription &mdash; The goal is to increase subscriptions. This type shows the net increase or decrease in tier points associated with the subscriptions.subscription_count &mdash; The goal is to increase subscriptions. This type shows the net increase or decrease in the number of subscriptions.new_subscription &mdash; The goal is to increase subscriptions. This type shows only the net increase in tier points associated with the subscriptions (it does not account for users that unsubscribed since the goal started).new_subscription_count &mdash; The goal is to increase subscriptions. This type shows only the net increase in the number of subscriptions (it does not account for users that unsubscribed since the goal started).  |
 * | ___description | ${type.string}  | A description of the goal. Is an empty string if not specified.  |
 * | ___current_amount | ${type.number}  | The goal’s current value.The goal’s type determines how this value is increased or decreased. If type is follower, this field is set to the broadcaster's current number of followers. This number increases with new followers and decreases when users unfollow the broadcaster.If type is subscription, this field is increased and decreased by the points value associated with the subscription tier. For example, if a tier-two subscription is worth 2 points, this field is increased or decreased by 2, not 1.If type is subscription_count, this field is increased by 1 for each new subscription and decreased by 1 for each user that unsubscribes.If type is new_subscription, this field is increased by the points value associated with the subscription tier. For example, if a tier-two subscription is worth 2 points, this field is increased by 2, not 1.If type is new_subscription_count, this field is increased by 1 for each new subscription.  |
 * | ___target_amount | ${type.number}  | The goal’s target value. For example, if the broadcaster has 200 followers before creating the goal, and their goal is to double that number, this field is set to 400.  |
 * | ___created_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the broadcaster created the goal.  |
 * @event_end
@func_end
 */
function twitch_goals_get_creator_goals(broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_guest_star_get_channel_guest_star_settings
 * @desc BETA Gets the channel settings for configuration of the Guest Star feature for a particular host.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-channel-guest-star-settings)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${Yes} : The ID of the broadcaster you want to get guest star settings for.
 * - `moderator_id` : ${Yes} : The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | is_moderator_send_live_enabled | ${type.boolean}  | Flag determining if Guest Star moderators have access to control whether a guest is live once assigned to a slot.  |
 * | slot_count | ${type.number}  | Number of slots the Guest Star call interface will allow the host to add to a call. Required to be between 1 and 6.  |
 * | is_browser_source_audio_enabled | ${type.boolean}  | Flag determining if Browser Sources subscribed to sessions on this channel should output audio  |
 * | group_layout | ${type.string}  | This setting determines how the guests within a session should be laid out within the browser source. Can be one of the following values: TILED_LAYOUT: All live guests are tiled within the browser source with the same size. SCREENSHARE_LAYOUT: All live guests are tiled within the browser source with the same size. If there is an active screen share, it is sized larger than the other guests.  |
 * | browser_source_token | ${type.string}  | View only token to generate browser source URLs  |
 * @event_end
@func_end
 */
function twitch_guest_star_get_channel_guest_star_settings(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_guest_star_update_channel_guest_star_settings
 * @desc BETA Mutates the channel settings for configuration of the Guest Star feature for a particular host.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-channel-guest-star-settings)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${Yes} : The ID of the broadcaster you want to update Guest Star settings for.
 * - `is_moderator_send_live_enabled` : ${No} : Flag determining if Guest Star moderators have access to control whether a guest is live once assigned to a slot.
 * - `slot_count` : ${No} : Number of slots the Guest Star call interface will allow the host to add to a call. Required to be between 1 and 6.
 * - `is_browser_source_audio_enabled` : ${No} : Flag determining if Browser Sources subscribed to sessions on this channel should output audio
 * - `group_layout` : ${No} : This setting determines how the guests within a session should be laid out within the browser source. Can be one of the following values: <ul><li><code>TILED_LAYOUT</code>: All live guests are tiled within the browser source with the same size.</li> <li><code>SCREENSHARE_LAYOUT</code>: All live guests are tiled within the browser source with the same size. If there is an active screen share, it is sized larger than the other guests.</li> <li><code>HORIZONTAL_LAYOUT</code>: All live guests are arranged in a horizontal bar within the browser source</li> <li><code>VERTICAL_LAYOUT</code>: All live guests are arranged in a vertical bar within the browser source</li></ul>
 * - `regenerate_browser_sources` : ${No} : Flag determining if Guest Star should regenerate the auth token associated with the channel’s browser sources. Providing a true value for this will immediately invalidate all browser sources previously configured in your streaming software.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_guest_star_update_channel_guest_star_settings(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_guest_star_get_guest_star_session
 * @desc BETA Gets information about an ongoing Guest Star session for a particular channel.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-guest-star-session)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${Yes} : ID for the user hosting the Guest Star session.
 * - `moderator_id` : ${Yes} : The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.Session[]}  | Summary of the session details  |
 * | ___id | ${type.string}  | ID uniquely representing the Guest Star session.  |
 * | ___guests | ${type.Guest}  | List of guests currently interacting with the Guest Star session.  |
 * | ___slot_id | ${type.string}  | ID representing this guest’s slot assignment. Host is always in slot "0" Guests are assigned the following consecutive IDs (e.g, "1", "2", "3", etc) Screen Share is represented as a special guest with the ID "SCREENSHARE" The identifier here matches the ID referenced in browser source links used in broadcasting software.  |
 * | ___is_live | ${type.boolean}  | Flag determining whether or not the guest is visible in the browser source in the host’s streaming software.  |
 * | ___user_id | ${type.string}  | User ID of the guest assigned to this slot.  |
 * | ___user_display_name | ${type.string}  | Display name of the guest assigned to this slot.  |
 * | ___user_login | ${type.string}  | Login of the guest assigned to this slot.  |
 * | ___volume | ${type.number}  | Value from 0 to 100 representing the host’s volume setting for this guest.  |
 * | ___assigned_at | ${type.string}  | Timestamp when this guest was assigned a slot in the session.  |
 * | ___audio_settings | ${type.MediaSettings}  | Information about the guest’s audio settings  |
 * | ______is_host_enabled | ${type.boolean}  | Flag determining whether the host is allowing the guest’s audio to be seen or heard within the session.  |
 * | ______is_guest_enabled | ${type.boolean}  | Flag determining whether the guest is allowing their audio to be transmitted to the session.  |
 * | ______is_available | ${type.boolean}  | Flag determining whether the guest has an appropriate audio device available to be transmitted to the session.  |
 * | ___video_settings | ${type.MediaSettings}  | Information about the guest’s video settings  |
 * | ______is_host_enabled | ${type.boolean}  | Flag determining whether the host is allowing the guest’s video to be seen or heard within the session.  |
 * | ______is_guest_enabled | ${type.boolean}  | Flag determining whether the guest is allowing their video to be transmitted to the session.  |
 * | ______is_available | ${type.boolean}  | Flag determining whether the guest has an appropriate video device available to be transmitted to the session.  |
 * @event_end
@func_end
 */
function twitch_guest_star_get_guest_star_session(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_guest_star_create_guest_star_session
 * @desc BETA Programmatically creates a Guest Star session on behalf of the broadcaster. Requires the broadcaster to be present in the call interface, or the call will be ended automatically.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#create-guest-star-session)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${Yes} : The ID of the broadcaster you want to create a Guest Star session for. Provided <code class="highlighter-rouge">broadcaster_id</code> must match the <code class="highlighter-rouge">user_id</code> in the auth token.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.Session[]}  | Summary of the session details.  |
 * | ___id | ${type.string}  | ID uniquely representing the Guest Star session.  |
 * | ___guests | ${type.Guest}  | List of guests currently interacting with the Guest Star session. On creation, the session will contain the broadcaster as a solo guest.  |
 * | ___slot_id | ${type.string}  | ID representing this guest’s slot assignment. Host is always in slot "0" Guests are assigned the following consecutive IDs (e.g, "1", "2", "3", etc) Screen Share is represented as a special guest with the ID "SCREENSHARE" The identifier here matches the ID referenced in browser source links used in broadcasting software.  |
 * | ___is_live | ${type.boolean}  | Flag determining whether or not the guest is visible in the browser source in the host’s streaming software.  |
 * | ___user_id | ${type.string}  | User ID of the guest assigned to this slot.  |
 * | ___user_display_name | ${type.string}  | Display name of the guest assigned to this slot.  |
 * | ___user_login | ${type.string}  | Login of the guest assigned to this slot.  |
 * | ___volume | ${type.number}  | Value from 0 to 100 representing the host’s volume setting for this guest.  |
 * | ___assigned_at | ${type.string}  | Timestamp when this guest was assigned a slot in the session.  |
 * | ___audio_settings | ${type.MediaSettings}  | Information about the guest’s audio settings  |
 * | ______is_host_enabled | ${type.boolean}  | Flag determining whether the host is allowing the guest’s audio to be seen or heard within the session.  |
 * | ______is_guest_enabled | ${type.boolean}  | Flag determining whether the guest is allowing their audio to be transmitted to the session.  |
 * | ______is_available | ${type.boolean}  | Flag determining whether the guest has an appropriate audio device available to be transmitted to the session.  |
 * | ___video_settings | ${type.MediaSettings}  | Information about the guest’s video settings  |
 * | ______is_host_enabled | ${type.boolean}  | Flag determining whether the host is allowing the guest’s video to be seen or heard within the session.  |
 * | ______is_guest_enabled | ${type.boolean}  | Flag determining whether the guest is allowing their video to be transmitted to the session.  |
 * | ______is_available | ${type.boolean}  | Flag determining whether the guest has an appropriate video device available to be transmitted to the session.  |
 * @event_end
@func_end
 */
function twitch_guest_star_create_guest_star_session(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_guest_star_end_guest_star_session
 * @desc BETA Programmatically ends a Guest Star session on behalf of the broadcaster. Performs the same action as if the host clicked the “End Call” button in the Guest Star UI.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#end-guest-star-session)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${Yes} : The ID of the broadcaster you want to end a Guest Star session for. Provided <code class="highlighter-rouge">broadcaster_id</code> must match the <code class="highlighter-rouge">user_id</code> in the auth token.
 * - `session_id` : ${Yes} : ID for the session to end on behalf of the broadcaster.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.Session[]}  | Summary of the session details when the session was ended.  |
 * | ___id | ${type.string}  | ID uniquely representing the Guest Star session.  |
 * | ___guests | ${type.Guest}  | List of guests currently interacting with the Guest Star session.  |
 * | ___slot_id | ${type.string}  | ID representing this guest’s slot assignment. Host is always in slot "0" Guests are assigned the following consecutive IDs (e.g, "1", "2", "3", etc) Screen Share is represented as a special guest with the ID "SCREENSHARE" The identifier here matches the ID referenced in browser source links used in broadcasting software.  |
 * | ___is_live | ${type.boolean}  | Flag determining whether or not the guest is visible in the browser source in the host’s streaming software.  |
 * | ___user_id | ${type.string}  | User ID of the guest assigned to this slot.  |
 * | ___user_display_name | ${type.string}  | Display name of the guest assigned to this slot.  |
 * | ___user_login | ${type.string}  | Login of the guest assigned to this slot.  |
 * | ___volume | ${type.number}  | Value from 0 to 100 representing the host’s volume setting for this guest.  |
 * | ___assigned_at | ${type.string}  | Timestamp when this guest was assigned a slot in the session.  |
 * | ___audio_settings | ${type.MediaSettings}  | Information about the guest’s audio settings  |
 * | ______is_host_enabled | ${type.boolean}  | Flag determining whether the host is allowing the guest’s audio to be seen or heard within the session.  |
 * | ______is_guest_enabled | ${type.boolean}  | Flag determining whether the guest is allowing their audio to be transmitted to the session.  |
 * | ______is_available | ${type.boolean}  | Flag determining whether the guest has an appropriate audio device available to be transmitted to the session.  |
 * | ___video_settings | ${type.MediaSettings}  | Information about the guest’s video settings  |
 * | ______is_host_enabled | ${type.boolean}  | Flag determining whether the host is allowing the guest’s video to be seen or heard within the session.  |
 * | ______is_guest_enabled | ${type.boolean}  | Flag determining whether the guest is allowing their video to be transmitted to the session.  |
 * | ______is_available | ${type.boolean}  | Flag determining whether the guest has an appropriate video device available to be transmitted to the session.  |
 * @event_end
@func_end
 */
function twitch_guest_star_end_guest_star_session(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_guest_star_get_guest_star_invites
 * @desc BETA Provides the caller with a list of pending invites to a Guest Star session, including the invitee’s ready status while joining the waiting room.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-guest-star-invites)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${Yes} : The ID of the broadcaster running the Guest Star session.
 * - `moderator_id` : ${Yes} : The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the <code class="highlighter-rouge">user_id</code> in the user access token.
 * - `session_id` : ${Yes} : The session ID to query for invite status.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.Invite[]}  | A list of invite objects describing the invited user as well as their ready status.  |
 * | ___user_id | ${type.string}  | Twitch User ID corresponding to the invited guest  |
 * | ___invited_at | ${type.string}  | Timestamp when this user was invited to the session.  |
 * | ___status | ${type.string}  | Status representing the invited user’s join state. Can be one of the following: INVITED: The user has been invited to the session but has not acknowledged it. ACCEPTED: The invited user has acknowledged the invite and joined the waiting room, but may still be setting up their media devices or otherwise preparing to join the call. READY: The invited user has signaled they are ready to join the call from the waiting room.  |
 * | ___is_video_enabled | ${type.boolean}  | Flag signaling that the invited user has chosen to disable their local video device. The user has hidden themselves, but they may choose to reveal their video feed upon joining the session.  |
 * | ___is_audio_enabled | ${type.boolean}  | Flag signaling that the invited user has chosen to disable their local audio device. The user has muted themselves, but they may choose to unmute their audio feed upon joining the session.  |
 * | ___is_video_available | ${type.boolean}  | Flag signaling that the invited user has a video device available for sharing.  |
 * | ___is_audio_available | ${type.boolean}  | Flag signaling that the invited user has an audio device available for sharing.  |
 * @event_end
@func_end
 */
function twitch_guest_star_get_guest_star_invites(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_guest_star_send_guest_star_invite
 * @desc BETA Sends an invite to a specified guest on behalf of the broadcaster for a Guest Star session in progress.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#send-guest-star-invite)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${Yes} : The ID of the broadcaster running the Guest Star session.
 * - `moderator_id` : ${Yes} : The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the <code class="highlighter-rouge">user_id</code> in the user access token.
 * - `session_id` : ${Yes} : The session ID for the invite to be sent on behalf of the broadcaster.
 * - `guest_id` : ${Yes} : Twitch User ID for the guest to invite to the Guest Star session.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_guest_star_send_guest_star_invite(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_guest_star_delete_guest_star_invite
 * @desc BETA Revokes a previously sent invite for a Guest Star session.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#delete-guest-star-invite)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${Yes} : The ID of the broadcaster running the Guest Star session.
 * - `moderator_id` : ${Yes} : The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the <code class="highlighter-rouge">user_id</code> in the user access token.
 * - `session_id` : ${Yes} : The ID of the session for the invite to be revoked on behalf of the broadcaster.
 * - `guest_id` : ${Yes} : Twitch User ID for the guest to revoke the Guest Star session invite from.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_guest_star_delete_guest_star_invite(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_guest_star_assign_guest_star_slot
 * @desc BETA Allows a previously invited user to be assigned a slot within the active Guest Star session, once that guest has indicated they are ready to join.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#assign-guest-star-slot)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${Yes} : The ID of the broadcaster running the Guest Star session.
 * - `moderator_id` : ${Yes} : The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the <code class="highlighter-rouge">user_id</code> in the user access token.
 * - `session_id` : ${Yes} : The ID of the Guest Star session in which to assign the slot.
 * - `guest_id` : ${Yes} : The Twitch User ID corresponding to the guest to assign a slot in the session. This user must already have an invite to this session, and have indicated that they are ready to join.
 * - `slot_id` : ${Yes} : The slot assignment to give to the user. Must be a numeric identifier between “1” and “N” where N is the max number of slots for the session. Max number of slots allowed for the session is reported by <a href="#get-channel-guest-star-settings">Get Channel Guest Star Settings</a>.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_guest_star_assign_guest_star_slot(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_guest_star_update_guest_star_slot
 * @desc BETA Allows a user to update the assigned slot for a particular user within the active Guest Star session.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-guest-star-slot)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${Yes} : The ID of the broadcaster running the Guest Star session.
 * - `moderator_id` : ${Yes} : The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the <code class="highlighter-rouge">user_id</code> in the user access token.
 * - `session_id` : ${Yes} : The ID of the Guest Star session in which to update slot settings.
 * - `source_slot_id` : ${Yes} : The slot assignment previously assigned to a user.
 * - `destination_slot_id` : ${No} : The slot to move this user assignment to. If the destination slot is occupied, the user assigned will be swapped into <code class="highlighter-rouge">source_slot_id</code>.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_guest_star_update_guest_star_slot(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_guest_star_delete_guest_star_slot
 * @desc BETA Allows a caller to remove a slot assignment from a user participating in an active Guest Star session. This revokes their access to the session immediately and disables their access to publish or subscribe to media within the session.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#delete-guest-star-slot)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${Yes} : The ID of the broadcaster running the Guest Star session.
 * - `moderator_id` : ${Yes} : The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.
 * - `session_id` : ${Yes} : The ID of the Guest Star session in which to remove the slot assignment.
 * - `guest_id` : ${Yes} : The Twitch User ID corresponding to the guest to remove from the session.
 * - `slot_id` : ${Yes} : The slot ID representing the slot assignment to remove from the session.
 * - `should_reinvite_guest` : ${No} : Flag signaling that the guest should be reinvited to the session, sending them back to the invite queue.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_guest_star_delete_guest_star_slot(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_guest_star_update_guest_star_slot_settings
 * @desc BETA Allows a user to update slot settings for a particular guest within a Guest Star session, such as allowing the user to share audio or video within the call as a host. These settings will be broadcasted to all subscribers which control their view of the guest in that slot. One or more of the optional parameters to this API can be specified at any time.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-guest-star-slot-settings)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `broadcaster_id` : ${Yes} : The ID of the broadcaster running the Guest Star session.
 * - `moderator_id` : ${Yes} : The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.
 * - `session_id` : ${Yes} : The ID of the Guest Star session in which to update a slot’s settings.
 * - `slot_id` : ${Yes} : The slot assignment that has previously been assigned to a user.
 * - `is_audio_enabled` : ${No} : Flag indicating whether the slot is allowed to share their audio with the rest of the session. If false, the slot will be muted in any views containing the slot.
 * - `is_video_enabled` : ${No} : Flag indicating whether the slot is allowed to share their video with the rest of the session. If false, the slot will have no video shared in any views containing the slot.
 * - `is_live` : ${No} : Flag indicating whether the user assigned to this slot is visible/can be heard from any public subscriptions. Generally, this determines whether or not the slot is enabled in any broadcasting software integrations.
 * - `volume` : ${No} : Value from 0-100 that controls the audio volume for shared views containing the slot.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_guest_star_update_guest_star_slot_settings(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_hype_train_get_hype_train_events
 * @desc Gets information about the broadcaster’s current or most recent Hype Train event.

Instead of polling for events, consider subscribing to Hype Train events (Begin, Progress, End).

Requires a user access token that includes the channel:read:hype_train scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-hype-train-events)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that’s running the Hype Train. This ID must match the User ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 1.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of Hype Train events. The list is empty if the broadcaster hasn’t run a Hype Train within the last 5 days.  |
 * | ___id | ${type.string}  | An ID that identifies this event.  |
 * | ___event_type | ${type.string}  | The type of event. The string is in the form, hypetrain.{event_name}. The request returns only progress event types (i.e., hypetrain.progression).  |
 * | ___event_timestamp | ${type.string}  | The UTC date and time (in RFC3339 format) that the event occurred.  |
 * | ___version | ${type.string}  | The version number of the definition of the event’s data. For example, the value is 1 if the data in event_data uses the first definition of the event’s data.  |
 * | ___event_data | ${type.struct}  | The event’s data.  |
 * | ______broadcaster_id | ${type.string}  | The ID of the broadcaster that’s running the Hype Train.  |
 * | ______cooldown_end_time | ${type.string}  | The UTC date and time (in RFC3339 format) that another Hype Train can start.  |
 * | ______expires_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the Hype Train ends.  |
 * | ______goal | ${type.number}  | The value needed to reach the next level.  |
 * | ______id | ${type.string}  | An ID that identifies this Hype Train.  |
 * | ______last_contribution | ${type.struct}  | The most recent contribution towards the Hype Train’s goal.  |
 * | _________total | ${type.number}  | The total amount contributed. If type is BITS, total represents the amount of Bits used. If type is SUBS, total is 500, 1000, or 2500 to represent tier 1, 2, or 3 subscriptions, respectively.  |
 * | _________type | ${type.string}  | The contribution method used. Possible values are:BITS &mdash; Cheering with Bits.SUBS &mdash; Subscription activity like subscribing or gifting subscriptions.OTHER &mdash; Covers other contribution methods not listed.  |
 * | _________user | ${type.string}  | The ID of the user that made the contribution.  |
 * | ______level | ${type.number}  | The highest level that the Hype Train reached (the levels are 1 through 5).  |
 * | ______started_at | ${type.string}  | The UTC date and time (in RFC3339 format) that this Hype Train started.  |
 * | ______top_contributions | ${type.array}  | The top contributors for each contribution type. For example, the top contributor using BITS (by aggregate) and the top contributor using SUBS (by count).  |
 * | _________total | ${type.number}  | The total amount contributed. If type is BITS, total represents the amount of Bits used. If type is SUBS, total is 500, 1000, or 2500 to represent tier 1, 2, or 3 subscriptions, respectively.  |
 * | _________type | ${type.string}  | The contribution method used. Possible values are:BITS &mdash; Cheering with Bits.SUBS &mdash; Subscription activity like subscribing or gifting subscriptions.OTHER &mdash; Covers other contribution methods not listed.  |
 * | _________user | ${type.string}  | The ID of the user that made the contribution.  |
 * | ______total | ${type.number}  | The current total amount raised.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * @event_end
@func_end
 */
function twitch_hype_train_get_hype_train_events(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_check_automod_status
 * @desc Checks whether AutoMod would flag the specified message for review.

AutoMod is a moderation tool that holds inappropriate or harassing chat messages for moderators to review. Moderators approve or deny the messages that AutoMod flags; only approved messages are released to chat. AutoMod detects misspellings and evasive language automatically. For information about AutoMod, see How to Use AutoMod.

Rate Limits: Rates are limited per channel based on the account type rather than per access token.

The above limits are in addition to the standard Twitch API rate limits. The rate limit headers in the response represent the Twitch rate limits and not the above limits.

Requires a user access token that includes the moderation:read scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#check-automod-status)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose AutoMod settings and list of blocked terms are used to check the message. This ID must match the user ID in the access token. 
 * @param {Object[]} data The list of messages to check. The list must contain at least one message and may contain up to a maximum of 100 messages. 
 * @param {string} msg_id A caller-defined ID used to correlate this message with the same message in the response. 
 * @param {string} msg_text The message to check. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | Normal | ${type.5}  | 50  |
 * | Affiliate | ${type.10}  | 100  |
 * | Partner | ${type.30}  | 300  |
 * | data | ${type.array}  | The list of messages and whether Twitch would approve them for chat.  |
 * | ___msg_id | ${type.string}  | The caller-defined ID passed in the request.  |
 * | ___is_permitted | ${type.boolean}  | A Boolean value that indicates whether Twitch would approve the message for chat or hold it for moderator review or block it from chat. Is true if Twitch would approve the message; otherwise, false if Twitch would hold the message for moderator review or block it from chat.  |
 * @event_end
@func_end
 */
function twitch_moderation_check_automod_status(broadcaster_id,data,msg_id,msg_text,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_manage_held_automod_messages
 * @desc Allow or deny the message that AutoMod flagged for review. For information about AutoMod, see How to Use AutoMod.

To get messages that AutoMod is holding for review, subscribe to the automod-queue.&lt;moderator_id&gt;.&lt;channel_id&gt; topic using PubSub. PubSub sends a notification to your app when AutoMod holds a message for review.

Requires a user access token that includes the moderator:manage:automod scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#manage-held-automod-messages)
 * 
 * @param {string} user_id The moderator who is approving or denying the held message. This ID must match the user ID in the access token. 
 * @param {string} msg_id The ID of the message to allow or deny. 
 * @param {string} action The action to take for the message. Possible values are:ALLOWDENY 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_moderation_manage_held_automod_messages(user_id,msg_id,action,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_get_automod_settings
 * @desc Gets the broadcaster’s AutoMod settings. The settings are used to automatically block inappropriate or harassing messages from appearing in the broadcaster’s chat room.

Requires a user access token that includes the moderator:read:automod_settings scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-automod-settings)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose AutoMod settings you want to get. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of AutoMod settings. The list contains a single object that contains all the AutoMod settings.  |
 * | ___broadcaster_id | ${type.string}  | The broadcaster’s ID.  |
 * | ___moderator_id | ${type.string}  | The moderator’s ID.  |
 * | ___overall_level | ${type.number}  | The default AutoMod level for the broadcaster. This field is null if the broadcaster has set one or more of the individual settings.  |
 * | ___disability | ${type.number}  | The Automod level for discrimination against disability.  |
 * | ___aggression | ${type.number}  | The Automod level for hostility involving aggression.  |
 * | ___sexuality_sex_or_gender | ${type.number}  | The AutoMod level for discrimination based on sexuality, sex, or gender.  |
 * | ___misogyny | ${type.number}  | The Automod level for discrimination against women.  |
 * | ___bullying | ${type.number}  | The Automod level for hostility involving name calling or insults.  |
 * | ___swearing | ${type.number}  | The Automod level for profanity.  |
 * | ___race_ethnicity_or_religion | ${type.number}  | The Automod level for racial discrimination.  |
 * | ___sex_based_terms | ${type.number}  | The Automod level for sexual content.  |
 * @event_end
@func_end
 */
function twitch_moderation_get_automod_settings(broadcaster_id,moderator_id,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_update_automod_settings
 * @desc Updates the broadcaster’s AutoMod settings. The settings are used to automatically block inappropriate or harassing messages from appearing in the broadcaster’s chat room.

Requires a user access token that includes the moderator:manage:automod_settings scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-automod-settings)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose AutoMod settings you want to update. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | aggression | ${type.number}  | The Automod level for hostility involving aggression.  |
 * | bullying | ${type.number}  | The Automod level for hostility involving name calling or insults.  |
 * | disability | ${type.number}  | The Automod level for discrimination against disability.  |
 * | misogyny | ${type.number}  | The Automod level for discrimination against women.  |
 * | overall_level | ${type.number}  | The default AutoMod level for the broadcaster.  |
 * | race_ethnicity_or_religion | ${type.number}  | The Automod level for racial discrimination.  |
 * | sex_based_terms | ${type.number}  | The Automod level for sexual content.  |
 * | sexuality_sex_or_gender | ${type.number}  | The AutoMod level for discrimination based on sexuality, sex, or gender.  |
 * | swearing | ${type.number}  | The Automod level for profanity.  |
 * | data | ${type.array}  | The list of AutoMod settings. The list contains a single object that contains all the AutoMod settings.  |
 * | ___broadcaster_id | ${type.string}  | The broadcaster’s ID.  |
 * | ___moderator_id | ${type.string}  | The moderator’s ID.  |
 * | ___overall_level | ${type.number}  | The default AutoMod level for the broadcaster. This field is null if the broadcaster has set one or more of the individual settings.  |
 * | ___disability | ${type.number}  | The Automod level for discrimination against disability.  |
 * | ___aggression | ${type.number}  | The Automod level for hostility involving aggression.  |
 * | ___sexuality_sex_or_gender | ${type.number}  | The AutoMod level for discrimination based on sexuality, sex, or gender.  |
 * | ___misogyny | ${type.number}  | The Automod level for discrimination against women.  |
 * | ___bullying | ${type.number}  | The Automod level for hostility involving name calling or insults.  |
 * | ___swearing | ${type.number}  | The Automod level for profanity.  |
 * | ___race_ethnicity_or_religion | ${type.number}  | The Automod level for racial discrimination.  |
 * | ___sex_based_terms | ${type.number}  | The Automod level for sexual content.  |
 * @event_end
@func_end
 */
function twitch_moderation_update_automod_settings(broadcaster_id,moderator_id,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_get_banned_users
 * @desc Gets all users that the broadcaster banned or put in a timeout.

Requires a user access token that includes the moderation:read or moderator:manage:banned_users scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-banned-users)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose list of banned users you want to get. This ID must match the user ID in the access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `user_id` : ${type.string} : A list of user IDs used to filter the results. To specify more than one ID, include this parameter for each user you want to get. For example, <code class="highlighter-rouge">user_id=1234&amp;user_id=5678</code>. You may specify a maximum of 100 IDs.<br><br>The returned list includes only those users that were banned or put in a timeout. The list is returned in the same order that you specified the IDs.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 * - `before` : ${type.string} : The cursor used to get the previous page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users that were banned or put in a timeout.  |
 * | __user_id | ${type.string}  | The ID of the banned user.  |
 * | __user_login | ${type.string}  | The banned user’s login name.  |
 * | __user_name | ${type.string}  | The banned user’s display name.  |
 * | __expires_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the timeout expires, or an empty string if the user is permanently banned.  |
 * | __created_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the user was banned.  |
 * | __reason | ${type.string}  | The reason the user was banned or put in a timeout if the moderator provided one.  |
 * | __moderator_id | ${type.string}  | The ID of the moderator that banned the user or put them in a timeout.  |
 * | __moderator_login | ${type.string}  | The moderator’s login name.  |
 * | __moderator_name | ${type.string}  | The moderator’s display name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | __cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * @event_end
@func_end
 */
function twitch_moderation_get_banned_users(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_ban_user
 * @desc Bans a user from participating in the specified broadcaster’s chat room or puts them in a timeout.

For information about banning or putting users in a timeout, see Ban a User and Timeout a User.

If the user is currently in a timeout, you can call this endpoint to change the duration of the timeout or ban them altogether. If the user is currently banned, you cannot call this method to put them in a timeout instead.

To remove a ban or end a timeout, see Unban user.

Requires a user access token that includes the moderator:manage:banned_users scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#ban-user)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose chat room the user is being banned from. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. 
 * @param {struct} data Identifies the user and type of ban. 
 * @param {string} user_id The ID of the user to ban or put in a timeout. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `duration` : ${type.number} : To ban a user indefinitely, don’t include this field.<br><br>To put a user in a timeout, include this field and specify the timeout period, in seconds. The minimum timeout is 1 second and the maximum is 1,209,600 seconds (2 weeks).<br><br>To end a user’s timeout early, set this field to 1, or use the <a href="#unban-user">Unban user</a> endpoint.
 * - `reason` : ${type.string} : The reason the you’re banning the user or putting them in a timeout. The text is user defined and is limited to a maximum of 500 characters.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the user you successfully banned or put in a timeout.  |
 * | ___broadcaster_id | ${type.string}  | The broadcaster whose chat room the user was banned from chatting in.  |
 * | ___moderator_id | ${type.string}  | The moderator that banned or put the user in the timeout.  |
 * | ___user_id | ${type.string}  | The user that was banned or put in a timeout.  |
 * | ___created_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the ban or timeout was placed.  |
 * | ___end_time | ${type.string}  | The UTC date and time (in RFC3339 format) that the timeout will end. Is null if the user was banned instead of being put in a timeout.  |
 * @event_end
@func_end
 */
function twitch_moderation_ban_user(broadcaster_id,moderator_id,data,user_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_unban_user
 * @desc Removes the ban or timeout that was placed on the specified user.

To ban a user, see Ban user.

Requires a user access token that includes the moderator:manage:banned_users scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#unban-user)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose chat room the user is banned from chatting in. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. 
 * @param {string} user_id The ID of the user to remove the ban or timeout from. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_moderation_unban_user(broadcaster_id,moderator_id,user_id,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_get_unban_requests
 * @desc NEW Gets a list of unban requests for a broadcaster’s channel.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-unban-requests)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose channel is receiving unban requests. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster’s unban requests. This ID must match the user ID in the user access token. 
 * @param {string} status Filter by a status.pendingapproveddeniedacknowledgedcanceled 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `user_id` : ${type.string} : The ID used to filter what unban requests are returned.
 * - `after` : ${type.string} : Cursor used to get next page of results. Pagination object in response contains cursor value.
 * - `first` : ${type.number} : The maximum number of items to return per page in response
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains information about the channel's unban requests.  |
 * | __id | ${type.string}  | Unban request ID.  |
 * | __broadcaster_id | ${type.string}  | User ID of broadcaster whose channel is receiving the unban request.  |
 * | _____broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | __broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | __moderator_id | ${type.string}  | User ID of moderator who approved/denied the request.  |
 * | __moderator_login | ${type.string}  | The moderator's login name.  |
 * | __moderator_name | ${type.string}  | The moderator's display name.  |
 * | __user_id | ${type.string}  | User ID of the requestor who is asking for an unban.  |
 * | __user_login | ${type.string}  | The user's login name.  |
 * | __user_name | ${type.string}  | The user's display name.  |
 * | __text | ${type.string}  | Text of the request from the requesting user.  |
 * | __status | ${type.string}  | Status of the request. One of:pendingapproveddeniedacknowledgedcanceled  |
 * | __created_at | ${type.string}  | Timestamp of when the unban request was created.  |
 * | __resolved_at | ${type.string}  | Timestamp of when moderator/broadcaster approved or denied the request.  |
 * | __resolution_text | ${type.string}  | Text input by the resolver (moderator) of the unban. request  |
 * | pagination | ${type.struct}  | Contains information used to page through a list of results. The object is empty if there are no more pages left to page through.  |
 * | __cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * @event_end
@func_end
 */
function twitch_moderation_get_unban_requests(broadcaster_id,moderator_id,status,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_resolve_unban_requests
 * @desc NEW Resolves an unban request by approving or denying it.

Requires a user access token that includes the moderator:manage:unban\_requests scope.

Query parameter moderator_id must match the user_id in theuser access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#resolve-unban-requests)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose channel is approving or denying the unban request. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster’s unban requests. This ID must match the user ID in the user access token. 
 * @param {string} unban_request_id The ID of the broadcaster or a user that has permission to moderate the broadcaster’s unban requests. This ID must match the user ID in the user access token. 
 * @param {string} status Resolution status. approveddenied 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `resolution_text` : ${type.string} : Message supplied by the unban request resolver. The message is limited to a maximum of 500 characters.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  |   |
 * | ___id | ${type.string}  | Unban request ID.  |
 * | ___broadcaster_id | ${type.string}  | User ID of broadcaster whose channel is receiving the unban request.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___moderator_id | ${type.string}  | User ID of moderator who approved/denied the request.  |
 * | ___moderator_login | ${type.string}  | The moderator’s login name.  |
 * | ___moderator_name | ${type.string}  | The moderator’s display name.  |
 * | ___user_id | ${type.string}  | User ID of the requestor who is asking for an unban.  |
 * | ___user_login | ${type.string}  | The user’s login name.  |
 * | ___user_name | ${type.string}  | The user’s display name.  |
 * | ___text | ${type.string}  | Text of the request from the requesting user.  |
 * | ___status | ${type.string}  | Status of the request. One of: approveddenied  |
 * | ___created_at | ${type.string}  | Timestamp of when the unban request was created.  |
 * | ___resolved_at | ${type.string}  | Timestamp of when moderator/broadcaster approved or denied the request.  |
 * | ___resolution_text | ${type.string}  | Text input by the resolver (moderator) of the unban request.  |
 * @event_end
@func_end
 */
function twitch_moderation_resolve_unban_requests(broadcaster_id,moderator_id,unban_request_id,status,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_get_blocked_terms
 * @desc Gets the broadcaster’s list of non-private, blocked words or phrases. These are the terms that the broadcaster or moderator added manually or that were denied by AutoMod.

Requires a user access token that includes the moderator:read:blocked_terms or moderator:manage:blocked_terms scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-blocked-terms)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose blocked terms you’re getting. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of blocked terms. The list is in descending order of when they were created (see the created_at timestamp).  |
 * | __broadcaster_id | ${type.string}  | The broadcaster that owns the list of blocked terms.  |
 * | __moderator_id | ${type.string}  | The moderator that blocked the word or phrase from being used in the broadcaster’s chat room.  |
 * | __id | ${type.string}  | An ID that identifies this blocked term.  |
 * | __text | ${type.string}  | The blocked word or phrase.  |
 * | __created_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the term was blocked.  |
 * | __updated_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the term was updated.When the term is added, this timestamp is the same as created_at. The timestamp changes as AutoMod continues to deny the term.  |
 * | __expires_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the blocked term is set to expire. After the block expires, users may use the term in the broadcaster’s chat room.This field is null if the term was added manually or was permanently blocked by AutoMod.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * @event_end
@func_end
 */
function twitch_moderation_get_blocked_terms(broadcaster_id,moderator_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_add_blocked_term
 * @desc Adds a word or phrase to the broadcaster’s list of blocked terms. These are the terms that the broadcaster doesn’t want used in their chat room.

Requires a user access token that includes the moderator:manage:blocked_terms scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#add-blocked-term)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the list of blocked terms. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. 
 * @param {string} text The word or phrase to block from being used in the broadcaster’s chat room. The term must contain a minimum of 2 characters and may contain up to a maximum of 500 characters.Terms may include a wildcard character (*). The wildcard character must appear at the beginning or end of a word or set of characters. For example, *foo or foo*.If the blocked term already exists, the response contains the existing blocked term. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single blocked term that the broadcaster added.  |
 * | ___broadcaster_id | ${type.string}  | The broadcaster that owns the list of blocked terms.  |
 * | ___moderator_id | ${type.string}  | The moderator that blocked the word or phrase from being used in the broadcaster’s chat room.  |
 * | ___id | ${type.string}  | An ID that identifies this blocked term.  |
 * | ___text | ${type.string}  | The blocked word or phrase.  |
 * | ___created_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the term was blocked.  |
 * | ___updated_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the term was updated.When the term is added, this timestamp is the same as created_at. The timestamp changes as AutoMod continues to deny the term.  |
 * | ___expires_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the blocked term is set to expire. After the block expires, users may use the term in the broadcaster’s chat room.This field is null if the term was added manually or was permanently blocked by AutoMod.  |
 * @event_end
@func_end
 */
function twitch_moderation_add_blocked_term(broadcaster_id,moderator_id,text,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_remove_blocked_term
 * @desc Removes the word or phrase from the broadcaster’s list of blocked terms.

Requires a user access token that includes the moderator:manage:blocked_terms scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#remove-blocked-term)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the list of blocked terms. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. 
 * @param {string} id The ID of the blocked term to remove from the broadcaster’s list of blocked terms. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_moderation_remove_blocked_term(broadcaster_id,moderator_id,id,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_delete_chat_messages
 * @desc Removes a single chat message or all chat messages from the broadcaster’s chat room.

Requires a user access token that includes the moderator:manage:chat_messages scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#delete-chat-messages)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the chat room to remove messages from. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `message_id` : ${type.string} : The ID of the message to remove. The <code class="highlighter-rouge">id</code> tag in the <a href="/docs/irc/tags#privmsg-tags">PRIVMSG</a> tag contains the message’s ID. Restrictions:<ul><li>The message must have been created within the last 6 hours.</li><li>The message must not belong to the broadcaster.</li><li>The message must not belong to another moderator.</li></ul>If not specified, the request removes all messages in the broadcaster’s chat room.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_moderation_delete_chat_messages(broadcaster_id,moderator_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_get_moderated_channels
 * @desc Gets a list of channels that the specified user has moderator privileges in.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-moderated-channels)
 * 
 * @param {string} user_id A user’s ID. Returns the list of channels that this user has moderator privileges in. This ID must match the user ID in the user OAuth token 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `after` : ${type.string} : The cursor used to get the next page of results. The Pagination object in the response contains the cursor’s value.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response.<br><br>Minimum page size is 1 item per page and the maximum is 100. The default is 20.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of channels that the user has moderator privileges in.  |
 * | __broadcaster_id | ${type.string}  | An ID that uniquely identifies the channel this user can moderate.  |
 * | __broadcaster_login | ${type.string}  | The channel’s login name.  |
 * | __broadcaster_name | ${type.string}  | The channels’ display name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.  |
 * | __cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * @event_end
@func_end
 */
function twitch_moderation_get_moderated_channels(user_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_get_moderators
 * @desc Gets all users allowed to moderate the broadcaster’s chat room.

Requires a user access token that includes the moderation:read scope. If your app also adds and removes moderators, you can use the channel:manage:moderators scope instead.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-moderators)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose list of moderators you want to get. This ID must match the user ID in the access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `user_id` : ${type.string} : A list of user IDs used to filter the results. To specify more than one ID, include this parameter for each moderator you want to get. For example, <code class="highlighter-rouge">user_id=1234&amp;user_id=5678</code>. You may specify a maximum of 100 IDs.<br><br>The returned list includes only the users from the list who are moderators in the broadcaster’s channel. The list is returned in the same order as you specified the IDs.
 * - `first` : ${type.string} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of moderators.  |
 * | __user_id | ${type.string}  | The ID of the user that has permission to moderate the broadcaster’s channel.  |
 * | __user_login | ${type.string}  | The user’s login name.  |
 * | __user_name | ${type.string}  | The user’s display name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | __cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * @event_end
@func_end
 */
function twitch_moderation_get_moderators(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_add_channel_moderator
 * @desc Adds a moderator to the broadcaster’s chat room.

Rate Limits: The broadcaster may add a maximum of 10 moderators within a 10-second window.

Requires a user access token that includes the channel:manage:moderators scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#add-channel-moderator)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the chat room. This ID must match the user ID in the access token. 
 * @param {string} user_id The ID of the user to add as a moderator in the broadcaster’s chat room. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_moderation_add_channel_moderator(broadcaster_id,user_id,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_remove_channel_moderator
 * @desc Removes a moderator from the broadcaster’s chat room.

Rate Limits: The broadcaster may remove a maximum of 10 moderators within a 10-second window.

Requires a user access token that includes the channel:manage:moderators scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#remove-channel-moderator)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the chat room. This ID must match the user ID in the access token. 
 * @param {string} user_id The ID of the user to remove as a moderator from the broadcaster’s chat room. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_moderation_remove_channel_moderator(broadcaster_id,user_id,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_get_vips
 * @desc Gets a list of the broadcaster’s VIPs.

Requires a user access token that includes the channel:read:vips scope. If your app also adds and removes VIP status, you can use the channel:manage:vips scope instead.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-vips)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose list of VIPs you want to get. This ID must match the user ID in the access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `user_id` : ${type.string} : Filters the list for specific VIPs. To specify more than one user, include the <em>user_id</em> parameter for each user to get. For example, <code class="highlighter-rouge">&amp;user_id=1234&amp;user_id=5678</code>. The maximum number of IDs that you may specify is 100. Ignores the ID of those users in the list that aren’t VIPs.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="https://dev.twitch.tv/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of VIPs. The list is empty if the broadcaster doesn’t have VIP users.  |
 * | ___user_id | ${type.string}  | An ID that uniquely identifies the VIP user.  |
 * | ___user_name | ${type.string}  | The user’s display name.  |
 * | ___user_login | ${type.string}  | The user’s login name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * @event_end
@func_end
 */
function twitch_moderation_get_vips(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_add_channel_vip
 * @desc Adds the specified user as a VIP in the broadcaster’s channel.

Rate Limits: The broadcaster may add a maximum of 10 VIPs within a 10-second window.

Requires a user access token that includes the channel:manage:vips scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#add-channel-vip)
 * 
 * @param {string} user_id The ID of the user to give VIP status to. 
 * @param {string} broadcaster_id The ID of the broadcaster that’s adding the user as a VIP. This ID must match the user ID in the access token. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_moderation_add_channel_vip(user_id,broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_remove_channel_vip
 * @desc Removes the specified user as a VIP in the broadcaster’s channel.

If the broadcaster is removing the user’s VIP status, the ID in the broadcaster_id query parameter must match the user ID in the access token; otherwise, if the user is removing their VIP status themselves, the ID in the user_id query parameter must match the user ID in the access token.

Rate Limits: The broadcaster may remove a maximum of 10 VIPs within a 10-second window.

Requires a user access token that includes the channel:manage:vips scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#remove-channel-vip)
 * 
 * @param {string} user_id The ID of the user to remove VIP status from. 
 * @param {string} broadcaster_id The ID of the broadcaster who owns the channel where the user has VIP status. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_moderation_remove_channel_vip(user_id,broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_update_shield_mode_status
 * @desc Activates or deactivates the broadcaster’s Shield Mode.

Twitch’s Shield Mode feature is like a panic button that broadcasters can push to protect themselves from chat abuse coming from one or more accounts. When activated, Shield Mode applies the overrides that the broadcaster configured in the Twitch UX. If the broadcaster hasn’t configured Shield Mode, it applies default overrides.

Requires a user access token that includes the moderator:manage:shield_mode scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-shield-mode-status)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose Shield Mode you want to activate or deactivate. 
 * @param {string} moderator_id The ID of the broadcaster or a user that is one of the broadcaster’s moderators. This ID must match the user ID in the access token. 
 * @param {Boolean} is_active A Boolean value that determines whether to activate Shield Mode. Set to true to activate Shield Mode; otherwise, false to deactivate Shield Mode. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains a single object with the broadcaster’s updated Shield Mode status.  |
 * | ___is_active | ${type.boolean}  | A Boolean value that determines whether Shield Mode is active. Is true if Shield Mode is active; otherwise, false.  |
 * | ___moderator_id | ${type.string}  | An ID that identifies the moderator that last activated Shield Mode.  |
 * | ___moderator_login | ${type.string}  | The moderator’s login name.  |
 * | ___moderator_name | ${type.string}  | The moderator’s display name.  |
 * | ___last_activated_at | ${type.string}  | The UTC timestamp (in RFC3339 format) of when Shield Mode was last activated.  |
 * @event_end
@func_end
 */
function twitch_moderation_update_shield_mode_status(broadcaster_id,moderator_id,is_active,callback_success,callback_failed) {}


/**
 * @func twitch_moderation_get_shield_mode_status
 * @desc Gets the broadcaster’s Shield Mode activation status.

To receive notification when the broadcaster activates and deactivates Shield Mode, subscribe to the channel.shield_mode.begin and channel.shield_mode.end subscription types.

Requires a user access token that includes the moderator:read:shield_mode or moderator:manage:shield_mode scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-shield-mode-status)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose Shield Mode activation status you want to get. 
 * @param {string} moderator_id The ID of the broadcaster or a user that is one of the broadcaster’s moderators. This ID must match the user ID in the access token. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains a single object with the broadcaster’s Shield Mode status.  |
 * | ___is_active | ${type.boolean}  | A Boolean value that determines whether Shield Mode is active. Is true if the broadcaster activated Shield Mode; otherwise, false.  |
 * | ___moderator_id | ${type.string}  | An ID that identifies the moderator that last activated Shield Mode. Is an empty string if Shield Mode hasn’t been previously activated.  |
 * | ___moderator_login | ${type.string}  | The moderator’s login name. Is an empty string if Shield Mode hasn’t been previously activated.  |
 * | ___moderator_name | ${type.string}  | The moderator’s display name. Is an empty string if Shield Mode hasn’t been previously activated.  |
 * | ___last_activated_at | ${type.string}  | The UTC timestamp (in RFC3339 format) of when Shield Mode was last activated. Is an empty string if Shield Mode hasn’t been previously activated.  |
 * @event_end
@func_end
 */
function twitch_moderation_get_shield_mode_status(broadcaster_id,moderator_id,callback_success,callback_failed) {}


/**
 * @func twitch_polls_get_polls
 * @desc Gets a list of polls that the broadcaster created.

Polls are available for 90 days after they’re created.

Requires a user access token that includes the channel:read:polls or channel:manage:polls scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-polls)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that created the polls. This ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `id` : ${type.string} : A list of IDs that identify the polls to return. To specify more than one ID, include this parameter for each poll you want to get. For example, <code class="highlighter-rouge">id=1234&amp;id=5678</code>. You may specify a maximum of 20 IDs.<br><br>Specify this parameter only if you want to filter the list that the request returns. The endpoint ignores duplicate IDs and those not owned by this broadcaster.
 * - `first` : ${type.string} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 20 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list of polls. The polls are returned in descending order of start time unless you specify IDs in the request, in which case they're returned in the same order as you passed them in the request. The list is empty if the broadcaster hasn't created polls.  |
 * | __id | ${type.string}  | An ID that identifies the poll.  |
 * | __broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the poll.  |
 * | __broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | __broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | __title | ${type.string}  | The question that viewers are voting on. For example, What game should I play next? The title may contain a maximum of 60 characters.  |
 * | __choices | ${type.array}  | A list of choices that viewers can choose from. The list will contain a minimum of two choices and up to a maximum of five choices.  |
 * | ___id | ${type.string}  | An ID that identifies this choice.  |
 * | ___title | ${type.string}  | The choice's title. The title may contain a maximum of 25 characters.  |
 * | ___votes | ${type.number}  | The total number of votes cast for this choice.  |
 * | ___channel_points_votes | ${type.number}  | The number of votes cast using Channel Points.  |
 * | ___bits_votes | ${type.number}  | Not used; will be set to 0.  |
 * | __bits_voting_enabled | ${type.boolean}  | Not used; will be set to false.  |
 * | __bits_per_vote | ${type.number}  | Not used; will be set to 0.  |
 * | __channel_points_voting_enabled | ${type.boolean}  | A Boolean value that indicates whether viewers may cast additional votes using Channel Points. For information about Channel Points, see Channel Points Guide.  |
 * | __channel_points_per_vote | ${type.number}  | The number of points the viewer must spend to cast one additional vote.  |
 * | __status | ${type.string}  | The poll's status. Valid values are:ACTIVE — The poll is running.COMPLETED — The poll ended on schedule (see the duration field).TERMINATED — The poll was terminated before its scheduled end.ARCHIVED — The poll has been archived and is no longer visible on the channel.MODERATED — The poll was deleted.INVALID — Something went wrong while determining the state.  |
 * | __duration | ${type.number}  | The length of time (in seconds) that the poll will run for.  |
 * | __started_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the poll began.  |
 * | __ended_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the poll ended. If status is ACTIVE, this field is set to null.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | __cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's after query parameter.  |
 * @event_end
@func_end
 */
function twitch_polls_get_polls(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_polls_create_poll
 * @desc Creates a poll that viewers in the broadcaster’s channel can vote on.

The poll begins as soon as it’s created. You may run only one poll at a time.

Requires a user access token that includes the channel:manage:polls scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#create-poll)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that’s running the poll. This ID must match the user ID in the user access token. 
 * @param {string} title The question that viewers will vote on. For example, What game should I play next? The question may contain a maximum of 60 characters. 
 * @param {Object[]} choices A list of choices that viewers may choose from. The list must contain a minimum of 2 choices and up to a maximum of 5 choices. 
 * @param {number} duration The length of time (in seconds) that the poll will run for. The minimum is 15 seconds and the maximum is 1800 seconds (30 minutes). 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `channel_points_voting_enabled` : ${type.boolean} : A Boolean value that indicates whether viewers may cast additional votes using Channel Points. If <strong>true</strong>, the viewer may cast more than one vote but each additional vote costs the number of Channel Points specified in <code class="highlighter-rouge">channel_points_per_vote</code>. The default is <strong>false</strong> (viewers may cast only one vote). For information about Channel Points, see <a href="https://help.twitch.tv/s/article/channel-points-guide">Channel Points Guide</a>.
 * - `channel_points_per_vote` : ${type.number} : The number of points that the viewer must spend to cast one additional vote. The minimum is 1 and the maximum is 1000000. Set only if <code class="highlighter-rouge">ChannelPointsVotingEnabled</code> is <strong>true</strong>.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single poll that you created.  |
 * | ___id | ${type.string}  | An ID that identifies the poll.  |
 * | ___broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the poll.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___title | ${type.string}  | The question that viewers are voting on. For example, What game should I play next? The title may contain a maximum of 60 characters.  |
 * | ___choices | ${type.array}  | A list of choices that viewers can choose from. The list will contain a minimum of two choices and up to a maximum of five choices.  |
 * | ______id | ${type.string}  | An ID that identifies this choice.  |
 * | ______title | ${type.string}  | The choice’s title. The title may contain a maximum of 25 characters.  |
 * | ______votes | ${type.number}  | The total number of votes cast for this choice.  |
 * | ______channel_points_votes | ${type.number}  | The number of votes cast using Channel Points.  |
 * | ______bits_votes | ${type.number}  | Not used; will be set to 0.  |
 * | ___bits_voting_enabled | ${type.boolean}  | Not used; will be set to false.  |
 * | ___bits_per_vote | ${type.number}  | Not used; will be set to 0.  |
 * | ___channel_points_voting_enabled | ${type.boolean}  | A Boolean value that indicates whether viewers may cast additional votes using Channel Points. For information about Channel Points, see Channel Points Guide.  |
 * | ___channel_points_per_vote | ${type.number}  | The number of points the viewer must spend to cast one additional vote.  |
 * | ___status | ${type.string}  | The poll’s status. Valid values are:ACTIVE &mdash; The poll is running.COMPLETED &mdash; The poll ended on schedule (see the duration field).TERMINATED &mdash; The poll was terminated before its scheduled end.ARCHIVED &mdash; The poll has been archived and is no longer visible on the channel.MODERATED &mdash; The poll was deleted.INVALID &mdash; Something went wrong while determining the state.  |
 * | ___duration | ${type.number}  | The length of time (in seconds) that the poll will run for.  |
 * | ___started_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the poll began.  |
 * | ___ended_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the poll ended. If status is ACTIVE, this field is set to null.  |
 * @event_end
@func_end
 */
function twitch_polls_create_poll(broadcaster_id,title,choices,duration,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_polls_end_poll
 * @desc Ends an active poll. You have the option to end it or end it and archive it.

Requires a user access token that includes the channel:manage:polls scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#end-poll)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that’s running the poll. This ID must match the user ID in the user access token. 
 * @param {string} id The ID of the poll to update. 
 * @param {string} status The status to set the poll to. Possible case-sensitive values are:TERMINATED &mdash; Ends the poll before the poll is scheduled to end. The poll remains publicly visible.ARCHIVED &mdash; Ends the poll before the poll is scheduled to end, and then archives it so it's no longer publicly visible. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the poll that you ended.  |
 * | ___id | ${type.string}  | An ID that identifies the poll.  |
 * | ___broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the poll.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___title | ${type.string}  | The question that viewers are voting on. For example, What game should I play next? The title may contain a maximum of 60 characters.  |
 * | ___choices | ${type.array}  | A list of choices that viewers can choose from. The list will contain a minimum of two choices and up to a maximum of five choices.  |
 * | ______id | ${type.string}  | An ID that identifies this choice.  |
 * | ______title | ${type.string}  | The choice’s title. The title may contain a maximum of 25 characters.  |
 * | ______votes | ${type.number}  | The total number of votes cast for this choice.  |
 * | ______channel_points_votes | ${type.number}  | The number of votes cast using Channel Points.  |
 * | ______bits_votes | ${type.number}  | Not used; will be set to 0.  |
 * | ___bits_voting_enabled | ${type.boolean}  | Not used; will be set to false.  |
 * | ___bits_per_vote | ${type.number}  | Not used; will be set to 0.  |
 * | ___channel_points_voting_enabled | ${type.boolean}  | A Boolean value that indicates whether viewers may cast additional votes using Channel Points. For information about Channel Points, see Channel Points Guide.  |
 * | ___channel_points_per_vote | ${type.number}  | The number of points the viewer must spend to cast one additional vote.  |
 * | ___status | ${type.string}  | The poll’s status. Valid values are:ACTIVE &mdash; The poll is running.COMPLETED &mdash; The poll ended on schedule (see the duration field).TERMINATED &mdash; The poll was terminated before its scheduled end.ARCHIVED &mdash; The poll has been archived and is no longer visible on the channel.MODERATED &mdash; The poll was deleted.INVALID &mdash; Something went wrong while determining the state.  |
 * | ___duration | ${type.number}  | The length of time (in seconds) that the poll will run for.  |
 * | ___started_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the poll began.  |
 * | ___ended_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the poll ended. If status is ACTIVE, this field is set to null.  |
 * @event_end
@func_end
 */
function twitch_polls_end_poll(broadcaster_id,id,status,callback_success,callback_failed) {}


/**
 * @func twitch_predictions_get_predictions
 * @desc Gets a list of Channel Points Predictions that the broadcaster created.

Requires a user access token that includes the channel:read:predictions or channel:manage:predictions scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-predictions)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose predictions you want to get. This ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `id` : ${type.string} : The ID of the prediction to get. To specify more than one ID, include this parameter for each prediction you want to get. For example, <code class="highlighter-rouge">id=1234&amp;id=5678</code>. You may specify a maximum of 25 IDs. The endpoint ignores duplicate IDs and those not owned by the broadcaster.
 * - `first` : ${type.string} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 25 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The broadcaster’s list of Channel Points Predictions. The list is sorted in descending ordered by when the prediction began (the most recent prediction is first). The list is empty if the broadcaster hasn’t created predictions.  |
 * | ___id | ${type.string}  | An ID that identifies this prediction.  |
 * | ___broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the prediction.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___title | ${type.string}  | The question that the prediction asks. For example, Will I finish this entire pizza?  |
 * | ___winning_outcome_id | ${type.string}  | The ID of the winning outcome. Is null unless status is RESOLVED.  |
 * | ___outcomes | ${type.array}  | The list of possible outcomes for the prediction.  |
 * | ______id | ${type.string}  | An ID that identifies this outcome.  |
 * | ______title | ${type.string}  | The outcome’s text.  |
 * | ______users | ${type.number}  | The number of unique viewers that chose this outcome.  |
 * | ______channel_points | ${type.number}  | The number of Channel Points spent by viewers on this outcome.  |
 * | ______top_predictors | ${type.array}  | A list of viewers who were the top predictors; otherwise, null if none.  |
 * | _________user_id | ${type.string}  | An ID that identifies the viewer.  |
 * | _________user_name | ${type.string}  | The viewer’s display name.  |
 * | _________user_login | ${type.string}  | The viewer’s login name.  |
 * | _________channel_points_used | ${type.number}  | The number of Channel Points the viewer spent.  |
 * | _________channel_points_won | ${type.number}  | The number of Channel Points distributed to the viewer.  |
 * | ______color | ${type.string}  | The color that visually identifies this outcome in the UX. Possible values are:BLUEPINKIf the number of outcomes is two, the color is BLUE for the first outcome and PINK for the second outcome. If there are more than two outcomes, the color is BLUE for all outcomes.  |
 * | ___prediction_window | ${type.number}  | The length of time (in seconds) that the prediction will run for.  |
 * | ___status | ${type.string}  | The prediction’s status. Valid values are:ACTIVE &mdash; The Prediction is running and viewers can make predictions.CANCELED &mdash; The broadcaster canceled the Prediction and refunded the Channel Points to the participants.LOCKED &mdash; The broadcaster locked the Prediction, which means viewers can no longer make predictions.RESOLVED &mdash; The winning outcome was determined and the Channel Points were distributed to the viewers who predicted the correct outcome.  |
 * | ___created_at | ${type.string}  | The UTC date and time of when the Prediction began.  |
 * | ___ended_at | ${type.string}  | The UTC date and time of when the Prediction ended. If status is ACTIVE, this is set to null.  |
 * | ___locked_at | ${type.string}  | The UTC date and time of when the Prediction was locked. If status is not LOCKED, this is set to null.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter.  |
 * @event_end
@func_end
 */
function twitch_predictions_get_predictions(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_predictions_create_prediction
 * @desc Creates a Channel Points Prediction.

With a Channel Points Prediction, the broadcaster poses a question and viewers try to predict the outcome. The prediction runs as soon as it’s created. The broadcaster may run only one prediction at a time.

Requires a user access token that includes the channel:manage:predictions scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#create-prediction)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that’s running the prediction. This ID must match the user ID in the user access token. 
 * @param {string} title The question that the broadcaster is asking. For example, Will I finish this entire pizza? The title is limited to a maximum of 45 characters. 
 * @param {Object[]} outcomes The list of possible outcomes that the viewers may choose from. The list must contain a minimum of 2 choices and up to a maximum of 10 choices. 
 * @param {number} prediction_window The length of time (in seconds) that the prediction will run for. The minimum is 30 seconds and the maximum is 1800 seconds (30 minutes). 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single prediction that you created.  |
 * | ___id | ${type.string}  | An ID that identifies this prediction.  |
 * | ___broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the prediction.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___title | ${type.string}  | The question that the prediction asks. For example, Will I finish this entire pizza?  |
 * | ___winning_outcome_id | ${type.string}  | The ID of the winning outcome. Is null unless status is RESOLVED.  |
 * | ___outcomes | ${type.array}  | The list of possible outcomes for the prediction.  |
 * | ______id | ${type.string}  | An ID that identifies this outcome.  |
 * | ______title | ${type.string}  | The outcome’s text.  |
 * | ______users | ${type.number}  | The number of unique viewers that chose this outcome.  |
 * | ______channel_points | ${type.number}  | The number of Channel Points spent by viewers on this outcome.  |
 * | ______top_predictors | ${type.array}  | A list of viewers who were the top predictors; otherwise, null if none.  |
 * | _________user_id | ${type.string}  | An ID that identifies the viewer.  |
 * | _________user_name | ${type.string}  | The viewer’s display name.  |
 * | _________user_login | ${type.string}  | The viewer’s login name.  |
 * | _________channel_points_used | ${type.number}  | The number of Channel Points the viewer spent.  |
 * | _________channel_points_won | ${type.number}  | The number of Channel Points distributed to the viewer.  |
 * | ______color | ${type.string}  | The color that visually identifies this outcome in the UX. Possible values are:BLUEPINKIf the number of outcomes is two, the color is BLUE for the first outcome and PINK for the second outcome. If there are more than two outcomes, the color is BLUE for all outcomes.  |
 * | ___prediction_window | ${type.number}  | The length of time (in seconds) that the prediction will run for.  |
 * | ___status | ${type.string}  | The prediction’s status. Valid values are:ACTIVE &mdash; The Prediction is running and viewers can make predictions.CANCELED &mdash; The broadcaster canceled the Prediction and refunded the Channel Points to the participants.LOCKED &mdash; The broadcaster locked the Prediction, which means viewers can no longer make predictions.RESOLVED &mdash; The winning outcome was determined and the Channel Points were distributed to the viewers who predicted the correct outcome.  |
 * | ___created_at | ${type.string}  | The UTC date and time of when the Prediction began.  |
 * | ___ended_at | ${type.string}  | The UTC date and time of when the Prediction ended. If status is ACTIVE, this is set to null.  |
 * | ___locked_at | ${type.string}  | The UTC date and time of when the Prediction was locked. If status is not LOCKED, this is set to null.  |
 * @event_end
@func_end
 */
function twitch_predictions_create_prediction(broadcaster_id,title,outcomes,prediction_window,callback_success,callback_failed) {}


/**
 * @func twitch_predictions_end_prediction
 * @desc Locks, resolves, or cancels a Channel Points Prediction.

Requires a user access token that includes the channel:manage:predictions scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#end-prediction)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that’s running the prediction. This ID must match the user ID in the user access token. 
 * @param {string} id The ID of the prediction to update. 
 * @param {string} status The status to set the prediction to. Possible case-sensitive values are:RESOLVED &mdash; The winning outcome is determined and the Channel Points are distributed to the viewers who predicted the correct outcome.CANCELED &mdash; The broadcaster is canceling the prediction and sending refunds to the participants.LOCKED &mdash; The broadcaster is locking the prediction, which means viewers may no longer make predictions.The broadcaster can update an active prediction to LOCKED, RESOLVED, or CANCELED; and update a locked prediction to RESOLVED or CANCELED.The broadcaster has up to 24 hours after the prediction window closes to resolve the prediction. If not, Twitch sets the status to CANCELED and returns the points. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `winning_outcome_id` : ${type.string} : The ID of the winning outcome. You must set this parameter if you set <code class="highlighter-rouge">status</code> to RESOLVED.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single prediction that you updated.  |
 * | ___id | ${type.string}  | An ID that identifies this prediction.  |
 * | ___broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the prediction.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___title | ${type.string}  | The question that the prediction asks. For example, Will I finish this entire pizza?  |
 * | ___winning_outcome_id | ${type.string}  | The ID of the winning outcome. Is null unless status is RESOLVED.  |
 * | ___outcomes | ${type.array}  | The list of possible outcomes for the prediction.  |
 * | ______id | ${type.string}  | An ID that identifies this outcome.  |
 * | ______title | ${type.string}  | The outcome’s text.  |
 * | ______users | ${type.number}  | The number of unique viewers that chose this outcome.  |
 * | ______channel_points | ${type.number}  | The number of Channel Points spent by viewers on this outcome.  |
 * | ______top_predictors | ${type.array}  | A list of viewers who were the top predictors; otherwise, null if none.  |
 * | _________user_id | ${type.string}  | An ID that identifies the viewer.  |
 * | _________user_name | ${type.string}  | The viewer’s display name.  |
 * | _________user_login | ${type.string}  | The viewer’s login name.  |
 * | _________channel_points_used | ${type.number}  | The number of Channel Points the viewer spent.  |
 * | _________channel_points_won | ${type.number}  | The number of Channel Points distributed to the viewer.  |
 * | ______color | ${type.string}  | The color that visually identifies this outcome in the UX. Possible values are:BLUEPINKIf the number of outcomes is two, the color is BLUE for the first outcome and PINK for the second outcome. If there are more than two outcomes, the color is BLUE for all outcomes.  |
 * | ___prediction_window | ${type.number}  | The length of time (in seconds) that the prediction will run for.  |
 * | ___status | ${type.string}  | The prediction’s status. Valid values are:ACTIVE &mdash; The Prediction is running and viewers can make predictions.CANCELED &mdash; The broadcaster canceled the Prediction and refunded the Channel Points to the participants.LOCKED &mdash; The broadcaster locked the Prediction, which means viewers can no longer make predictions.RESOLVED &mdash; The winning outcome was determined and the Channel Points were distributed to the viewers who predicted the correct outcome.  |
 * | ___created_at | ${type.string}  | The UTC date and time of when the Prediction began.  |
 * | ___ended_at | ${type.string}  | The UTC date and time of when the Prediction ended. If status is ACTIVE, this is set to null.  |
 * | ___locked_at | ${type.string}  | The UTC date and time of when the Prediction was locked. If status is not LOCKED, this is set to null.  |
 * @event_end
@func_end
 */
function twitch_predictions_end_prediction(broadcaster_id,id,status,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_raids_start_a_raid
 * @desc Raid another channel by sending the broadcaster’s viewers to the targeted channel.

When you call the API from a chat bot or extension, the Twitch UX pops up a window at the top of the chat room that identifies the number of viewers in the raid. The raid occurs when the broadcaster clicks Raid Now or after the 90-second countdown expires.

To determine whether the raid successfully occurred, you must subscribe to the Channel Raid event. For more information, see Get notified when a raid begins.

To cancel a pending raid, use the Cancel a raid endpoint.

Rate Limit: The limit is 10 requests within a 10-minute window.

Requires a user access token that includes the channel:manage:raids scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#start-a-raid)
 * 
 * @param {string} from_broadcaster_id The ID of the broadcaster that’s sending the raiding party. This ID must match the user ID in the user access token. 
 * @param {string} to_broadcaster_id The ID of the broadcaster to raid. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains a single object with information about the pending raid.  |
 * | ___created_at | ${type.string}  | The UTC date and time, in RFC3339 format, of when the raid was requested.  |
 * | ___is_mature | ${type.boolean}  | A Boolean value that indicates whether the channel being raided contains mature content.  |
 * @event_end
@func_end
 */
function twitch_raids_start_a_raid(from_broadcaster_id,to_broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_raids_cancel_a_raid
 * @desc Cancel a pending raid.

You can cancel a raid at any point up until the broadcaster clicks Raid Now in the Twitch UX or the 90-second countdown expires.

Rate Limit: The limit is 10 requests within a 10-minute window.

Requires a user access token that includes the channel:manage:raids scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#cancel-a-raid)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that initiated the raid. This ID must match the user ID in the user access token. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_raids_cancel_a_raid(broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_schedule_get_channel_stream_schedule
 * @desc Gets the broadcaster’s streaming schedule. You can get the entire schedule or specific segments of the schedule. Learn More

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-channel-stream-schedule)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the streaming schedule you want to get. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `id` : ${type.string} : The ID of the scheduled segment to return. To specify more than one segment, include the ID of each segment you want to get. For example, <code class="highlighter-rouge">id=1234&amp;id=5678</code>. You may specify a maximum of 100 IDs.
 * - `start_time` : ${type.string} : The UTC date and time that identifies when in the broadcaster’s schedule to start returning segments. If not specified, the request returns segments starting after the current UTC date and time. Specify the date and time in RFC3339 format (for example, <code class="highlighter-rouge">2022-09-01T00:00:00Z</code>).
 * - `utc_offset` : ${type.string} : Not supported.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 25 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.struct}  | The broadcaster’s streaming schedule.  |
 * | ___segments | ${type.array}  | The list of broadcasts in the broadcaster’s streaming schedule.  |
 * | ______id | ${type.string}  | An ID that identifies this broadcast segment.  |
 * | ______start_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast starts.  |
 * | ______end_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast ends.  |
 * | ______title | ${type.string}  | The broadcast segment’s title.  |
 * | ______canceled_until | ${type.string}  | Indicates whether the broadcaster canceled this segment of a recurring broadcast. If the broadcaster canceled this segment, this field is set to the same value that’s in the  end_time field; otherwise, it’s set to null.  |
 * | ______category | ${type.struct}  | The type of content that the broadcaster plans to stream or null if not specified.  |
 * | _________id | ${type.string}  | An ID that identifies the category that best represents the content that the broadcaster plans to stream. For example, the game’s ID if the broadcaster will play a game or the Just Chatting ID if the broadcaster will host a talk show.  |
 * | _________name | ${type.string}  | The name of the category. For example, the game’s title if the broadcaster will playing a game or Just Chatting if the broadcaster will host a talk show.  |
 * | ______is_recurring | ${type.boolean}  | A Boolean value that determines whether the broadcast is part of a recurring series that streams at the same time each week or is a one-time broadcast. Is true if the broadcast is part of a recurring series.  |
 * | ___broadcaster_id | ${type.string}  | The ID of the broadcaster that owns the broadcast schedule.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___vacation | ${type.struct}  | The dates when the broadcaster is on vacation and not streaming. Is set to null if vacation mode is not enabled.  |
 * | ______start_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation starts.  |
 * | ______end_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation ends.  |
 * | ___pagination | ${type.struct}  | The information used to page through a list of results. The object is empty if there are no more pages left to page through. Read more.  |
 * | ______cursor | ${type.string}  | The cursor used to get the next page of results. Set the request’s after query parameter to this value.  |
 * @event_end
@func_end
 */
function twitch_schedule_get_channel_stream_schedule(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_schedule_get_channel_icalendar
 * @desc Gets the broadcaster’s streaming schedule as an iCalendar.

The Client-Id and Authorization headers are not required.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-channel-icalendar)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the streaming schedule you want to get. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_schedule_get_channel_icalendar(broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_schedule_update_channel_stream_schedule
 * @desc Updates the broadcaster’s schedule settings, such as scheduling a vacation.

Requires a user access token that includes the channel:manage:schedule scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-channel-stream-schedule)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose schedule settings you want to update. The ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `is_vacation_enabled` : ${type.boolean} : A Boolean value that indicates whether the broadcaster has scheduled a vacation. Set to <strong>true</strong> to enable Vacation Mode and add vacation dates, or <strong>false</strong> to cancel a previously scheduled vacation.
 * - `vacation_start_time` : ${type.string} : The UTC date and time of when the broadcaster’s vacation starts. Specify the date and time in RFC3339 format (for example, 2021-05-16T00:00:00Z). Required if <em>is_vacation_enabled</em> is <strong>true</strong>.
 * - `vacation_end_time` : ${type.string} : The UTC date and time of when the broadcaster’s vacation ends. Specify the date and time in RFC3339 format (for example, 2021-05-30T23:59:59Z). Required if <em>is_vacation_enabled</em> is <strong>true</strong>.
 * - `timezone` : ${type.string} : The time zone that the broadcaster broadcasts from. Specify the time zone using <a href="https://www.iana.org/time-zones">IANA time zone database</a> format (for example, America/New_York). Required if <em>is_vacation_enabled</em> is <strong>true</strong>.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_schedule_update_channel_stream_schedule(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_schedule_create_channel_stream_schedule_segment
 * @desc Adds a single or recurring broadcast to the broadcaster’s streaming schedule. For information about scheduling broadcasts, see Stream Schedule.

Requires a user access token that includes the channel:manage:schedule scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#create-channel-stream-schedule-segment)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the schedule to add the broadcast segment to. This ID must match the user ID in the user access token. 
 * @param {string} start_time The date and time that the broadcast segment starts. Specify the date and time in RFC3339 format (for example, 2021-07-01T18:00:00Z). 
 * @param {string} timezone The time zone where the broadcast takes place. Specify the time zone using IANA time zone database format (for example, America/New_York). 
 * @param {string} duration The length of time, in minutes, that the broadcast is scheduled to run. The duration must be in the range 30 through 1380 (23 hours). 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `is_recurring` : ${type.boolean} : A Boolean value that determines whether the broadcast recurs weekly. Is <strong>true</strong> if the broadcast recurs weekly. Only partners and affiliates may add non-recurring broadcasts.
 * - `category_id` : ${type.string} : The ID of the category that best represents the broadcast’s content. To get the category ID, use the <a href="#search-categories">Search Categories</a> endpoint.
 * - `title` : ${type.string} : The broadcast’s title. The title may contain a maximum of 140 characters.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.struct}  | The broadcaster’s streaming scheduled.  |
 * | ___segments | ${type.array}  | A list that contains the single broadcast segment that you added.  |
 * | ______id | ${type.string}  | An ID that identifies this broadcast segment.  |
 * | ______start_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast starts.  |
 * | ______end_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast ends.  |
 * | ______title | ${type.string}  | The broadcast segment’s title.  |
 * | ______canceled_until | ${type.string}  | Indicates whether the broadcaster canceled this segment of a recurring broadcast. If the broadcaster canceled this segment, this field is set to the same value that’s in the  end_time field; otherwise, it’s set to null.  |
 * | ______category | ${type.struct}  | The type of content that the broadcaster plans to stream or null if not specified.  |
 * | _________id | ${type.string}  | An ID that identifies the category that best represents the content that the broadcaster plans to stream. For example, the game’s ID if the broadcaster will play a game or the Just Chatting ID if the broadcaster will host a talk show.  |
 * | _________name | ${type.string}  | The name of the category. For example, the game’s title if the broadcaster will play a game or Just Chatting if the broadcaster will host a talk show.  |
 * | ______is_recurring | ${type.boolean}  | A Boolean value that determines whether the broadcast is part of a recurring series that streams at the same time each week or is a one-time broadcast. Is true if the broadcast is part of a recurring series.  |
 * | ___broadcaster_id | ${type.string}  | The ID of the broadcaster that owns the broadcast schedule.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___vacation | ${type.struct}  | The dates when the broadcaster is on vacation and not streaming. Is set to null if vacation mode is not enabled.  |
 * | ______start_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation starts.  |
 * | ______end_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation ends.  |
 * @event_end
@func_end
 */
function twitch_schedule_create_channel_stream_schedule_segment(broadcaster_id,start_time,timezone,duration,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_schedule_update_channel_stream_schedule_segment
 * @desc Updates a scheduled broadcast segment.

For recurring segments, updating a segment’s title, category, duration, and timezone, changes all segments in the recurring schedule, not just the specified segment.

Requires a user access token that includes the channel:manage:schedule scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-channel-stream-schedule-segment)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster who owns the broadcast segment to update. This ID must match the user ID in the user access token. 
 * @param {string} id The ID of the broadcast segment to update. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `start_time` : ${type.string} : The date and time that the broadcast segment starts. Specify the date and time in RFC3339 format (for example, 2022-08-02T06:00:00Z).<br><br><strong>NOTE</strong>: Only partners and affiliates may update a broadcast’s start time and only for non-recurring segments.
 * - `duration` : ${type.string} : The length of time, in minutes, that the broadcast is scheduled to run. The duration must be in the range 30 through 1380 (23 hours).
 * - `category_id` : ${type.string} : The ID of the category that best represents the broadcast’s content. To get the category ID, use the <a href="#search-categories">Search Categories</a> endpoint.
 * - `title` : ${type.string} : The broadcast’s title. The title may contain a maximum of 140 characters.
 * - `is_canceled` : ${type.boolean} : A Boolean value that indicates whether the broadcast is canceled. Set to <strong>true</strong> to cancel the segment.<br><br><strong>NOTE</strong>: For recurring segments, the API cancels the first segment after the current UTC date and time and not the specified segment (unless the specified segment is the next segment after the current UTC date and time).
 * - `timezone` : ${type.string} : The time zone where the broadcast takes place. Specify the time zone using <a href="https://www.iana.org/time-zones">IANA time zone database</a> format (for example, America/New_York).
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.struct}  | The broadcaster’s streaming scheduled.  |
 * | ___segments | ${type.array}  | A list that contains the single broadcast segment that you updated.  |
 * | ______id | ${type.string}  | An ID that identifies this broadcast segment.  |
 * | ______start_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast starts.  |
 * | ______end_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast ends.  |
 * | ______title | ${type.string}  | The broadcast segment’s title.  |
 * | ______canceled_until | ${type.string}  | Indicates whether the broadcaster canceled this segment of a recurring broadcast. If the broadcaster canceled this segment, this field is set to the same value that’s in the  end_time field; otherwise, it’s set to null.  |
 * | ______category | ${type.struct}  | The type of content that the broadcaster plans to stream or null if not specified.  |
 * | _________id | ${type.string}  | An ID that identifies the category that best represents the content that the broadcaster plans to stream. For example, the game’s ID if the broadcaster will play a game or the Just Chatting ID if the broadcaster will host a talk show.  |
 * | _________name | ${type.string}  | The name of the category. For example, the game’s title if the broadcaster will play a game or Just Chatting if the broadcaster will host a talk show.  |
 * | ______is_recurring | ${type.boolean}  | A Boolean value that determines whether the broadcast is part of a recurring series that streams at the same time each week or is a one-time broadcast. Is true if the broadcast is part of a recurring series.  |
 * | ___broadcaster_id | ${type.string}  | The ID of the broadcaster that owns the broadcast schedule.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___vacation | ${type.struct}  | The dates when the broadcaster is on vacation and not streaming. Is set to null if vacation mode is not enabled.  |
 * | ______start_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation starts.  |
 * | ______end_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation ends.  |
 * @event_end
@func_end
 */
function twitch_schedule_update_channel_stream_schedule_segment(broadcaster_id,id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_schedule_delete_channel_stream_schedule_segment
 * @desc Removes a broadcast segment from the broadcaster’s streaming schedule.

NOTE: For recurring segments, removing a segment removes all segments in the recurring schedule.

Requires a user access token that includes the channel:manage:schedule scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#delete-channel-stream-schedule-segment)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the streaming schedule. This ID must match the user ID in the user access token. 
 * @param {string} id The ID of the broadcast segment to remove. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_schedule_delete_channel_stream_schedule_segment(broadcaster_id,id,callback_success,callback_failed) {}


/**
 * @func twitch_search_search_categories
 * @desc Gets the games or categories that match the specified query.

To match, the category’s name must contain all parts of the query string. For example, if the query string is 42, the response includes any category name that contains 42 in the title. If the query string is a phrase like love computer, the response includes any category name that contains the words love and computer anywhere in the name. The comparison is case insensitive.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#search-categories)
 * 
 * @param {string} query The URI-encoded search string. For example, encode #archery as %23archery and search strings like angel of death as angel%20of%20death. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of games or categories that match the query. The list is empty if there are no matches.  |
 * | ___box_art_url | ${type.string}  | A URL to an image of the game’s box art or streaming category.  |
 * | ___name | ${type.string}  | The name of the game or category.  |
 * | ___id | ${type.string}  | An ID that uniquely identifies the game or category.  |
 * @event_end
@func_end
 */
function twitch_search_search_categories(query,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_search_search_channels
 * @desc Gets the channels that match the specified query and have streamed content within the past 6 months.

The fields that the API uses for comparison depends on the value that the live_only query parameter is set to. If live_only is false, the API matches on the broadcaster’s login name. However, if live_only is true, the API matches on the broadcaster’s name and category name.

To match, the beginning of the broadcaster’s name or category must match the query string. The comparison is case insensitive. If the query string is angel_of_death, it matches all names that begin with angel_of_death. However, if the query string is a phrase like angel of death, it matches to names starting with angelofdeath or names starting with angel_of_death.

By default, the results include both live and offline channels. To get only live channels set the live_only query parameter to true.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#search-channels)
 * 
 * @param {string} query The URI-encoded search string. For example, encode search strings like angel of death as angel%20of%20death. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `live_only` : ${type.boolean} : A Boolean value that determines whether the response includes only channels that are currently streaming live. Set to <strong>true</strong> to get only channels that are streaming live; otherwise, <strong>false</strong> to get live and offline channels. The default is <strong>false</strong>.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of channels that match the query. The list is empty if there are no matches.  |
 * | ___broadcaster_language | ${type.string}  | The ISO 639-1 two-letter language code of the language used by the broadcaster. For example, en for English. If the broadcaster uses a language not in the list of supported stream languages, the value is other.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___display_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___game_id | ${type.string}  | The ID of the game that the broadcaster is playing or last played.  |
 * | ___game_name | ${type.string}  | The name of the game that the broadcaster is playing or last played.  |
 * | ___id | ${type.string}  | An ID that uniquely identifies the channel (this is the broadcaster’s ID).  |
 * | ___is_live | ${type.boolean}  | A Boolean value that determines whether the broadcaster is streaming live. Is true if the broadcaster is streaming live; otherwise, false.  |
 * | ___tag_ids | ${type.array} of ${type.string}  | IMPORTANT As of February 28, 2023, this field is deprecated and returns only an empty array. If you use this field, please update your code to use the tags field.The list of tags that apply to the stream. The list contains IDs only when the channel is steaming live. For a list of possible tags, see List of All Tags. The list doesn’t include Category Tags.  |
 * | ___tags | ${type.array} of ${type.string}  | The tags applied to the channel.  |
 * | ___thumbnail_url | ${type.string}  | A URL to a thumbnail of the broadcaster’s profile image.  |
 * | ___title | ${type.string}  | The stream’s title. Is an empty string if the broadcaster didn’t set it.  |
 * | ___started_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster started streaming. The string is empty if the broadcaster is not streaming live.  |
 * @event_end
@func_end
 */
function twitch_search_search_channels(query,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_streams_get_stream_key
 * @desc Gets the channel’s stream key.

Requires a user access token that includes the channel:read:stream_key scope.

https://api.twitch.tv/helix/streams/key

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-stream-key)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the channel. The ID must match the user ID in the access token. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the channel’s stream key.  |
 * | ___stream_key | ${type.string}  | The channel’s stream key.  |
 * @event_end
@func_end
 */
function twitch_streams_get_stream_key(broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_streams_get_streams
 * @desc Gets a list of all streams. The list is in descending order by the number of viewers watching the stream. Because viewers come and go during a stream, it’s possible to find duplicate or missing streams in the list as you page through the results.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-streams)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `user_id` : ${type.string} : A user ID used to filter the list of streams. Returns only the streams of those users that are broadcasting. You may specify a maximum of 100 IDs. To specify multiple IDs, include the <em>user_id</em> parameter for each user. For example, <code class="highlighter-rouge">&amp;user_id=1234&amp;user_id=5678</code>.
 * - `user_login` : ${type.string} : A user login name used to filter the list of streams. Returns only the streams of those users that are broadcasting. You may specify a maximum of 100 login names. To specify multiple names, include the <em>user_login</em> parameter for each user. For example, <code class="highlighter-rouge">&amp;user_login=foo&amp;user_login=bar</code>.
 * - `game_id` : ${type.string} : A game (category) ID used to filter the list of streams. Returns only the streams that are broadcasting the game (category). You may specify a maximum of 100 IDs. To specify multiple IDs, include the <em>game_id</em> parameter for each game. For example, <code class="highlighter-rouge">&amp;game_id=9876&amp;game_id=5432</code>.
 * - `type` : ${type.string} : The type of stream to filter the list of streams by. Possible values are:<ul><li>all</li><li>live</li></ul>The default is <em>all</em>.
 * - `language` : ${type.string} : A language code used to filter the list of streams. Returns only streams that broadcast in the specified language. Specify the language using an ISO 639-1 two-letter language code or <em>other</em> if the broadcast uses a language not in the list of <a href="https://help.twitch.tv/s/article/languages-on-twitch#streamlang" target="_blank">supported stream languages</a>.<br><br>You may specify a maximum of 100 language codes. To specify multiple languages, include the <em>language</em> parameter for each language. For example, <code class="highlighter-rouge">&amp;language=de&amp;language=fr</code>.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `before` : ${type.string} : The cursor used to get the previous page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of streams.  |
 * | ___id | ${type.string}  | An ID that identifies the stream. You can use this ID later to look up the video on demand (VOD).  |
 * | ___user_id | ${type.string}  | The ID of the user that’s broadcasting the stream.  |
 * | ___user_login | ${type.string}  | The user’s login name.  |
 * | ___user_name | ${type.string}  | The user’s display name.  |
 * | ___game_id | ${type.string}  | The ID of the category or game being played.  |
 * | ___game_name | ${type.string}  | The name of the category or game being played.  |
 * | ___type | ${type.string}  | The type of stream. Possible values are:liveIf an error occurs, this field is set to an empty string.  |
 * | ___title | ${type.string}  | The stream’s title. Is an empty string if not set.  |
 * | ___tags | ${type.array} of ${type.string}  | The tags applied to the stream.  |
 * | ___viewer_count | ${type.number}  | The number of users watching the stream.  |
 * | ___started_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast began.  |
 * | ___language | ${type.string}  | The language that the stream uses. This is an ISO 639-1 two-letter language code or other if the stream uses a language not in the list of supported stream languages.  |
 * | ___thumbnail_url | ${type.string}  | A URL to an image of a frame from the last 5 minutes of the stream. Replace the width and height placeholders in the URL ({width}x{height}) with the size of the image you want, in pixels.  |
 * | ___tag_ids | ${type.array} of ${type.string}  | IMPORTANT As of February 28, 2023, this field is deprecated and returns only an empty array. If you use this field, please update your code to use the tags field.The list of tags that apply to the stream. The list contains IDs only when the channel is steaming live. For a list of possible tags, see List of All Tags. The list doesn’t include Category Tags.  |
 * | ___is_mature | ${type.boolean}  | A Boolean value that indicates whether the stream is meant for mature audiences.  |
 * | pagination | ${type.struct}  | The information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Set the request’s after or before query parameter to this value depending on whether you’re paging forwards or backwards.  |
 * @event_end
@func_end
 */
function twitch_streams_get_streams(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_streams_get_followed_streams
 * @desc Gets the list of broadcasters that the user follows and that are streaming live.

Requires a user access token that includes the user:read:follows scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-followed-streams)
 * 
 * @param {string} user_id The ID of the user whose list of followed streams you want to get. This ID must match the user ID in the access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 100.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of live streams of broadcasters that the specified user follows. The list is in descending order by the number of viewers watching the stream. Because viewers come and go during a stream, it’s possible to find duplicate or missing streams in the list as you page through the results. The list is empty if none of the followed broadcasters are streaming live.  |
 * | ___id | ${type.string}  | An ID that identifies the stream. You can use this ID later to look up the video on demand (VOD).  |
 * | ___user_id | ${type.string}  | The ID of the user that’s broadcasting the stream.  |
 * | ___user_login | ${type.string}  | The user’s login name.  |
 * | ___user_name | ${type.string}  | The user’s display name.  |
 * | ___game_id | ${type.string}  | The ID of the category or game being played.  |
 * | ___game_name | ${type.string}  | The ID of the category or game being played.  |
 * | ___type | ${type.string}  | The type of stream. Possible values are:liveIf an error occurs, this field is set to an empty string.  |
 * | ___title | ${type.string}  | The stream’s title. Is an empty string if not set.  |
 * | ___viewer_count | ${type.number}  | The number of users watching the stream.  |
 * | ___started_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast began.  |
 * | ___language | ${type.string}  | The language that the stream uses. This is an ISO 639-1 two-letter language code or other if the stream uses a language not in the list of supported stream languages.  |
 * | ___thumbnail_url | ${type.string}  | A URL to an image of a frame from the last 5 minutes of the stream. Replace the width and height placeholders in the URL ({width}x{height}) with the size of the image you want, in pixels.  |
 * | ___tag_ids | ${type.array} of ${type.string}  | IMPORTANT As of February 28, 2023, this field is deprecated and returns only an empty array. If you use this field, please update your code to use the tags field.The list of tags that apply to the stream. The list contains IDs only when the channel is steaming live. For a list of possible tags, see List of All Tags. The list doesn’t include Category Tags.  |
 * | ___tags | ${type.array} of ${type.string}  | The tags applied to the stream.  |
 * | ___is_mature | ${type.boolean}  | A Boolean value that indicates whether the stream is meant for mature audiences.  |
 * | pagination | ${type.struct}  | The information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Set the request’s after query parameter to this value.  |
 * @event_end
@func_end
 */
function twitch_streams_get_followed_streams(user_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_streams_create_stream_marker
 * @desc Adds a marker to a live stream. A marker is an arbitrary point in a live stream that the broadcaster or editor wants to mark, so they can return to that spot later to create video highlights (see Video Producer, Highlights in the Twitch UX).

You may not add markers:

Requires a user access token that includes the channel:manage:broadcast scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#create-stream-marker)
 * 
 * @param {string} user_id The ID of the broadcaster that’s streaming content. This ID must match the user ID in the access token or the user in the access token must be one of the broadcaster’s editors. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `description` : ${type.string} : A short description of the marker to help the user remember why they marked the location. The maximum length of the description is 140 characters.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single marker that you added.  |
 * | ___id | ${type.string}  | An ID that identifies this marker.  |
 * | ___created_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the user created the marker.  |
 * | ___position_seconds | ${type.number}  | The relative offset (in seconds) of the marker from the beginning of the stream.  |
 * | ___description | ${type.string}  | A description that the user gave the marker to help them remember why they marked the location.  |
 * @event_end
@func_end
 */
function twitch_streams_create_stream_marker(user_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_streams_get_stream_markers
 * @desc Gets a list of markers from the user’s most recent stream or from the specified VOD/video. A marker is an arbitrary point in a live stream that the broadcaster or editor marked, so they can return to that spot later to create video highlights (see Video Producer, Highlights in the Twitch UX).

Requires a user access token that includes the user:read:broadcast or channel:manage:broadcast scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-stream-markers)
 * 
 * @param {string} user_id A user ID. The request returns the markers from this user’s most recent video. This ID must match the user ID in the access token or the user in the access token must be one of the broadcaster’s editors.This parameter and the video_id query parameter are mutually exclusive. 
 * @param {string} video_id A video on demand (VOD)/video ID. The request returns the markers from this VOD/video. The user in the access token must own the video or the user must be one of the broadcaster’s editors.This parameter and the user_id query parameter are mutually exclusive. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `first` : ${type.string} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `before` : ${type.string} : The cursor used to get the previous page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of markers grouped by the user that created the marks.  |
 * | ___user_id | ${type.string}  | The ID of the user that created the marker.  |
 * | ___user_name | ${type.string}  | The user’s display name.  |
 * | ___user_login | ${type.string}  | The user’s login name.  |
 * | ___videos | ${type.array}  | A list of videos that contain markers. The list contains a single video.  |
 * | ___video_id | ${type.string}  | An ID that identifies this video.  |
 * | ___markers | ${type.array}  | The list of markers in this video. The list in ascending order by when the marker was created.  |
 * | ______id | ${type.string}  | An ID that identifies this marker.  |
 * | ______created_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the user created the marker.  |
 * | ______description | ${type.string}  | The description that the user gave the marker to help them remember why they marked the location. Is an empty string if the user didn’t provide one.  |
 * | ______position_seconds | ${type.number}  | The relative offset (in seconds) of the marker from the beginning of the stream.  |
 * | ______url | ${type.string}  | A URL that opens the video in Twitch Highlighter.  |
 * | pagination | ${type.struct}  | The information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Set the request’s after or before query parameter to this value depending on whether you’re paging forwards or backwards.  |
 * @event_end
@func_end
 */
function twitch_streams_get_stream_markers(user_id,video_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_subscriptions_get_broadcaster_subscriptions
 * @desc Gets a list of users that subscribe to the specified broadcaster.

Requires a user access token that includes the channel:read:subscriptions scope.

A Twitch extensions may use an app access token if the broadcaster has granted the channel:read:subscriptions scope from within the Twitch Extensions manager.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-broadcaster-subscriptions)
 * 
 * @param {string} broadcaster_id The broadcaster’s ID. This ID must match the user ID in the access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `user_id` : ${type.string} : Filters the list to include only the specified subscribers. To specify more than one subscriber, include this parameter for each subscriber. For example, <code class="highlighter-rouge">&amp;user_id=1234&amp;user_id=5678</code>. You may specify a maximum of 100 subscribers.
 * - `first` : ${type.string} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. Do not specify if you set the <em>user_id</em> query parameter. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 * - `before` : ${type.string} : The cursor used to get the previous page of results. Do not specify if you set the <em>user_id</em> query parameter. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users that subscribe to the broadcaster. The list is empty if the broadcaster has no subscribers.  |
 * | ___broadcaster_id | ${type.string}  | An ID that identifies the broadcaster.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___gifter_id | ${type.string}  | The ID of the user that gifted the subscription to the user. Is an empty string if is_gift is false.  |
 * | ___gifter_login | ${type.string}  | The gifter’s login name. Is an empty string if is_gift is false.  |
 * | ___gifter_name | ${type.string}  | The gifter’s display name. Is an empty string if is_gift is false.  |
 * | ___is_gift | ${type.boolean}  | A Boolean value that determines whether the subscription is a gift subscription. Is true if the subscription was gifted.  |
 * | ___plan_name | ${type.string}  | The name of the subscription.  |
 * | ___tier | ${type.string}  | The type of subscription. Possible values are:1000 &mdash; Tier 12000 &mdash; Tier 23000 &mdash; Tier 3  |
 * | ___user_id | ${type.string}  | An ID that identifies the subscribing user.  |
 * | ___user_name | ${type.string}  | The user’s display name.  |
 * | ___user_login | ${type.string}  | The user’s login name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next or previous page of results. Use the cursor to set the request’s after or before query parameter depending on whether you’re paging forwards or backwards.  |
 * | points | ${type.number}  | The current number of subscriber points earned by this broadcaster. Points are based on the subscription tier of each user that subscribes to this broadcaster. For example, a Tier 1 subscription is worth 1 point, Tier 2 is worth 2 points, and Tier 3 is worth 6 points. The number of points determines the number of emote slots that are unlocked for the broadcaster (see Subscriber Emote Slots).  |
 * | total | ${type.number}  | The total number of users that subscribe to this broadcaster.  |
 * @event_end
@func_end
 */
function twitch_subscriptions_get_broadcaster_subscriptions(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_subscriptions_check_user_subscription
 * @desc Checks whether the user subscribes to the broadcaster’s channel.

Requires a user access token that includes the user:read:subscriptions scope.

A Twitch extensions may use an app access token if the broadcaster has granted the user:read:subscriptions scope from within the Twitch Extensions manager.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#check-user-subscription)
 * 
 * @param {string} broadcaster_id The ID of a partner or affiliate broadcaster. 
 * @param {string} user_id The ID of the user that you’re checking to see whether they subscribe to the broadcaster in broadcaster_id. This ID must match the user ID in the access Token. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains a single object with information about the user’s subscription.  |
 * | ___broadcaster_id | ${type.string}  | An ID that identifies the broadcaster.  |
 * | ___broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | ___broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | ___gifter_id | ${type.string}  | The ID of the user that gifted the subscription. The object includes this field only if is_gift is true.  |
 * | ___gifter_login | ${type.string}  | The gifter’s login name. The object includes this field only if is_gift is true.  |
 * | ___gifter_name | ${type.string}  | The gifter’s display name. The object includes this field only if is_gift is true.  |
 * | ___is_gift | ${type.boolean}  | A Boolean value that determines whether the subscription is a gift subscription. Is true if the subscription was gifted.  |
 * | ___tier | ${type.string}  | The type of subscription. Possible values are:1000 &mdash; Tier 12000 &mdash; Tier 23000 &mdash; Tier 3  |
 * @event_end
@func_end
 */
function twitch_subscriptions_check_user_subscription(broadcaster_id,user_id,callback_success,callback_failed) {}


/**
 * @func twitch_tags_get_all_stream_tags
 * @desc IMPORTANT Twitch is moving from Twitch-defined tags to channel-defined tags. IMPORTANT As of February 28, 2023, this endpoint returns an empty array. On July 13, 2023, it will return a 410 response.

Gets a list of all stream tags that Twitch defines. The broadcaster may apply any of these to their channel except automatic tags. For an online list of the possible tags, see List of All Tags.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-all-stream-tags)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `tag_id` : ${type.string} : The ID of the tag to get. Used to filter the list of tags. To specify more than one tag, include the <em>tag_id</em> parameter for each tag to get. For example, <code class="highlighter-rouge">tag_id=1234&amp;tag_id=5678</code>. The maximum number of IDs you may specify is 100. Ignores invalid IDs but not duplicate IDs.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of stream tags that the broadcaster can apply to their channel.  |
 * | ___tag_id | ${type.string}  | An ID that identifies this tag.  |
 * | ___is_auto | ${type.boolean}  | A Boolean value that determines whether the tag is an automatic tag. An automatic tag is one that Twitch adds to the stream. Broadcasters may not add automatic tags to their channel. The value is true if the tag is an automatic tag; otherwise, false.  |
 * | ___localization_names | ${type.map[string,string]}  | A dictionary that contains the localized names of the tag. The key is in the form, &lt;locale&gt;-&lt;country/region&gt;. For example, en-us. The value is the localized name.  |
 * | ___localization_descriptions | ${type.map[string,string]}  | A dictionary that contains the localized descriptions of the tag. The key is in the form, &lt;locale&gt;-&lt;country/region&gt;. For example, en-us. The value is the localized description.  |
 * | pagination | ${type.struct}  | The information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | ___cursor | ${type.string}  | The cursor used to get the next page of results. Set the request’s after query parameter to this value to page forwards through the results.  |
 * @event_end
@func_end
 */
function twitch_tags_get_all_stream_tags(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_tags_get_stream_tags
 * @desc IMPORTANT Twitch is moving from Twitch-defined tags to channel-defined tags. IMPORTANT As of February 28, 2023, this endpoint returns an empty array. On July 13, 2023, it will return a 410 response. If you use this endpoint, please update your code to use Get Channel Information.

Gets the list of stream tags that the broadcaster or Twitch added to their channel.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-stream-tags)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose stream tags you want to get. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of stream tags. The list is empty if the broadcaster or Twitch hasn’t added tags to the broadcaster’s channel.  |
 * | ___tag_id | ${type.string}  | An ID that identifies this tag.  |
 * | ___is_auto | ${type.boolean}  | A Boolean value that determines whether the tag is an automatic tag. An automatic tag is one that Twitch adds to the stream. Broadcasters may not add automatic tags to their channel. The value is true if the tag is an automatic tag; otherwise, false.  |
 * | ___localization_names | ${type.map[string,string]}  | A dictionary that contains the localized names of the tag. The key is in the form, &lt;locale&gt;-&lt;coutry/region&gt;. For example, en-us. The value is the localized name.  |
 * | ___localization_descriptions | ${type.map[string,string]}  | A dictionary that contains the localized descriptions of the tag. The key is in the form, &lt;locale&gt;-&lt;coutry/region&gt;. For example, en-us. The value is the localized description.  |
 * @event_end
@func_end
 */
function twitch_tags_get_stream_tags(broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_teams_get_channel_teams
 * @desc Gets the list of Twitch teams that the broadcaster is a member of.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-channel-teams)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose teams you want to get. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of teams that the broadcaster is a member of. Returns an empty array if the broadcaster is not a member of a team.  |
 * | __broadcaster_id | ${type.string}  | An ID that identifies the broadcaster.  |
 * | __broadcaster_login | ${type.string}  | The broadcaster’s login name.  |
 * | __broadcaster_name | ${type.string}  | The broadcaster’s display name.  |
 * | __background_image_url | ${type.string}  | A URL to the team’s background image.  |
 * | __banner | ${type.string}  | A URL to the team’s banner.  |
 * | __created_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the team was created.  |
 * | __updated_at | ${type.string}  | The UTC date and time (in RFC3339 format) of the last time the team was updated.  |
 * | __info | ${type.string}  | The team’s description. The description may contain formatting such as Markdown, HTML, newline (\n) characters, etc.  |
 * | __thumbnail_url | ${type.string}  | A URL to a thumbnail image of the team’s logo.  |
 * | __team_name | ${type.string}  | The team’s name.  |
 * | __team_display_name | ${type.string}  | The team’s display name.  |
 * | __id | ${type.string}  | An ID that identifies the team.  |
 * @event_end
@func_end
 */
function twitch_teams_get_channel_teams(broadcaster_id,callback_success,callback_failed) {}


/**
 * @func twitch_teams_get_teams
 * @desc Gets information about the specified Twitch team. Read More

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-teams)
 * 
 * @param {string} name The name of the team to get. This parameter and the id parameter are mutually exclusive; you must specify the team’s name or ID but not both. 
 * @param {string} id The ID of the team to get. This parameter and the name parameter are mutually exclusive; you must specify the team’s name or ID but not both. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single team that you requested.  |
 * | __users | ${type.array}  | The list of team members.  |
 * | ___user_id | ${type.string}  | An ID that identifies the team member.  |
 * | ___user_login | ${type.string}  | The team member’s login name.  |
 * | ___user_name | ${type.string}  | The team member’s display name.  |
 * | __background_image_url | ${type.string}  | A URL to the team’s background image.  |
 * | __banner | ${type.string}  | A URL to the team’s banner.  |
 * | __created_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the team was created.  |
 * | __updated_at | ${type.string}  | The UTC date and time (in RFC3339 format) of the last time the team was updated.  |
 * | __info | ${type.string}  | The team’s description. The description may contain formatting such as Markdown, HTML, newline (\n) characters, etc.  |
 * | __thumbnail_url | ${type.string}  | A URL to a thumbnail image of the team’s logo.  |
 * | __team_name | ${type.string}  | The team’s name.  |
 * | __team_display_name | ${type.string}  | The team’s display name.  |
 * | __id | ${type.string}  | An ID that identifies the team.  |
 * @event_end
@func_end
 */
function twitch_teams_get_teams(name,id,callback_success,callback_failed) {}


/**
 * @func twitch_users_get_users
 * @desc Gets information about one or more users. 
You may look up users using their user ID, login name, or both but the sum total of the number of users you may look up is 100. For example, you may specify 50 IDs and 50 names or 100 IDs or names, but you cannot specify 100 IDs and 100 names. 
If you don’t specify IDs or login names, the request returns information about the user in the access token if you specify a user access token. 
To include the user’s verified email address in the response, you must use a user access token that includes the user:read:email scope.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-users)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `id` : ${type.string} : The ID of the user to get. To specify more than one user, include the <em>id</em> parameter for each user to get. For example, <code class="highlighter-rouge">id=1234&amp;id=5678</code>. The maximum number of IDs you may specify is 100.
 * - `login` : ${type.string} : The login name of the user to get. To specify more than one user, include the <em>login</em> parameter for each user to get. For example, <code class="highlighter-rouge">login=foo&amp;login=bar</code>. The maximum number of login names you may specify is 100.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users.  |
 * | ___id | ${type.string}  | An ID that identifies the user.  |
 * | ___login | ${type.string}  | The user’s login name.  |
 * | ___display_name | ${type.string}  | The user’s display name.  |
 * | ___type | ${type.string}  | The type of user. Possible values are: admin — Twitch administrator global_modstaff — Twitch staff"" — Normal user  |
 * | ___broadcaster_type | ${type.string}  | The type of broadcaster. Possible values are: affiliate — An affiliate broadcaster affiliate broadcasterpartner — A partner broadcaster partner broadcaster"" — A normal broadcaster  |
 * | ___description | ${type.string}  | The user’s description of their channel.  |
 * | ___profile_image_url | ${type.string}  | A URL to the user’s profile image.  |
 * | ___offline_image_url | ${type.string}  | A URL to the user’s offline image.  |
 * | ___view_count | ${type.number}  | The number of times the user’s channel has been viewed. NOTE: This field has been deprecated (see Get Users API endpoint – “view_count” deprecation). Any data in this field is not valid and should not be used.  |
 * | ___email | ${type.string}  | The user’s verified email address. The object includes this field only if the user access token includes the user:read:email scope. If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | ___created_at | ${type.string}  | The UTC date and time that the user’s account was created. The timestamp is in RFC3339 format.  |
 * @event_end
@func_end
 */
function twitch_users_get_users(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_users_update_user
 * @desc Updates the specified user’s information. The user ID in the OAuth token identifies the user whose information you want to update.

To include the user’s verified email address in the response, the user access token must also include the user:read:email scope.

Requires a user access token that includes the user:edit scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-user)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `description` : ${type.string} : The string to update the channel’s description to. The description is limited to a maximum of 300 characters.<br><br>To remove the description, specify this parameter but don’t set it’s value (for example, <code class="highlighter-rouge">?description=</code>).
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list contains the single user that you updated.  |
 * | __id | ${type.string}  | An ID that identifies the user.  |
 * | __login | ${type.string}  | The user's login name.  |
 * | __display_name | ${type.string}  | The user's display name.  |
 * | __type | ${type.string}  | The type of user. Possible values are:admin — Twitch administratorglobal_modstaff — Twitch staff"" — Normal user  |
 * | __broadcaster_type | ${type.string}  | The type of broadcaster. Possible values are:affiliate — An affiliate broadcasterpartner — A partner broadcaster"" — A normal broadcaster  |
 * | __description | ${type.string}  | The user's description of their channel.  |
 * | __profile_image_url | ${type.string}  | A URL to the user's profile image.  |
 * | __offline_image_url | ${type.string}  | A URL to the user's offline image.  |
 * | __view_count | ${type.number}  | The number of times the user's channel has been viewed.NOTE: This field has been deprecated (see Get Users API endpoint – "view_count" deprecation). Any data in this field is not valid and should not be used.  |
 * | __email | ${type.string}  | The user's verified email address. The object includes this field only if the user access token includes the user:read:email scope.If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | __created_at | ${type.string}  | The UTC date and time that the user's account was created. The timestamp is in RFC3339 format.  |
 * @event_end
@func_end
 */
function twitch_users_update_user(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_users_get_user_block_list
 * @desc Gets the list of users that the broadcaster has blocked. Read More

Requires a user access token that includes the user:read:blocked_users scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-user-block-list)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose list of blocked users you want to get. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of blocked users. The list is in descending order by when the user was blocked.  |
 * | __user_id | ${type.string}  | An ID that identifies the blocked user.  |
 * | __user_login | ${type.string}  | The blocked user’s login name.  |
 * | __display_name | ${type.string}  | The blocked user’s display name.  |
 * @event_end
@func_end
 */
function twitch_users_get_user_block_list(broadcaster_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_users_block_user
 * @desc Blocks the specified user from interacting with or having contact with the broadcaster. The user ID in the OAuth token identifies the broadcaster who is blocking the user.

To learn more about blocking users, see Block Other Users on Twitch.

Requires a user access token that includes the user:manage:blocked_users scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#block-user)
 * 
 * @param {string} target_user_id The ID of the user to block. The API ignores the request if the broadcaster has already blocked the user. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `source_context` : ${type.string} : The location where the harassment took place that is causing the brodcaster to block the user. Possible values are:<ul><li>chat</li><li>whisper</li></ul>.
 * - `reason` : ${type.string} : The reason that the broadcaster is blocking the user. Possible values are:<ul><li>harassment</li><li>spam</li><li>other</li></ul>
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_users_block_user(target_user_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_users_unblock_user
 * @desc Removes the user from the broadcaster’s list of blocked users. The user ID in the OAuth token identifies the broadcaster who’s removing the block.

Requires a user access token that includes the user:manage:blocked_users scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#unblock-user)
 * 
 * @param {string} target_user_id The ID of the user to remove from the broadcaster’s list of blocked users. The API ignores the request if the broadcaster hasn’t blocked the user. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_users_unblock_user(target_user_id,callback_success,callback_failed) {}


/**
 * @func twitch_users_get_user_extensions
 * @desc Gets a list of all extensions (both active and inactive) that the broadcaster has installed. The user ID in the access token identifies the broadcaster.

Requires a user access token that includes the user:read:broadcast or user:edit:broadcast scope. To include inactive extensions, you must include the user:edit:broadcast scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-user-extensions)
 * 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of extensions that the user has installed.  |
 * | __id | ${type.string}  | An ID that identifies the extension.  |
 * | __version | ${type.string}  | The extension's version.  |
 * | __name | ${type.string}  | The extension's name.  |
 * | __can_activate | ${type.boolean}  | A Boolean value that determines whether the extension is configured and can be activated. Is true if the extension is configured and can be activated.  |
 * | __type | ${type.array} of ${type.string}  | The extension types that you can activate for this extension. Possible values are:componentmobileoverlaypanel  |
 * @event_end
@func_end
 */
function twitch_users_get_user_extensions(callback_success,callback_failed) {}


/**
 * @func twitch_users_get_user_active_extensions
 * @desc Gets the active extensions that the broadcaster has installed for each configuration.

NOTE: To include extensions that you have under development, you must specify a user access token that includes the user:read:broadcast or user:edit:broadcast scope.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-user-active-extensions)
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `user_id` : ${type.string} : The ID of the broadcaster whose active extensions you want to get.<br><br>This parameter is required if you specify an app access token and is optional if you specify a user access token. If you specify a user access token and don’t specify this parameter, the API uses the user ID from the access token.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.struct}  | The active extensions that the broadcaster has installed.  |
 * | __panel | ${type.map[string]struct}  | A dictionary that contains the data for a panel extension. The dictionary’s key is a sequential number beginning with 1. The following fields contain the panel’s data for each key.  |
 * | ___active | ${type.boolean}  | A Boolean value that determines the extension’s activation state. If false, the user has not configured this panel extension.  |
 * | ___id | ${type.string}  | An ID that identifies the extension.  |
 * | ___version | ${type.string}  | The extension’s version.  |
 * | ___name | ${type.string}  | The extension’s name.  |
 * | __overlay | ${type.map[string]struct}  | A dictionary that contains the data for a video-overlay extension. The dictionary’s key is a sequential number beginning with 1. The following fields contain the overlay’s data for each key.  |
 * | ___active | ${type.boolean}  | A Boolean value that determines the extension’s activation state. If false, the user has not configured this overlay extension.  |
 * | ___id | ${type.string}  | An ID that identifies the extension.  |
 * | ___version | ${type.string}  | The extension’s version.  |
 * | ___name | ${type.string}  | The extension’s name.  |
 * | __component | ${type.map[string]struct}  | A dictionary that contains the data for a video-component extension. The dictionary’s key is a sequential number beginning with 1. The following fields contain the component’s data for each key.  |
 * | ___active | ${type.boolean}  | A Boolean value that determines the extension’s activation state. If false, the user has not configured this component extension.  |
 * | ___id | ${type.string}  | An ID that identifies the extension.  |
 * | ___version | ${type.string}  | The extension’s version.  |
 * | ___name | ${type.string}  | The extension’s name.  |
 * | ___x | ${type.number}  | The x-coordinate where the extension is placed.  |
 * | ___y | ${type.number}  | The y-coordinate where the extension is placed.  |
 * @event_end
@func_end
 */
function twitch_users_get_user_active_extensions(optionals,callback_success,callback_failed) {}


/**
 * @func twitch_users_update_user_extensions
 * @desc Updates an installed extension’s information. You can update the extension’s activation state, ID, and version number. The user ID in the access token identifies the broadcaster whose extensions you’re updating.

NOTE: If you try to activate an extension under multiple extension types, the last write wins (and there is no guarantee of write order).

Requires a user access token that includes the user:edit:broadcast scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#update-user-extensions)
 * 
 * @param {map[string]string} data The extensions to update. The data field is a dictionary of extension types. The dictionary’s possible keys are: panel, overlay, or component. The key’s value is a dictionary of extensions.For the extension’s dictionary, the key is a sequential number beginning with 1. For panel and overlay extensions, the key’s value is an object that contains the following fields: active (true/false), id (the extension’s ID), and version (the extension’s version).For component extensions, the key’s value includes the above fields plus the x and y fields, which identify the coordinate where the extension is placed. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.struct}  | The extensions that the broadcaster updated.  |
 * | __panel | ${type.map[string]struct}  | A dictionary that contains the data for a panel extension. The dictionary’s key is a sequential number beginning with 1. The following fields contain the panel’s data for each key.  |
 * | ___active | ${type.boolean}  | A Boolean value that determines the extension’s activation state. If false, the user has not configured a panel extension.  |
 * | ___id | ${type.string}  | An ID that identifies the extension.  |
 * | ___version | ${type.string}  | The extension’s version.  |
 * | ___name | ${type.string}  | The extension’s name.  |
 * | __overlay | ${type.map[string]struct}  | A dictionary that contains the data for a video-overlay extension. The dictionary’s key is a sequential number beginning with 1. The following fields contain the overlay’s data for each key.  |
 * | ___active | ${type.boolean}  | A Boolean value that determines the extension’s activation state. If false, the user has not configured an overlay extension.  |
 * | ___id | ${type.string}  | An ID that identifies the extension.  |
 * | ___version | ${type.string}  | The extension’s version.  |
 * | ___name | ${type.string}  | The extension’s name.  |
 * | __component | ${type.map[string]struct}  | A dictionary that contains the data for a video-component extension. The dictionary’s key is a sequential number beginning with 1. The following fields contain the component’s data for each key.  |
 * | ___active | ${type.boolean}  | A Boolean value that determines the extension’s activation state. If false, the user has not configured a component extension.  |
 * | ___id | ${type.string}  | An ID that identifies the extension.  |
 * | ___version | ${type.string}  | The extension’s version.  |
 * | ___name | ${type.string}  | The extension’s name.  |
 * | ___x | ${type.number}  | The x-coordinate where the extension is placed.  |
 * | ___y | ${type.number}  | The y-coordinate where the extension is placed.  |
 * @event_end
@func_end
 */
function twitch_users_update_user_extensions(data,callback_success,callback_failed) {}


/**
 * @func twitch_videos_get_videos
 * @desc Gets information about one or more published videos. You may get videos by ID, by user, or by game/category.

You may apply several filters to get a subset of the videos. The filters are applied as an AND operation to each video. For example, if language is set to ‘de’ and game_id is set to 21779, the response includes only videos that show playing League of Legends by users that stream in German. The filters apply only if you get videos by user ID or game ID.

Requires an app access token or user access token.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#get-videos)
 * 
 * @param {string} id A list of IDs that identify the videos you want to get. To get more than one video, include this parameter for each video you want to get. For example, id=1234&amp;id=5678. You may specify a maximum of 100 IDs. The endpoint ignores duplicate IDs and IDs that weren't found (if there's at least one valid ID).The id, user_id, and game_id parameters are mutually exclusive. 
 * @param {string} user_id The ID of the user whose list of videos you want to get.The id, user_id, and game_id parameters are mutually exclusive. 
 * @param {string} game_id A category or game ID. The response contains a maximum of 500 videos that show this content. To get category/game IDs, use the Search Categories endpoint.The id, user_id, and game_id parameters are mutually exclusive. 
 * @param {struct} optionals The optional parameters to be passed into the function:

 * - `language` : ${type.string} : A filter used to filter the list of videos by the language that the video owner broadcasts in. For example, to get videos that were broadcast in German, set this parameter to the ISO 639-1 two-letter code for German (i.e., DE). For a list of supported languages, see <a href="https://help.twitch.tv/s/article/languages-on-twitch#streamlang">Supported Stream Language</a>. If the language is not supported, use “other.”<br><br>Specify this parameter only if you specify the <em>game_id</em> query parameter.
 * - `period` : ${type.string} : A filter used to filter the list of videos by when they were published. For example, videos published in the last week. Possible values are:<ul><li>all</li><li>day</li><li>month</li><li>week</li></ul>The default is "all," which returns videos published in all periods.<br><br>Specify this parameter only if you specify the <em>game_id</em> or <em>user_id</em> query parameter.
 * - `sort` : ${type.string} : The order to sort the returned videos in. Possible values are:<ul><li>time — Sort the results in descending order by when they were created (i.e., latest video first).</li><li>trending — Sort the results in descending order by biggest gains in viewership (i.e., highest trending video first).</li><li>views — Sort the results in descending order by most views (i.e., highest number of views first).</li></ul>The default is "time."<br><br>Specify this parameter only if you specify the <em>game_id</em> or <em>user_id</em> query parameter.
 * - `type` : ${type.string} : A filter used to filter the list of videos by the video's type. Possible case-sensitive values are:<ul><li>all</li><li>archive — On-demand videos (VODs) of past streams.</li><li>highlight — Highlight reels of past streams.</li><li>upload — External videos that the broadcaster uploaded using the Video Producer.</li></ul>The default is "all," which returns all video types.<br><br>Specify this parameter only if you specify the <em>game_id</em> or <em>user_id</em> query parameter.
 * - `first` : ${type.string} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.<br><br>Specify this parameter only if you specify the <em>game_id</em> or <em>user_id</em> query parameter.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a><br><br>Specify this parameter only if you specify the <em>user_id</em> query parameter.
 * - `before` : ${type.string} : The cursor used to get the previous page of results. The <strong>Pagination</strong> object in the response contains the cursor’s value. <a href="/docs/api/guide#pagination">Read More</a><br><br>Specify this parameter only if you specify the <em>user_id</em> query parameter.
 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of published videos that match the filter criteria.  |
 * | __id | ${type.string}  | An ID that identifies the video.  |
 * | __stream_id | ${type.string}  | The ID of the stream that the video originated from if the video's type is "archive;" otherwise, null.  |
 * | __user_id | ${type.string}  | The ID of the broadcaster that owns the video.  |
 * | __user_login | ${type.string}  | The broadcaster's login name.  |
 * | __user_name | ${type.string}  | The broadcaster's display name.  |
 * | __title | ${type.string}  | The video's title.  |
 * | __description | ${type.string}  | The video's description.  |
 * | __created_at | ${type.string}  | The date and time, in UTC, of when the video was created. The timestamp is in RFC3339 format.  |
 * | __published_at | ${type.string}  | The date and time, in UTC, of when the video was published. The timestamp is in RFC3339 format.  |
 * | __url | ${type.string}  | The video's URL.  |
 * | __thumbnail_url | ${type.string}  | A URL to a thumbnail image of the video. Before using the URL, you must replace the %{width} and %{height} placeholders with the width and height of the thumbnail you want returned. Due to current limitations, ${width} must be 320 and ${height} must be 180.  |
 * | __viewable | ${type.string}  | The video's viewable state. Always set to public.  |
 * | __view_count | ${type.number}  | The number of times that users have watched the video.  |
 * | __language | ${type.string}  | The ISO 639-1 two-letter language code that the video was broadcast in. For example, the language code is DE if the video was broadcast in German. For a list of supported languages, see Supported Stream Language. The language value is "other" if the video was broadcast in a language not in the list of supported languages.  |
 * | __type | ${type.string}  | The video's type. Possible values are:archive — An on-demand video (VOD) of one of the broadcaster's past streams.highlight — A highlight reel of one of the broadcaster's past streams. See Creating Highlights.upload — A video that the broadcaster uploaded to their video library. See Upload under Video Producer.  |
 * | __duration | ${type.string}  | The video's length in ISO 8601 duration format. For example, 3m21s represents 3 minutes, 21 seconds.  |
 * | __muted_segments | ${type.array}  | The segments that Twitch Audio Recognition muted; otherwise, null.  |
 * | ___duration | ${type.number}  | The duration of the muted segment, in seconds.  |
 * | ___offset | ${type.number}  | The offset, in seconds, from the beginning of the video to where the muted segment begins.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. Read More  |
 * | __cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's after or before query parameter depending on whether you're paging forwards or backwards through the results.  |
 * @event_end
@func_end
 */
function twitch_videos_get_videos(id,user_id,game_id,optionals,callback_success,callback_failed) {}


/**
 * @func twitch_videos_delete_videos
 * @desc Deletes one or more videos. You may delete past broadcasts, highlights, or uploads.

Requires a user access token that includes the channel:manage:videos scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#delete-videos)
 * 
 * @param {string} id The list of videos to delete. To specify more than one video, include the id parameter for each video to delete. For example, id=1234&amp;id=5678. You can delete a maximum of 5 videos per request. Ignores invalid video IDs.If the user doesn’t have permission to delete one of the videos in the list, none of the videos are deleted. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
 *@event callback_success
 * @desc This is placed before the table
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array} of ${type.string}  | The list of IDs of the videos that were deleted.  |
 * @event_end
@func_end
 */
function twitch_videos_delete_videos(id,callback_success,callback_failed) {}


/**
 * @func twitch_whispers_send_whisper
 * @desc Sends a whisper message to the specified user.

NOTE: The user sending the whisper must have a verified phone number (see the Phone Number setting in your Security and Privacy settings).

NOTE: The API may silently drop whispers that it suspects of violating Twitch policies. (The API does not indicate that it dropped the whisper; it returns a 204 status code as if it succeeded.)

Rate Limits: You may whisper to a maximum of 40 unique recipients per day. Within the per day limit, you may whisper a maximum of 3 whispers per second and a maximum of 100 whispers per minute.

Requires a user access token that includes the user:manage:whispers scope.

Oficial page referece: [click here](https://dev.twitch.tv/docs/api/reference/#send-whisper)
 * 
 * @param {string} from_user_id The ID of the user sending the whisper. This user must have a verified phone number. This ID must match the user ID in the user access token. 
 * @param {string} to_user_id The ID of the user to receive the whisper. 
 * @param {string} message The whisper message to send. The message must not be empty.The maximum message lengths are:500 characters if the user you're sending the message to hasn't whispered you before.10,000 characters if the user you're sending the message to has whispered you before.Messages that exceed the maximum length are truncated. 
 * @param {function} callback_success Triggered if request succeed 
 * @param {function} callback_failed Triggered if request failed 
@func_end
 */
function twitch_whispers_send_whisper(from_user_id,to_user_id,message,callback_success,callback_failed) {}


/**
 * @module twitch_ref
  * @title Twitch Reference
 * @desc > **Twitch:** N/A
 * 
 * <br />
 * 
 * This module contain all the Twitch Functions
 * 
 * @section_func
 * @ref twitch_auth
 * @ref twitch_auth_exchange_code
 * @ref twitch_auth_app_token
 * @ref twitch_auth_refresh_token
 * @ref twitch_auth_from_cache
 * @ref twitch_auth_signout
 * @ref twitch_bits_get_cheermotes
 * @ref twitch_bits_get_extension_transactions
 * @ref twitch_channels_get_channel_information
 * @ref twitch_channels_modify_channel_information
 * @ref twitch_channels_get_channel_editors
 * @ref twitch_channels_get_followed_channels
 * @ref twitch_channels_get_channel_followers
 * @ref twitch_channel_points_create_custom_rewards
 * @ref twitch_channel_points_delete_custom_reward
 * @ref twitch_channel_points_get_custom_reward
 * @ref twitch_channel_points_get_custom_reward_redemption
 * @ref twitch_channel_points_update_custom_reward
 * @ref twitch_channel_points_update_redemption_status
 * @ref twitch_charity_get_charity_campaign
 * @ref twitch_charity_get_charity_campaign_donations
 * @ref twitch_chat_get_chatters
 * @ref twitch_chat_get_channel_emotes
 * @ref twitch_chat_get_global_emotes
 * @ref twitch_chat_get_emote_sets
 * @ref twitch_chat_get_channel_chat_badges
 * @ref twitch_chat_get_global_chat_badges
 * @ref twitch_chat_get_chat_settings
 * @ref twitch_chat_get_user_emotes
 * @ref twitch_chat_update_chat_settings
 * @ref twitch_chat_send_chat_announcement
 * @ref twitch_chat_send_a_shoutout
 * @ref twitch_chat_send_chat_message
 * @ref twitch_chat_get_user_chat_color
 * @ref twitch_chat_update_user_chat_color
 * @ref twitch_clips_create_clip
 * @ref twitch_clips_get_clips
 * @ref twitch_conduits_get_conduits
 * @ref twitch_conduits_create_conduits
 * @ref twitch_conduits_update_conduits
 * @ref twitch_conduits_delete_conduit
 * @ref twitch_conduits_get_conduit_shards
 * @ref twitch_conduits_update_conduit_shards
 * @ref twitch_ccls_get_content_classification_labels
 * @ref twitch_entitlements_get_drops_entitlements
 * @ref twitch_entitlements_update_drops_entitlements
 * @ref twitch_extensions_get_extension_configuration_segment
 * @ref twitch_extensions_set_extension_configuration_segment
 * @ref twitch_extensions_set_extension_required_configuration
 * @ref twitch_extensions_send_extension_pubsub_message
 * @ref twitch_extensions_get_extension_live_channels
 * @ref twitch_extensions_get_extension_secrets
 * @ref twitch_extensions_create_extension_secret
 * @ref twitch_extensions_send_extension_chat_message
 * @ref twitch_extensions_get_extensions
 * @ref twitch_extensions_get_released_extensions
 * @ref twitch_extensions_get_extension_bits_products
 * @ref twitch_extensions_update_extension_bits_product
 * @ref twitch_eventsub_create_eventsub_subscription
 * @ref twitch_eventsub_delete_eventsub_subscription
 * @ref twitch_eventsub_get_eventsub_subscriptions
 * @ref twitch_games_get_top_games
 * @ref twitch_games_get_games
 * @ref twitch_goals_get_creator_goals
 * @ref twitch_guest_star_get_channel_guest_star_settings
 * @ref twitch_guest_star_update_channel_guest_star_settings
 * @ref twitch_guest_star_get_guest_star_session
 * @ref twitch_guest_star_create_guest_star_session
 * @ref twitch_guest_star_end_guest_star_session
 * @ref twitch_guest_star_get_guest_star_invites
 * @ref twitch_guest_star_send_guest_star_invite
 * @ref twitch_guest_star_delete_guest_star_invite
 * @ref twitch_guest_star_assign_guest_star_slot
 * @ref twitch_guest_star_update_guest_star_slot
 * @ref twitch_guest_star_delete_guest_star_slot
 * @ref twitch_guest_star_update_guest_star_slot_settings
 * @ref twitch_hype_train_get_hype_train_events
 * @ref twitch_moderation_check_automod_status
 * @ref twitch_moderation_manage_held_automod_messages
 * @ref twitch_moderation_get_automod_settings
 * @ref twitch_moderation_update_automod_settings
 * @ref twitch_moderation_get_banned_users
 * @ref twitch_moderation_ban_user
 * @ref twitch_moderation_unban_user
 * @ref twitch_moderation_get_unban_requests
 * @ref twitch_moderation_resolve_unban_requests
 * @ref twitch_moderation_get_blocked_terms
 * @ref twitch_moderation_add_blocked_term
 * @ref twitch_moderation_remove_blocked_term
 * @ref twitch_moderation_delete_chat_messages
 * @ref twitch_moderation_get_moderated_channels
 * @ref twitch_moderation_get_moderators
 * @ref twitch_moderation_add_channel_moderator
 * @ref twitch_moderation_remove_channel_moderator
 * @ref twitch_moderation_get_vips
 * @ref twitch_moderation_add_channel_vip
 * @ref twitch_moderation_remove_channel_vip
 * @ref twitch_moderation_update_shield_mode_status
 * @ref twitch_moderation_get_shield_mode_status
 * @ref twitch_polls_get_polls
 * @ref twitch_polls_create_poll
 * @ref twitch_polls_end_poll
 * @ref twitch_predictions_get_predictions
 * @ref twitch_predictions_create_prediction
 * @ref twitch_predictions_end_prediction
 * @ref twitch_raids_start_a_raid
 * @ref twitch_raids_cancel_a_raid
 * @ref twitch_schedule_get_channel_stream_schedule
 * @ref twitch_schedule_get_channel_icalendar
 * @ref twitch_schedule_update_channel_stream_schedule
 * @ref twitch_schedule_create_channel_stream_schedule_segment
 * @ref twitch_schedule_update_channel_stream_schedule_segment
 * @ref twitch_schedule_delete_channel_stream_schedule_segment
 * @ref twitch_search_search_categories
 * @ref twitch_search_search_channels
 * @ref twitch_streams_get_stream_key
 * @ref twitch_streams_get_streams
 * @ref twitch_streams_get_followed_streams
 * @ref twitch_streams_create_stream_marker
 * @ref twitch_streams_get_stream_markers
 * @ref twitch_subscriptions_get_broadcaster_subscriptions
 * @ref twitch_subscriptions_check_user_subscription
 * @ref twitch_tags_get_all_stream_tags
 * @ref twitch_tags_get_stream_tags
 * @ref twitch_teams_get_channel_teams
 * @ref twitch_teams_get_teams
 * @ref twitch_users_get_users
 * @ref twitch_users_update_user
 * @ref twitch_users_get_user_block_list
 * @ref twitch_users_block_user
 * @ref twitch_users_unblock_user
 * @ref twitch_users_get_user_extensions
 * @ref twitch_users_get_user_active_extensions
 * @ref twitch_users_update_user_extensions
 * @ref twitch_videos_get_videos
 * @ref twitch_videos_delete_videos
 * @ref twitch_whispers_send_whisper
 * @section_end
 * 
 * @module_end
 */
