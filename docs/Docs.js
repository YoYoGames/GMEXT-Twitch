// Functions

/**
 * @func twitch_ads_start_commercial
 * @desc **Twitch Endpoint:** [Start Commercial](https://dev.twitch.tv/docs/api/reference/#start-commercial)
 * 
 * This function starts a commercial on the specified channel.
 * 
 * [[Note: Only partners and affiliates may run commercials and they must be streaming live at the time.]]
 * 
 * [[Note: Only the broadcaster may start a commercial; the broadcaster's editors and moderators may not start commercials on behalf of the broadcaster.]]
 * 
 * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the `TWITCH_SCOPE_CHANNEL_EDIT_COMMERCIAL` scope.
 * 
 * @param {string} broadcaster_id The ID of the partner or affiliate broadcaster that wants to run the commercial. This ID must match the user ID found in the OAuth token.
 * @param {string} length The length of the commercial you requested. If you request a commercial that's longer than 180 seconds, the API uses 180 seconds.
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * 
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | ------ | ---- | ----------- |
 * | data | ${type.array} of ${type.struct} | An array that contains a single struct with the status of your start commercial request. |
 * | &nbsp;├──&nbsp;length | ${type.real} | The length of the commercial you requested. If you request a commercial that's longer than 180 seconds, the API uses 180 seconds. |
 * | &nbsp;├──&nbsp;message | ${type.string} | A message that indicates whether Twitch was able to serve an ad. |
 * | &nbsp;└──&nbsp;retry_after | ${type.real} | The number of seconds you must wait before running another commercial. |
 * 
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_ads_start_commercial(broadcaster_id, length, callback_success, callback_failed) {}


/**
 * @func twitch_ads_get_ad_schedule
 * @desc **Twitch Endpoint:** [Get Ad Schedule](https://dev.twitch.tv/docs/api/reference/#get-ad-schedule)
 * 
 * This function returns ad schedule related information, including snooze, when the last ad was run, when the next ad is scheduled, and if the channel is currently in pre-roll free time. Note that a new ad cannot be run until 8 minutes after running a previous ad.
 * 
 * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_READ_ADS`. The `user_id` in the user access token must match the `broadcaster_id`.
 * 
 * @param {string} broadcaster_id Provided `broadcaster_id` must match the `user_id` in the auth token.
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * 
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | ------ | ---- | ----------- |
 * | data | ${type.array} of ${type.struct} | A list that contains information related to the channel's ad schedule.|
 * | &nbsp;├──&nbsp;snooze_count | ${type.real} | The number of snoozes available for the broadcaster.|
 * | &nbsp;├──&nbsp;snooze_refresh_at | ${type.string} | The UTC timestamp when the broadcaster will gain an additional snooze, in RFC3339 format.|
 * | &nbsp;├──&nbsp;next_ad_at | ${type.string} | The UTC timestamp of the broadcaster's next scheduled ad, in RFC3339 format. Empty if the channel has no ad scheduled or is not live.|
 * | &nbsp;├──&nbsp;duration | ${type.real} | The length in seconds of the scheduled upcoming ad break.|
 * | &nbsp;├──&nbsp;last_ad_at | ${type.string} | The UTC timestamp of the broadcaster's last ad-break, in RFC3339 format. Empty if the channel has not run an ad or is not live.|
 * | &nbsp;└──&nbsp;preroll_free_time | ${type.real} | The amount of pre-roll free time remaining for the channel in seconds. Returns 0 if they are currently not pre-roll free.|
 * 
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_ads_get_ad_schedule(broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_ads_snooze_next_ad
 * @desc **Twitch Endpoint:** [Snooze Next Ad](https://dev.twitch.tv/docs/api/reference/#snooze-next-ad)
 * 
 * If available, pushes back the timestamp of the upcoming automatic mid-roll ad by 5 minutes. This endpoint duplicates the snooze functionality in the creator dashboard's Ads Manager.
 * 
 * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_ADS`. The `user_id` in the user access token must match the `broadcaster_id`.
 * 
 * @param {string} broadcaster_id Provided `broadcaster_id` must match the `user_id` in the auth token.
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * 
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | ------ | ---- | ----------- |
 * | data | ${type.array} of ${type.struct} | A list that contains information about the channel's snoozes and next upcoming ad after successfully snoozing.|
 * | &nbsp;├──&nbsp;snooze_count | ${type.real} | The number of snoozes available for the broadcaster.|
 * | &nbsp;├──&nbsp;snooze_refresh_at | ${type.string} | The UTC timestamp when the broadcaster will gain an additional snooze, in RFC3339 format.|
 * | &nbsp;└──&nbsp;next_ad_at | ${type.string} | The UTC timestamp of the broadcaster's next scheduled ad, in RFC3339 format.|
 * 
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_ads_snooze_next_ad(broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_analytics_get_extension_analytics
 * @desc **Twitch Endpoint:** [Get Extension Analytics](https://dev.twitch.tv/docs/api/reference/#get-extension-analytics)
 * 
 * Gets an analytics report for one or more extensions. The response contains the URLs used to download the reports (CSV files). [Learn More](https://dev.twitch.tv/docs/insights)
 * 
 * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_ANALYTICS_READ_EXTENSIONS`.
 * 
 * @param {struct} optionals
 * 
 * - extension_id : ${type.string} : The extension's client ID. If specified, the response contains a report for the specified extension. If not specified, the response includes a report for each extension that the authenticated user owns.
 * - type : ${type.string} : The type of analytics report to get. Possible values are:
 * 
 *   * `"overview_v2"`
 * 
 * - started_at : ${type.string} : The reporting window's start date, in RFC3339 format. Set the time portion to zeroes (for example, `"2021-10-22T00:00:00Z"`).
 * 
 *   The start date must be on or after January 31, 2018. If you specify an earlier date, the API ignores it and uses January 31, 2018. If you specify a start date, you must specify an end date. If you don't specify a start and end date, the report includes all available data since January 31, 2018.
 * 
 *   The report contains one row of data for each day in the reporting window.
 * 
 * - ended_at : ${type.string} : The reporting window's end date, in RFC3339 format. Set the time portion to zeroes (for example, `"2021-10-27T00:00:00Z"`). The report is inclusive of the end date.
 * 
 *   Specify an end date only if you provide a start date. Because it can take up to two days for the data to be available, you must specify an end date that's earlier than today minus one to two days. If not, the API ignores your end date and uses an end date that is today minus one to two days.
 * 
 * - first : ${type.string} : The maximum number of report URLs to return per page in the response. The minimum page size is 1 URL per page and the maximum is 100 URLs per page. The default is 20.
 * 
 *   **NOTE**: While you may specify a maximum value of 100, the response will contain at most 20 URLs per page.
 * 
 * - after : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 *   This parameter is ignored if the `extension_id` parameter is set.
 * 
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | ------ | ---- | ----------- |
 * | data | ${type.array} of ${type.struct} | A list of reports. The reports are returned in no particular order; however, the data within each report is in ascending order by date (newest first). The report contains one row of data per day of the reporting window; the report contains rows for only those days that the extension was used. The array is empty if there are no reports. |
 * | &nbsp;├──&nbsp;extension_id | ${type.string} | An ID that identifies the extension that the report was generated for. |
 * | &nbsp;├──&nbsp;URL | ${type.string} | The URL that you use to download the report. The URL is valid for 5 minutes. |
 * | &nbsp;├──&nbsp;type | ${type.string} | The type of report. |
 * | &nbsp;├──&nbsp;date_range | ${type.struct} | The reporting window's start and end dates, in RFC3339 format. |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;started_at | ${type.string} | The reporting window's start date. |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;ended_at | ${type.string} | The reporting window's end date. |
 * | &nbsp;└──&nbsp;pagination | ${type.struct} | Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;cursor | ${type.string} | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter. |
 * 
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * 
 * @func_end
 */
function twitch_analytics_get_extension_analytics() {}


/**
 * @func twitch_analytics_get_game_analytics
 * @desc **Twitch Endpoint:** [Get Game Analytics](https://dev.twitch.tv/docs/api/reference/#get-game-analytics)
 * 
 * This function gets an analytics report for one or more games. The response contains the URLs used to download the reports (CSV files). [Learn more](https://dev.twitch.tv/docs/insights)
 * 
 * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_ANALYTICS_READ_GAMES`.
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - game_id : ${type.string} : The game's client ID. If specified, the response contains a report for the specified game. If not specified, the response includes a report for each of the authenticated user's games.
 * - type : ${type.string} : The type of analytics report to get. Possible values are:
 * 
 *   * `"overview_v2"`
 * 
 * - started_at : ${type.string} : The reporting window's start date, in RFC3339 format. Set the time portion to zeroes (for example, `"2021-10-22T00:00:00Z"`). If you specify a start date, you must specify an end date.
 * 
 *   The start date must be within one year of today's date. If you specify an earlier date, the API ignores it and uses a date that's one year prior to today's date. If you don't specify a start and end date, the report includes all available data for the last 365 days from today.
 * 
 *   The report contains one row of data for each day in the reporting window.
 * 
 * - ended_at : ${type.string} : The reporting window's end date, in RFC3339 format. Set the time portion to zeroes (for example, 2021-10-22T00:00:00Z). The report is inclusive of the end date.
 *   
 *   Specify an end date only if you provide a start date. Because it can take up to two days for the data to be available, you must specify an end date that's earlier than today minus one to two days. If not, the API ignores your end date and uses an end date that is today minus one to two days.
 *   
 * - first : ${type.real} : The maximum number of report URLs to return per page in the response. The minimum page size is 1 URL per page and the maximum is 100 URLs per page. The default is 20.
 * 
 *   **NOTE**: While you may specify a maximum value of 100, the response will contain at most 20 URLs per page.
 * 
 * - after : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 *   
 *   This parameter is ignored if `game_id` parameter is set.
 * 
 * @func_end
 */
function twitch_analytics_get_game_analytics() {}


/**
 * 
 */

/**
 * @func twitch_auth
 * @desc **Twitch Endpoint:** N / A
 * 
 * This function authenticates with Twitch through a web browser.
 * 
 * See: [Authentication](https://dev.twitch.tv/docs/authentication/)
 * 
 * @param {array[constant.TWITCH_SCOPE]} scopes The APIs that you're calling identify the scopes you must list.
 * @param {boolean} [force_verify] Set to `true` to force the user to re-authorize your app's access to their resources. The default is `false`.
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * 
 * @event callback_success
 * @desc These members are returned in the success callback: 
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the user.  |
 * | &nbsp;├──&nbsp;login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;display_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The type of user. Possible values are: `"admin"` — Twitch administrator, `"global_mod"`, `"staff"` — Twitch staff, `""` — Normal user  |
 * | &nbsp;├──&nbsp;broadcaster_type | ${type.string}  | The type of broadcaster. Possible values are: `"affiliate"` — An affiliate broadcaster [affiliate broadcaster](https://help.twitch.tv/s/article/joining-the-affiliate-program?language=en_US), `"partner"` — A partner broadcaster [partner broadcaster](https://help.twitch.tv/s/article/partner-program-overview), `""` — A normal broadcaster  |
 * | &nbsp;├──&nbsp;description | ${type.string}  | The user's description of their channel.  |
 * | &nbsp;├──&nbsp;profile_image_url | ${type.string}  | A URL to the user's profile image.  |
 * | &nbsp;├──&nbsp;offline_image_url | ${type.string}  | A URL to the user's offline image.  |
 * | &nbsp;├──&nbsp;view_count | ${type.number}  | The number of times the user's channel has been viewed. **NOTE**: This field has been deprecated (see [Get Users API endpoint – "view_count" deprecation](https://discuss.dev.twitch.tv/t/get-users-api-endpoint-view-count-deprecation/37777)). Any data in this field is not valid and should not be used.  |
 * | &nbsp;├──&nbsp;email | ${type.string}  | The user's verified email address. The struct includes this field only if the user access token includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_EMAIL`. If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | &nbsp;└──&nbsp;created_at | ${type.string}  | The UTC date and time that the user's account was created. The timestamp is in RFC3339 format.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_auth(scopes, force_verify) {}


/**
 * @func twitch_auth_exchange_code
 * @desc **Twitch Endpoint:** N / A
 * 
 * This function authenticates using an exchange code.
 * 
 * [[Note: This function is used internally by the extension and you don't need to call it yourself.
 * Call ${function.twitch_auth} to authenticate with Twitch.]]
 * 
 * See: [Authentication](https://dev.twitch.tv/docs/authentication/)
 * 
 * @param {string} code The code that the `/authorize` response returned in the code parameter.
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * 
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the user.  |
 * | &nbsp;├──&nbsp;login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;display_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The type of user. Possible values are: `"admin"` — Twitch administrator, `"global_mod"`, `"staff"` — Twitch staff, `""` — Normal user  |
 * | &nbsp;├──&nbsp;broadcaster_type | ${type.string}  | The type of broadcaster. The type of broadcaster. Possible values are: `"affiliate"` — An affiliate broadcaster [affiliate broadcaster](https://help.twitch.tv/s/article/joining-the-affiliate-program?language=en_US), `"partner"` — A partner broadcaster [partner broadcaster](https://help.twitch.tv/s/article/partner-program-overview), `""` — A normal broadcaster  |
 * | &nbsp;├──&nbsp;description | ${type.string}  | The user's description of their channel.  |
 * | &nbsp;├──&nbsp;profile_image_url | ${type.string}  | A URL to the user's profile image.  |
 * | &nbsp;├──&nbsp;offline_image_url | ${type.string}  | A URL to the user's offline image.  |
 * | &nbsp;├──&nbsp;view_count | ${type.number}  | The number of times the user's channel has been viewed. NOTE: This field has been deprecated (see [Get Users API endpoint – "view_count" deprecation](https://discuss.dev.twitch.tv/t/get-users-api-endpoint-view-count-deprecation/37777)). Any data in this field is not valid and should not be used.  |
 * | &nbsp;├──&nbsp;email | ${type.string}  | The user's verified email address. The struct includes this field only if the user access token includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_EMAIL`. If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | &nbsp;└──&nbsp;created_at | ${type.string}  | The UTC date and time that the user's account was created. The timestamp is in RFC3339 format.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_auth_exchange_code(code) {}


/**
 * @func twitch_auth_app_token
 * @desc **Twitch Endpoint:** N / A
 * 
 * This function authenticates using an app access token.
 * 
 * See: [Authentication](https://dev.twitch.tv/docs/authentication/)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * 
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the user.  |
 * | &nbsp;├──&nbsp;login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;display_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The type of user. Possible values are: `"admin"` — Twitch administrator, `"global_mod"`, `"staff"` — Twitch staff, `""` — Normal user  |
 * | &nbsp;├──&nbsp;broadcaster_type | ${type.string}  | The type of broadcaster. The type of broadcaster. Possible values are: `"affiliate"` — An affiliate broadcaster [affiliate broadcaster](https://help.twitch.tv/s/article/joining-the-affiliate-program?language=en_US), `"partner"` — A partner broadcaster [partner broadcaster](https://help.twitch.tv/s/article/partner-program-overview), `""` — A normal broadcaster  |
 * | &nbsp;├──&nbsp;description | ${type.string}  | The user's description of their channel.  |
 * | &nbsp;├──&nbsp;profile_image_url | ${type.string}  | A URL to the user's profile image.  |
 * | &nbsp;├──&nbsp;offline_image_url | ${type.string}  | A URL to the user's offline image.  |
 * | &nbsp;├──&nbsp;view_count | ${type.number}  | The number of times the user's channel has been viewed. NOTE: This field has been deprecated (see [Get Users API endpoint – "view_count" deprecation](https://discuss.dev.twitch.tv/t/get-users-api-endpoint-view-count-deprecation/37777)). Any data in this field is not valid and should not be used.  |
 * | &nbsp;├──&nbsp;email | ${type.string}  | The user's verified email address. The struct includes this field only if the user access token includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_EMAIL`. If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | &nbsp;└──&nbsp;created_at | ${type.string}  | The UTC date and time that the user's account was created. The timestamp is in RFC3339 format.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_auth_app_token() {}


/**
 * @func twitch_auth_refresh_token
 * @desc **Twitch Endpoint:** N / A
 * 
 * This function refreshes an access token obtained earlier.
 * 
 * Since the Twitch extension automatically refreshes the access token periodically you shouldn't need to call this function yourself.
 * 
 * See: [Authentication](https://dev.twitch.tv/docs/authentication/)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * 
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the user.  |
 * | &nbsp;├──&nbsp;login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;display_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The type of user. Possible values are: `"admin"` — Twitch administrator, `"global_mod"`, `"staff"` — Twitch staff, `""` — Normal user  |
 * | &nbsp;├──&nbsp;broadcaster_type | ${type.string}  | The type of broadcaster. The type of broadcaster. Possible values are: `"affiliate"` — An affiliate broadcaster [affiliate broadcaster](https://help.twitch.tv/s/article/joining-the-affiliate-program?language=en_US), `"partner"` — A partner broadcaster [partner broadcaster](https://help.twitch.tv/s/article/partner-program-overview), `""` — A normal broadcaster  |
 * | &nbsp;├──&nbsp;description | ${type.string}  | The user's description of their channel.  |
 * | &nbsp;├──&nbsp;profile_image_url | ${type.string}  | A URL to the user's profile image.  |
 * | &nbsp;├──&nbsp;offline_image_url | ${type.string}  | A URL to the user's offline image.  |
 * | &nbsp;├──&nbsp;view_count | ${type.number}  | The number of times the user's channel has been viewed. NOTE: This field has been deprecated (see [Get Users API endpoint – "view_count" deprecation](https://discuss.dev.twitch.tv/t/get-users-api-endpoint-view-count-deprecation/37777)). Any data in this field is not valid and should not be used.  |
 * | &nbsp;├──&nbsp;email | ${type.string}  | The user's verified email address. The struct includes this field only if the user access token includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_EMAIL`. If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | &nbsp;└──&nbsp;created_at | ${type.string}  | The UTC date and time that the user's account was created. The timestamp is in RFC3339 format.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_auth_refresh_token() {}


/**
 * @func twitch_auth_from_cache
 * @desc **Twitch Endpoint:** N / A
 * 
 * This function performs authentication using the refresh token saved from a previous session.
 * 
 * It returns the request ID if a cached token is available or -1 otherwise.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * 
 * @returns {real}
 * 
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the user.  |
 * | &nbsp;├──&nbsp;login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;display_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The type of user. Possible values are: `"admin"` — Twitch administrator, `"global_mod"`, `"staff"` — Twitch staff, `""` — Normal user  |
 * | &nbsp;├──&nbsp;broadcaster_type | ${type.string}  | The type of broadcaster. The type of broadcaster. Possible values are: `"affiliate"` — An affiliate broadcaster [affiliate broadcaster](https://help.twitch.tv/s/article/joining-the-affiliate-program?language=en_US), `"partner"` — A partner broadcaster [partner broadcaster](https://help.twitch.tv/s/article/partner-program-overview), `""` — A normal broadcaster  |
 * | &nbsp;├──&nbsp;description | ${type.string}  | The user's description of their channel.  |
 * | &nbsp;├──&nbsp;profile_image_url | ${type.string}  | A URL to the user's profile image.  |
 * | &nbsp;├──&nbsp;offline_image_url | ${type.string}  | A URL to the user's offline image.  |
 * | &nbsp;├──&nbsp;view_count | ${type.number}  | The number of times the user's channel has been viewed. NOTE: This field has been deprecated (see [Get Users API endpoint – "view_count" deprecation](https://discuss.dev.twitch.tv/t/get-users-api-endpoint-view-count-deprecation/37777)). Any data in this field is not valid and should not be used.  |
 * | &nbsp;├──&nbsp;email | ${type.string}  | The user's verified email address. The struct includes this field only if the user access token includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_EMAIL`. If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | &nbsp;└──&nbsp;created_at | ${type.string}  | The UTC date and time that the user's account was created. The timestamp is in RFC3339 format.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_auth_from_cache() {}


/**
 * @func twitch_auth_signout
 * @desc **Twitch Endpoint:** N / A
 * 
 * This function signs out from Twitch.
 * 
 * See: [Authentication](https://dev.twitch.tv/docs/authentication/)
 * 
 * @func_end
 */
function twitch_auth_signout() {}


/**
 * @const TWITCH_SCOPE
 * @desc **Twitch:** [Twitch Access Token Scopes](https://dev.twitch.tv/docs/authentication/scopes/)
 * 
 * This group of macros represents the possible access token scopes.
 * 
 * @member TWITCH_SCOPE_ANALYTICS_READ_EXTENSIONS The value `"analytics:read:extensions"`. View analytics data for the Twitch Extensions owned by the authenticated account.
 * @member TWITCH_SCOPE_ANALYTICS_READ_GAMES The value `"analytics:read:games"`. View analytics data for the games owned by the authenticated account.
 * @member TWITCH_SCOPE_BITS_READ The value `"bits:read"`. View Bits information for a channel. Joins your channel's chatroom as a bot user, and perform chat-related actions as that user.
 * @member TWITCH_SCOPE_CHANNEL_BOT The value `"channel:bot"`. Joins your channel's chatroom as a bot user, and perform chat-related actions as that user.
 * @member TWITCH_SCOPE_CHANNEL_EDIT_COMMERCIAL The value `"channel:edit:commercial"`. Run commercials on a channel.
 * @member TWITCH_SCOPE_CHANNEL_MANAGE_BROADCAST The value `"channel:manage:broadcast"`. Manage a channel's broadcast configuration, including updating channel configuration and managing stream markers and stream tags.
 * @member TWITCH_SCOPE_CHANNEL_MANAGE_EXTENSIONS The value `"channel:manage:extensions"`. Manage a channel's Extension configuration, including activating Extensions.
 * @member TWITCH_SCOPE_CHANNEL_MANAGE_POLLS The value `"channel:manage:polls"`. Manage a channel's polls.
 * @member TWITCH_SCOPE_CHANNEL_MANAGE_PREDICTIONS The value `"channel:manage:predictions"`. View a channel's Channel Points Predictions.
 * @member TWITCH_SCOPE_CHANNEL_MANAGE_RAIDS The value `"channel:manage:raids"`. Manage a channel raiding another channel.
 * @member TWITCH_SCOPE_CHANNEL_MANAGE_REDEMPTIONS The value `"channel:manage:redemptions"`. Manage Channel Points custom rewards and their redemptions on a channel.
 * @member TWITCH_SCOPE_CHANNEL_MANAGE_SCHEDULE The value `"channel:manage:schedule"`. Manage a channel's stream schedule.
 * @member TWITCH_SCOPE_CHANNEL_MANAGE_VIDEOS The value `"channel:manage:videos"`. Manage a channel's videos, including deleting videos.
 * @member TWITCH_SCOPE_CHANNEL_MANAGE_VIPS The value `"channel:manage:vips"`. Add or remove the VIP role from users in your channel.
 * @member TWITCH_SCOPE_CHANNEL_MANAGE_GUEST_STAR The value `"channel:manage:guest_star"`. Manage Guest Star for your channel.
 * @member TWITCH_SCOPE_CHANNEL_MANAGE_MODERATORS The value `"channel:manage:moderators"`. Add or remove the moderator role from users in your channel.
 * @member TWITCH_SCOPE_CHANNEL_READ_EDITORS The value `"channel:read:editors"`. View a list of users with the editor role for a channel.
 * @member TWITCH_SCOPE_CHANNEL_READ_GOALS The value `"channel:read:goals"`. View Creator Goals for a channel.
 * @member TWITCH_SCOPE_CHANNEL_READ_GUEST_STAR The value `"channel:read:guest_star"`. Read Guest Star details for your channel.
 * @member TWITCH_SCOPE_CHANNEL_READ_HYPE_TRAIN The value `"channel:read:hype_train"`. View Hype Train information for a channel.
 * @member TWITCH_SCOPE_CHANNEL_READ_POLLS The value `"channel:read:polls"`. View a channel's polls.
 * @member TWITCH_SCOPE_CHANNEL_READ_PREDICTIONS The value `"channel:read:predictions"`. View a channel's Channel Points Predictions.
 * @member TWITCH_SCOPE_CHANNEL_READ_REDEMPTIONS The value `"channel:read:redemptions"`. View Channel Points custom rewards and their redemptions on a channel.
 * @member TWITCH_SCOPE_CHANNEL_READ_STREAM_KEY The value `"channel:read:stream_key"`. View an authorized user's stream key.
 * @member TWITCH_SCOPE_CHANNEL_READ_SUBSCRIPTIONS The value `"channel:read:subscriptions"`. View a list of all subscribers to a channel and check if a user is subscribed to a channel.
 * @member TWITCH_SCOPE_CHANNEL_MANAGE_ADS The value `"channel:manage:ads"`. Manage ads schedule on a channel.
 * @member TWITCH_SCOPE_CHANNEL_READ_ADS The value `"channel:read:ads"`. Read the ads schedule and details on your channel.
 * @member TWITCH_SCOPE_CHANNEL_READ_VIPS The value `"channel:read:vips"`. Read the list of VIPs in your channel.
 * @member TWITCH_SCOPE_CHANNEL_MODERATE The value `"channel:moderate"`. 
 * @member TWITCH_SCOPE_CHANNEL_READ_CHARITY The value `"channel:read:charity"`. Read charity campaign details and user donations on your channel.
 * @member TWITCH_SCOPE_CHAT_EDIT The value `"chat:edit"`. Send chat messages to a chatroom using an IRC connection.
 * @member TWITCH_SCOPE_CHAT_READ The value `"chat:read"`. View chat messages sent in a chatroom using an IRC connection.
 * @member TWITCH_SCOPE_CLIPS_EDIT The value `"clips:edit"`. Manage Clips for a channel.
 * @member TWITCH_SCOPE_MODERATION_READ The value `"moderation:read"`. View a channel's moderation data including Moderators, Bans, Timeouts, and Automod settings.
 * @member TWITCH_SCOPE_MODERATOR_READ_AUTOMOD_SETTINGS The value `"moderator:read:automod_settings"`. View a broadcaster's AutoMod settings.
 * @member TWITCH_SCOPE_MODERATOR_READ_BLOCKED_TERMS The value `"moderator:read:blocked_terms"`. View a broadcaster's list of blocked terms.
 * @member TWITCH_SCOPE_MODERATOR_READ_CHAT_SETTINGS The value `"moderator:read:chat_settings"`. View a broadcaster's chat room settings.
 * @member TWITCH_SCOPE_MODERATOR_READ_FOLLOWERS The value `"moderator:read:followers"`. Read the followers of a broadcaster.
 * @member TWITCH_SCOPE_MODERATOR_READ_CHATTERS The value `"moderator:read:chatters"`. View the chatters in a broadcaster's chat room.
 * @member TWITCH_SCOPE_MODERATOR_READ_UNBAN_REQUESTS The value `"moderator:read:unban_requests"`. View a broadcaster's unban requests.
 * @member TWITCH_SCOPE_MODERATOR_READ_GUEST_STAR The value `"moderator:read:guest_star"`. Read Guest Star details for your channel.
 * @member TWITCH_SCOPE_MODERATOR_READ_SHIELD_MODE The value `"moderator:read:shield_mode"`. View a broadcaster's Shield Mode status.
 * @member TWITCH_SCOPE_MODERATOR_MANAGE_GUEST_STAR The value `"moderator:manage:guest_star"`. Manage Guest Star for channels where you are a Guest Star moderator.
 * @member TWITCH_SCOPE_MODERATOR_MANAGE_BANNED_USERS The value `"moderator:manage:banned_users"`. Ban and unban users.
 * @member TWITCH_SCOPE_MODERATOR_MANAGE_BLOCKED_TERMS The value `"moderator:manage:blocked_terms"`. Manage a broadcaster's list of blocked terms.
 * @member TWITCH_SCOPE_MODERATOR_MANAGE_AUTOMOD The value `"moderator:manage:automod"`. Manage messages held for review by AutoMod in channels where you are a moderator.
 * @member TWITCH_SCOPE_MODERATOR_MANAGE_AUTOMOD_SETTINGS The value `"moderator:manage:automod_settings"`. Manage a broadcaster's AutoMod settings.
 * @member TWITCH_SCOPE_MODERATOR_MANAGE_CHAT_MESSAGES The value `"moderator:manage:chat_messages"`. Delete chat messages in channels where you have the moderator role
 * @member TWITCH_SCOPE_MODERATOR_MANAGE_CHAT_SETTINGS The value `"moderator:manage:chat_settings"`. Manage a broadcaster's chat room settings.
 * @member TWITCH_SCOPE_MODERATOR_MANAGE_UNBAN_REQUESTS The value `"moderator:manage:unban_requests"`. Manage a broadcaster's unban requests.
 * @member TWITCH_SCOPE_MODERATOR_MANAGE_SHIELD_MODE The value `"moderator:manage:shield_mode"`. Manage a broadcaster's Shield Mode status.
 * @member TWITCH_SCOPE_MODERATOR_MANAGE_SHOUTOUTS The value `"moderator:manage:shoutouts"`. Manage a broadcaster's shoutouts.
 * @member TWITCH_SCOPE_MODERATOR_MANAGE_ANNOUNCEMENTS The value `"moderator:manage:announcements"`. Send announcements in channels where you have the moderator role.
 * @member TWITCH_SCOPE_USER_BOT The value `"user:bot"`. Join a specified chat channel as your user and appear as a bot, and perform chat-related actions as your user.
 * @member TWITCH_SCOPE_USER_EDIT The value `"user:edit"`. Manage a user object.
 * @member TWITCH_SCOPE_USER_EDIT_BROADCAST The value `"user:edit:broadcast"`. View and edit a user's broadcasting configuration, including Extension configurations.
 * @member TWITCH_SCOPE_USER_MANAGE_BLOCKED_USERS The value `"user:manage:blocked_users"`. Manage the block list of a user.
 * @member TWITCH_SCOPE_USER_MANAGE_CHAT_COLOR The value `"user:manage:chat_color"`. Update the color used for the user's name in chat.
 * @member TWITCH_SCOPE_USER_MANAGE_WHISPERS The value `"user:manage:whispers"`. Receive whispers sent to your user, and send whispers on your user's behalf.
 * @member TWITCH_SCOPE_USER_READ_BLOCKED_USERS The value `"user:read:blocked_users"`. View the block list of a user.
 * @member TWITCH_SCOPE_USER_READ_BROADCAST The value `"user:read:broadcast"`. View a user's broadcasting configuration, including Extension configurations.
 * @member TWITCH_SCOPE_USER_READ_EMAIL The value `"user:read:email"`. View a user's email address.
 * @member TWITCH_SCOPE_USER_READ_SUBSCRIPTIONS The value `"user:read:subscriptions"`. View if an authorized user is subscribed to specific channels.
 * @member TWITCH_SCOPE_USER_READ_EMOTES The value `"user:read:emotes"`. View emotes available to a user.
 * @member TWITCH_SCOPE_USER_READ_FOLLOWS The value `"user:read:follows"`. View the list of channels a user follows.
 * @member TWITCH_SCOPE_USER_READ_MODERATED_CHANNELS The value `"user:read:moderated_channels"`. Read the list of channels you have moderator privileges in.
 * @member TWITCH_SCOPE_USER_READ_CHAT The value `"user:read:chat"`. Receive chatroom messages and informational notifications relating to a channel's chatroom.
 * @member TWITCH_SCOPE_USER_WRITE_CHAT The value `"user:write:chat"`. Send chat messages to a chatroom.
 * @member TWITCH_SCOPE_WHISPERS_READ The value `"whispers:read"`. Receive whisper messages for your user using PubSub.
 * @member TWITCH_SCOPE_WHISPERS_EDIT The value `"whispers:edit"`. 
 * 
 * @const_end
 */

/**
 * @func twitch_bits_get_bits_leaderboard
 * @desc **Twitch Endpoint:** [Get Bits Leaderboard](https://dev.twitch.tv/docs/api/reference/#get-bits-leaderboard)
 * 
 * This function gets the Bits leaderboard for the authenticated broadcaster.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_BITS_READ`.]]
 * 
 * @param {string} optionals The optional parameters to be passed into the function:
 * 
 * - `count` : ${type.real} : The number of results to return. The minimum count is 1 and the maximum is 100. The default is 10.
 * * `period` : ${type.real} : The time period over which data is aggregated (uses the PST time zone). Possible values are:
 *   * `"day"` — A day spans from 00:00:00 on the day specified in `started_at` and runs through 00:00:00 of the next day.
 *   * `"week"` — A week spans from 00:00:00 on the Monday of the week specified in `started_at` and runs through 00:00:00 of the next Monday.
 *   * `"month"` — A month spans from 00:00:00 on the first day of the month specified in `started_at` and runs through 00:00:00 of the first day of the next month.
 *   * `"year"` — A year spans from 00:00:00 on the first day of the year specified in `started_at` and runs through 00:00:00 of the first day of the next year.
 *   * `"all"` — Default. The lifetime of the broadcaster's channel.
 * - `started_at` : ${type.real} : The start date, in RFC3339 format, used for determining the aggregation period. Specify this parameter only if you specify the `period` parameter. The start date is ignored if `period` is `"all"`.
 *   Note that the date is converted to PST before being used, so if you set the start time to `2022-01-01T00:00:00.0Z` and `period` to `"month"`, the actual reporting period is December 2021, not January 2022. If you want the reporting period to be January 2022, you must set the start time to `2022-01-01T08:00:00.0Z` or `2022-01-01T00:00:00.0-08:00`.
 *   If your start date uses the `+` offset operator (for example, `2022-01-01T00:00:00.0+05:00`), you must URL encode the start date.
 * - `user_id` : ${type.real} : 	An ID that identifies a user that cheered bits in the channel. If `count` is greater than 1, the response may include users ranked above and below the specified user. To get the leaderboard's top leaders, don't specify a user ID.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * 
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list of leaderboard leaders. The leaders are returned in rank order by how much they've cheered. The array is empty if nobody has cheered bits. |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | An ID that identifies a user on the leaderboard. |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name. |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name. |
 * | &nbsp;├──&nbsp;rank | ${type.real}  | The user's position on the leaderboard. |
 * | &nbsp;├──&nbsp;score | ${type.real}  | The number of Bits the user has cheered. |
 * | &nbsp;├──&nbsp;date_range | ${type.struct}  | The reporting window's start and end dates, in RFC3339 format. The dates are calculated by using the `started_at` and `period` parameters. If you don't specify the `started_at` parameter, the fields contain empty strings. |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;started_at | ${type.string}  | The reporting window's start date. |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;ended_at | ${type.string}  | tmThe reporting window's end date.p |
 * | &nbsp;└──&nbsp;total | ${type.real}  | The number of ranked users in `data`. This is the value in the `count` parameter or the total number of entries on the leaderboard, whichever is less. |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @function_end
 */
function twitch_bits_get_bits_leaderboard(optionals, callback_success, callback_failed) {}

/**
 * @func twitch_bits_get_cheermotes
 * @desc **Twitch Endpoint:** [Get Cheermotes](https://dev.twitch.tv/docs/api/reference/#get-cheermotes)
 * 
 * This function gets a list of Cheermotes that users can use to cheer Bits in any Bits-enabled channel's chat room. Cheermotes are animated emotes that viewers can assign Bits to.
 * 
 * [[Note: This requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string} broadcaster_id` ${type.string} The ID of the broadcaster whose custom Cheermotes you want to get. Specify the broadcaster's ID if you want to include the broadcaster's Cheermotes in the response (not all broadcasters upload Cheermotes). If not specified, the response contains only global Cheermotes.
 * 
 * If the broadcaster uploaded Cheermotes, the `type` field in the response is set to `"channel_custom"`.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of Cheermotes. The list is in ascending order by the `order` field's value.  |
 * | &nbsp;├──&nbsp;prefix | ${type.string}  | The name portion of the Cheermote string that you use in chat to cheer Bits. The full Cheermote string is the concatenation of {prefix} + {number of Bits}. For example, if the prefix is "Cheer" and you want to cheer 100 Bits, the full Cheermote string is Cheer100. When the Cheermote string is entered in chat, Twitch converts it to the image associated with the Bits tier that was cheered.  |
 * | &nbsp;├──&nbsp;tiers | ${type.array}  | A list of tier levels that the Cheermote supports. Each tier identifies the range of Bits that you can cheer at that tier level and an image that graphically identifies the tier level.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;min_bits | ${type.number}  | The minimum number of Bits that you must cheer at this tier level. The maximum number of Bits that you can cheer at this level is determined by the required minimum Bits of the next tier level minus 1. For example, if `min_bits` is 1 and `min_bits` for the next tier is 100, the Bits range for this tier level is 1 through 99. The minimum Bits value of the last tier is the maximum number of Bits you can cheer using this Cheermote. For example, 10000.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | The tier level. Possible tiers are:1, 100, 500, 1000, 5000, 10000, 100000  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;color | ${type.string}  | The hex code of the color associated with this tier level (for example, `#979797`).  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;images | ${type.struct}  | The animated and static image sets for the Cheermote. The dictionary of images is organized by theme, format, and size. The theme keys are `"dark"` and `"light"`. Each theme is a dictionary of formats: `"animated"` and `"static"`. Each format is a dictionary of sizes: `"1"`, `"1.5"`, `"2"`, `"3"`, and `"4"`. The value of each size contains the URL to the image.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;can_cheer | ${type.boolean}  | A Boolean value that determines whether users can cheer at this tier level.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;show_in_bits_card | ${type.boolean}  | A Boolean value that determines whether this tier level is shown in the Bits card. Is `true` if this tier level is shown in the Bits card.  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The type of Cheermote. Possible values are: "`global_first_party`" - A Twitch-defined Cheermote that is shown in the Bits card. `"global_third_party"` - A Twitch-defined Cheermote that is not shown in the Bits card. `"channel_custom"` - A broadcaster-defined Cheermote. `"display_only"` - Do not use; for internal use only. `"sponsored"` - A sponsor-defined Cheermote. When used, the sponsor adds additional Bits to the amount that the user cheered. For example, if the user cheered Terminator100, the broadcaster might receive 110 Bits, which includes the sponsor's 10 Bits contribution.  |
 * | &nbsp;├──&nbsp;order | ${type.number}  | The order that the Cheermotes are shown in the Bits card. The numbers may not be consecutive. For example, the numbers may jump from 1 to 7 to 13. The order numbers are unique within a Cheermote type (for example, `"global_first_party"`) but may not be unique amongst all Cheermotes in the response.  |
 * | &nbsp;├──&nbsp;last_updated | ${type.string}  | The date and time, in RFC3339 format, when this Cheermote was last updated.  |
 * | &nbsp;└──&nbsp;is_charitable | ${type.boolean}  | A Boolean value that indicates whether this Cheermote provides a charitable contribution match during charity campaigns.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_bits_get_cheermotes(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_bits_get_extension_transactions
 * @desc **Twitch Endpoint:** [Get Extension Transactions](https://dev.twitch.tv/docs/api/reference/#get-extension-transactions)
 * 
 * This function gets an extension's list of transactions. A transaction records the exchange of a currency (for example, Bits) for a digital product.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).]]
 * 
 * @param {string} extension_id The ID of the extension whose list of transactions you want to get. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `id` : ${type.string} : A transaction ID used to filter the list of transactions. Specify an array with transaction IDs to get multiple transactions. You may specify a maximum of 100 IDs.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)</a>
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of transactions.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the transaction.  |
 * | &nbsp;├──&nbsp;timestamp | ${type.string}  | The UTC date and time (in RFC3339 format) of the transaction.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID of the broadcaster that owns the channel where the transaction occurred.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | The ID of the user that purchased the digital product.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;product_type | ${type.string}  | The type of transaction. Possible values are: `"BITS_IN_EXTENSION"`  |
 * | &nbsp;└──&nbsp;product_data | ${type.struct}  | Contains details about the digital product.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;sku | ${type.string}  | An ID that identifies the digital product.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;domain | ${type.string}  | Set to `twitch.ext.` + `<the extension's ID>`.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;cost | ${type.struct}  | Contains details about the digital product's cost.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;amount | ${type.number}  | The amount exchanged for the digital product.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;type | ${type.string}  | The type of currency exchanged. Possible values are: `"bits"`  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;inDevelopment | ${type.boolean}  | A Boolean value that determines whether the product is in development. Is `true` if the digital product is in development and cannot be exchanged.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;displayName | ${type.string}  | The name of the digital product.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;expiration | ${type.string}  | This field is always empty since you may purchase only unexpired products.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;broadcast | ${type.boolean}  | A Boolean value that determines whether the data was broadcast to all instances of the extension. Is `true` if the data was broadcast to all instances.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_bits_get_extension_transactions(extension_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_channels_get_channel_information
 * @desc **Twitch Endpoint:** [Get Channel Information](https://dev.twitch.tv/docs/api/reference/#get-channel-information)
 * 
 * This function gets information about one or more channels.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {real|array} broadcaster_id The ID of the broadcaster whose channel you want to get. To specify more than one ID, pass an array with the ID of each broadcaster you want to get. You may specify a maximum of 100 IDs. The API ignores duplicate IDs and IDs that are not found. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains information about the specified channels. The list is empty if the specified channels weren't found.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that uniquely identifies the broadcaster.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;broadcaster_language | ${type.string}  | The broadcaster's preferred language. The value is an ISO 639-1 two-letter language code (for example, `"en"` for English). The value is set to `"other"` if the language is not a Twitch supported language.  |
 * | &nbsp;├──&nbsp;game_name | ${type.string}  | The name of the game that the broadcaster is playing or last played. The value is an empty string if the broadcaster has never played a game.  |
 * | &nbsp;├──&nbsp;game_id | ${type.string}  | An ID that uniquely identifies the game that the broadcaster is playing or last played. The value is an empty string if the broadcaster has never played a game.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The title of the stream that the broadcaster is currently streaming or last streamed. The value is an empty string if the broadcaster has never streamed.  |
 * | &nbsp;├──&nbsp;delay | ${type.number}  | The value of the broadcaster's stream delay setting, in seconds. This field's value defaults to zero unless 1) the request specifies a user access token, 2) the ID in the `broadcaster_id` parameter matches the user ID in the access token, and 3) the broadcaster has partner status and they set a non-zero stream delay value.  |
 * | &nbsp;├──&nbsp;tags | ${type.array} of ${type.string}  | The tags applied to the channel.  |
 * | &nbsp;├──&nbsp;content_classification_labels | ${type.array} of ${type.string}  | The CCLs applied to the channel.  |
 * | &nbsp;└──&nbsp;is_branded_content | ${type.boolean}  | Boolean flag indicating if the channel has branded content.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_channels_get_channel_information(broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_channels_modify_channel_information
 * @desc **Twitch Endpoint:** [Modify Channel Information](https://dev.twitch.tv/docs/api/reference/#modify-channel-information)
 * 
 * This function updates a channel's properties.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_BROADCAST`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose channel you want to update. This ID must match the user ID in the user access token. 
 * @param {string} id ID of the [Content Classification Labels](https://blog.twitch.tv/en/2023/06/20/introducing-content-classification-labels/) that must be added/removed from the channel. Can be one of the following values: `"DrugsIntoxication"`, `"SexualThemes"`, `"ViolentGraphic"`, `"Gambling"`, `"ProfanityVulgarity"`
 * @param {boolean} is_enabled Boolean flag indicating whether the label should be enabled (`true`) or disabled for the channel. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `game_id` : ${type.string} : The ID of the game that the user plays. The game is not updated if the ID isn't a game ID that Twitch recognizes. To unset this field, use `"0"` or `""` (an empty string).
 * - `broadcaster_language` : ${type.string} : The user's preferred language. Set the value to an ISO 639-1 two-letter language code (for example, ``"en"`` for English). Set to `"other"` if the user's preferred language is not a Twitch supported language. The language isn't updated if the language code isn't a Twitch supported language.
 * - `title` : ${type.string} : The title of the user's stream. You may not set this field to an empty string.
 * - `delay` : ${type.number} : The number of seconds you want your broadcast buffered before streaming it live. The delay helps ensure fairness during competitive play. Only users with Partner status may set this field. The maximum delay is 900 seconds (15 minutes).
 * - `tags` : ${type.array} of ${type.string} : A list of channel-defined tags to apply to the channel. To remove all tags from the channel, set tags to an empty array. Tags help identify the content that the channel streams. [Learn More](https://help.twitch.tv/s/article/guide-to-tags) A channel may specify a maximum of 10 tags. Each tag is limited to a maximum of 25 characters and may not be an empty string or contain spaces or special characters. Tags are case insensitive. For readability, consider using camelCasing or PascalCasing.
 * - `content_classification_labels` : ${type.string} : List of labels that should be set as the Channel's CCLs.
 * - `is_branded_content` : ${type.boolean} : Boolean flag indicating if the channel has branded content.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success.
 *
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_channels_modify_channel_information(broadcaster_id, id, is_enabled, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_channels_get_channel_editors
 * @desc **Twitch Endpoint:** [Get Channel Editors](https://dev.twitch.tv/docs/api/reference/#get-channel-editors)
 * 
 * This function gets the broadcaster's list editors.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_READ_EDITORS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the channel. This ID must match the user ID in the access token. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list of users that are editors for the specified broadcaster. The list is empty if the broadcaster doesn't have editors.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | An ID that uniquely identifies a user with editor permissions.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | &nbsp;└──&nbsp;created_at | ${type.string}  | The date and time, in RFC3339 format, when the user became one of the broadcaster's editors.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_channels_get_channel_editors(broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_channels_get_followed_channels
 * @desc **Twitch Endpoint:** [Get Followed Channels](https://dev.twitch.tv/docs/api/reference/#get-followed-channels)
 * 
 * This function gets a list of broadcasters that the specified user follows. You can also use this endpoint to see whether a user follows a specific broadcaster.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_FOLLOWS`.]]
 * 
 * @param {string} user_id A user's ID. Returns the list of broadcasters that this user follows. This ID must match the user ID in the user OAuth token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `broadcaster_id` : ${type.string} : A broadcaster's ID. Use this parameter to see whether the user follows this broadcaster. If specified, the response contains this broadcaster if the user follows them. If not specified, the response contains all broadcasters that the user follows.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination).
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of broadcasters that the user follows. The list is in descending order by `followed_at` (with the most recently followed broadcaster first). The list is empty if the user doesn't follow anyone.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that uniquely identifies the broadcaster that this user is following.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;└──&nbsp;followed_at | ${type.string}  | The UTC timestamp when the user started following the broadcaster.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read more](https://dev.twitch.tv/docs/api/guide#pagination).  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * | total | ${type.number}  | The total number of broadcasters that the user follows. As someone pages through the list, the number may change as the user follows or unfollows broadcasters.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_channels_get_followed_channels(user_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_channels_get_channel_followers
 * @desc **Twitch Endpoint:** [Get Channel Followers](https://dev.twitch.tv/docs/api/reference/#get-channel-followers)
 * 
 * This function gets a list of users that follow the specified broadcaster. You can also use this endpoint to see whether a specific user follows the broadcaster.
 * 
 * * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_READ_FOLLOWERS`.
 * * The ID in the `broadcaster_id` parameter must match the user ID in the access token or the user ID in the access token must be a moderator for the specified broadcaster.
 * 
 * This endpoint will return specific follower information only if both of the above are true. If a scope is not provided or the user isn't the broadcaster or a moderator for the specified channel, only the total follower count will be included in the response.
 * 
 * @param {string} broadcaster_id The broadcaster's ID. Returns the list of users that follow this broadcaster. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `user_id` : ${type.string} : A user's ID. Use this parameter to see whether the user follows this broadcaster. If specified, the response contains this user if they follow the broadcaster. If not specified, the response contains all users that follow the broadcaster.
 *   Using this parameter requires both a user access token with the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_READ_FOLLOWERS`.and the user ID in the access token match the `broadcaster_id` or be the user ID for a moderator of the specified broadcaster.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. <a href="https://dev.twitch.tv/docs/api/guide#pagination">Read more</a>.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users that follow the specified broadcaster. The list is in descending order by `followed_at` (with the most recent follower first). The list is empty if nobody follows the broadcaster, the specified `user_id` isn't in the follower list, the user access token is missing the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_READ_FOLLOWERS`. or the user isn't the broadcaster or moderator for the channel.  |
 * | &nbsp;├──&nbsp;followed_at | ${type.string}  | The UTC timestamp when the user started following the broadcaster.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | An ID that uniquely identifies the user that's following the broadcaster.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | &nbsp;└──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read more](https://dev.twitch.tv/docs/api/guide#pagination).  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * | total | ${type.number}  | The total number of users that follow this broadcaster. As someone pages through the list, the number of users may change as users follow or unfollow the broadcaster.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_channels_get_channel_followers(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_channel_points_create_custom_rewards
 * @desc **Twitch Endpoint:** [Create Custom Rewards](https://dev.twitch.tv/docs/api/reference/#create-custom-rewards)
 * 
 * This function creates a Custom Reward in the broadcaster's channel. The maximum number of custom rewards per channel is 50, which includes both enabled and disabled rewards.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_REDEMPTIONS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster to add the custom reward to. This ID must match the user ID found in the OAuth token. 
 * @param {string} title The custom reward's title. The title may contain a maximum of 45 characters and it must be unique amongst all of the broadcaster's custom rewards. 
 * @param {int64} cost The cost of the reward, in Channel Points. The minimum is 1 point. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `prompt` : ${type.string} : The prompt shown to the viewer when they redeem the reward. Specify a prompt if `is_user_input_required` is `true`. The prompt is limited to a maximum of 200 characters.
 * - `is_enabled` : ${type.boolean} : A Boolean value that determines whether the reward is enabled. Viewers see only enabled rewards. The default is `true`.
 * - `background_color` : ${type.string} : The background color to use for the reward. Specify the color using Hex format (for example, `"#9147FF"`).
 * - `is_user_input_required` : ${type.boolean} : A Boolean value that determines whether the user needs to enter information when redeeming the reward. See the `prompt` field. The default is `false`.
 * - `is_max_per_stream_enabled` : ${type.boolean} : A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream (see the `max_per_stream` field). The default is `false`.
 * - `max_per_stream` : ${type.number} : The maximum number of redemptions allowed per live stream. Applied only if `is_max_per_stream_enabled` is `true`. The minimum value is 1.
 * - `is_max_per_user_per_stream_enabled` : ${type.boolean} : A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream (see the `max_per_user_per_stream` field). The default is `false`.
 * - `max_per_user_per_stream` : ${type.number} : The maximum number of redemptions allowed per user per stream. Applied only if `is_max_per_user_per_stream_enabled` is `true`. The minimum value is 1.
 * - `is_global_cooldown_enabled` : ${type.boolean} : A Boolean value that determines whether to apply a cooldown period between redemptions (see the `global_cooldown_seconds` field for the duration of the cooldown period). The default is `false`.
 * - `global_cooldown_seconds` : ${type.number} : The cooldown period, in seconds. Applied only if the `is_global_cooldown_enabled` field is `true`. The minimum value is 1; however, the minimum value is 60 for it to be shown in the Twitch UX.
 * - `should_redemptions_skip_request_queue` : ${type.boolean} : A Boolean value that determines whether redemptions should be set to `"FULFILLED"` status immediately when a reward is redeemed. If `false`, status is set to `"UNFULFILLED"` and follows the normal request queue process. The default is `false`.
 * 
 * @param {function} callback_success Triggered if request succeeded
 * @param {function} callback_failed Triggered if request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single custom reward you created.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID that uniquely identifies the broadcaster.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | The ID that uniquely identifies this custom reward.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The title of the reward.  |
 * | &nbsp;├──&nbsp;prompt | ${type.string}  | The prompt shown to the viewer when they redeem the reward if user input is required (see the `is_user_input_required` field).  |
 * | &nbsp;├──&nbsp;cost | ${type.number}  | The cost of the reward in Channel Points.  |
 * | &nbsp;├──&nbsp;image | ${type.struct}  | A set of custom images for the reward. This field is set to `undefined` if the broadcaster didn't upload images.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_1x | ${type.string}  | The URL to a small version of the image.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_2x | ${type.string}  | The URL to a medium version of the image.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;url_4x | ${type.string}  | The URL to a large version of the image.  |
 * | &nbsp;├──&nbsp;default_image | ${type.struct}  | A set of default images for the reward.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_1x | ${type.string}  | The URL to a small version of the image.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_2x | ${type.string}  | The URL to a medium version of the image.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;url_4x | ${type.string}  | The URL to a large version of the image.  |
 * | &nbsp;├──&nbsp;background_color | ${type.string}  | The background color to use for the reward. The color is in Hex format (for example, `"#00E5CB"`).  |
 * | &nbsp;├──&nbsp;is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward is enabled. Is `true` if enabled; otherwise, `false`. Disabled rewards aren't shown to the user.  |
 * | &nbsp;├──&nbsp;is_user_input_required | ${type.boolean}  | A Boolean value that determines whether the user must enter information when redeeming the reward. Is `true` if the reward requires user input.  |
 * | &nbsp;├──&nbsp;max_per_stream_setting | ${type.struct}  | The settings used to determine whether to apply a maximum to the number to the redemptions allowed per live stream.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per live stream. Is `true` if the reward applies a limit.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;max_per_stream | ${type.int64}  | The maximum number of redemptions allowed per live stream.  |
 * | &nbsp;├──&nbsp;max_per_user_per_stream_setting | ${type.struct}  | The settings used to determine whether to apply a maximum to the number of redemptions allowed per user per live stream.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per user per live stream. Is `true` if the reward applies a limit.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;max_per_user_per_stream | ${type.int64}  | The maximum number of redemptions allowed per user per live stream.  |
 * | &nbsp;├──&nbsp;global_cooldown_setting | ${type.struct}  | The settings used to determine whether to apply a cooldown period between redemptions and the length of the cooldown.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_enabled | ${type.boolean}  | A Boolean value that determines whether to apply a cooldown period. Is `true` if a cooldown period is enabled.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;global_cooldown_seconds | ${type.int64}  | The cooldown period, in seconds.  |
 * | &nbsp;├──&nbsp;is_paused | ${type.boolean}  | A Boolean value that determines whether the reward is currently paused. Is `true` if the reward is paused. Viewers can't redeem paused rewards.  |
 * | &nbsp;├──&nbsp;is_in_stock | ${type.boolean}  | A Boolean value that determines whether the reward is currently in stock. Is `true` if the reward is in stock. Viewers can't redeem out of stock rewards.  |
 * | &nbsp;├──&nbsp;should_redemptions_skip_request_queue | ${type.boolean}  | A Boolean value that determines whether redemptions should be set to `"FULFILLED"` status immediately when a reward is redeemed. If `false`, status is `"UNFULFILLED"` and follows the normal request queue process.  |
 * | &nbsp;├──&nbsp;redemptions_redeemed_current_stream | ${type.number}  | The number of redemptions redeemed during the current live stream. The number counts against the `max_per_stream_setting` limit. This field is `undefined` if the broadcaster's stream isn't live or `max_per_stream_setting` isn't enabled.  |
 * | &nbsp;└──&nbsp;cooldown_expires_at | ${type.string}  | The timestamp of when the cooldown period expires. Is `undefined` if the reward isn't in a cooldown state (see the `global_cooldown_setting` field).  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_channel_points_create_custom_rewards(broadcaster_id, title, cost, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_channel_points_delete_custom_reward
 * @desc **Twitch Endpoint:** [Delete Custom Reward](https://dev.twitch.tv/docs/api/reference/#delete-custom-reward)
 * 
 * This function deletes a custom reward that the broadcaster created.
 * 
 * The app used to create the reward is the only app that may delete it. If the reward's redemption status is `"UNFULFILLED"` at the time the reward is deleted, its redemption status is marked as `"FULFILLED"`.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_REDEMPTIONS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that created the custom reward. This ID must match the user ID found in the OAuth token. 
 * @param {string} id The ID of the custom reward to delete. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_channel_points_delete_custom_reward(broadcaster_id, id, callback_success, callback_failed) {}


/**
 * @func twitch_channel_points_get_custom_reward
 * @desc **Twitch Endpoint:** [Get Custom Reward](https://dev.twitch.tv/docs/api/reference/#get-custom-reward)
 * 
 * This function gets a list of custom rewards that the specified broadcaster created.
 * 
 * [[Note: A channel may offer a maximum of 50 rewards, which includes both enabled and disabled rewards.]]
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the `TWITCH_SCOPE_CHANNEL_READ_REDEMPTIONS` or `TWITCH_SCOPE_CHANNEL_MANAGE_REDEMPTIONS` scope.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose custom rewards you want to get. This ID must match the user ID found in the OAuth token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `id` : ${type.real} or ${type.array} of ${type.real} : A list of IDs to filter the rewards by. To specify more than one ID, pass an array with the ID of the rewards you want to get. You may specify a maximum of 50 IDs.
 *   Duplicate IDs are ignored. The response contains only the IDs that were found. If none of the IDs were found, the response is 404 Not Found.
 * - `only_manageable_rewards` : ${type.boolean} : A Boolean value that determines whether the response contains only the custom rewards that the app may manage (the app is identified by the ID in the Client-Id header). Set to `true` to get only the custom rewards that the app may manage. The default is `false`.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list of custom rewards. The list is in ascending order by `id`. If the broadcaster hasn't created custom rewards, the list is empty.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID that uniquely identifies the broadcaster.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | The ID that uniquely identifies this custom reward.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The title of the reward.  |
 * | &nbsp;├──&nbsp;prompt | ${type.string}  | The prompt shown to the viewer when they redeem the reward if user input is required (see the `is_user_input_required` field).  |
 * | &nbsp;├──&nbsp;cost | ${type.number}  | The cost of the reward in Channel Points.  |
 * | &nbsp;├──&nbsp;image | ${type.struct}  | A set of custom images for the reward. This field is `undefined` if the broadcaster didn't upload images.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_1x | ${type.string}  | The URL to a small version of the image.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_2x | ${type.string}  | The URL to a medium version of the image.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;url_4x | ${type.string}  | The URL to a large version of the image.  |
 * | &nbsp;├──&nbsp;default_image | ${type.struct}  | A set of default images for the reward.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_1x | ${type.string}  | The URL to a small version of the image.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_2x | ${type.string}  | The URL to a medium version of the image.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;url_4x | ${type.string}  | The URL to a large version of the image.  |
 * | &nbsp;├──&nbsp;background_color | ${type.string}  | The background color to use for the reward. The color is in Hex format (for example, `"#00E5CB"`).  |
 * | &nbsp;├──&nbsp;is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward is enabled. Is `true` if enabled; otherwise, `false`. Disabled rewards aren't shown to the user.  |
 * | &nbsp;├──&nbsp;is_user_input_required | ${type.boolean}  | A Boolean value that determines whether the user must enter information when redeeming the reward. Is `true` if the user is prompted.  |
 * | &nbsp;├──&nbsp;max_per_stream_setting | ${type.struct}  | The settings used to determine whether to apply a maximum to the number of redemptions allowed per live stream.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per live stream. Is `true` if the reward applies a limit.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;max_per_stream | ${type.int64}  | The maximum number of redemptions allowed per live stream.  |
 * | &nbsp;├──&nbsp;max_per_user_per_stream_setting | ${type.struct}  | The settings used to determine whether to apply a maximum to the number of redemptions allowed per user per live stream.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per user per live stream. Is `true` if the reward applies a limit.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;max_per_user_per_stream | ${type.int64}  | The maximum number of redemptions allowed per user per live stream.  |
 * | &nbsp;├──&nbsp;global_cooldown_setting | ${type.struct}  | The settings used to determine whether to apply a cooldown period between redemptions and the length of the cooldown.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_enabled | ${type.boolean}  | A Boolean value that determines whether to apply a cooldown period. Is `true` if a cooldown period is enabled.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;global_cooldown_seconds | ${type.int64}  | The cooldown period, in seconds.  |
 * | &nbsp;├──&nbsp;is_paused | ${type.boolean}  | A Boolean value that determines whether the reward is currently paused. Is `true` if the reward is paused. Viewers can't redeem paused rewards.  |
 * | &nbsp;├──&nbsp;is_in_stock | ${type.boolean}  | A Boolean value that determines whether the reward is currently in stock. Is `true` if the reward is in stock. Viewers can't redeem out of stock rewards.  |
 * | &nbsp;├──&nbsp;should_redemptions_skip_request_queue | ${type.boolean}  | A Boolean value that determines whether redemptions should be set to `"FULFILLED"` status immediately when a reward is redeemed. If `false`, status is set to `"UNFULFILLED"` and follows the normal request queue process.  |
 * | &nbsp;├──&nbsp;redemptions_redeemed_current_stream | ${type.number}  | The number of redemptions redeemed during the current live stream. The number counts against the `max_per_stream_setting` limit. This field is `undefined` if the broadcaster's stream isn't live or `max_per_stream_setting` isn't enabled.  |
 * | &nbsp;└──&nbsp;cooldown_expires_at | ${type.string}  | The timestamp of when the cooldown period expires. Is `undefined` if the reward isn't in a cooldown state. See the `global_cooldown_setting` field.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_channel_points_get_custom_reward(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_channel_points_get_custom_reward_redemption
 * @desc **Twitch Endpoint:** [Get Custom Reward Redemption](https://dev.twitch.tv/docs/api/reference/#get-custom-reward-redemption)
 * 
 * This function gets a list of redemptions for the specified custom reward. The app used to create the reward is the only app that may get the redemptions.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the `TWITCH_SCOPE_CHANNEL_READ_REDEMPTIONS` or `TWITCH_SCOPE_CHANNEL_MANAGE_REDEMPTIONS` scope.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the custom reward. This ID must match the user ID found in the user OAuth token. 
 * @param {string} reward_id The ID that identifies the custom reward whose redemptions you want to get. 
 * @param {string} status The status of the redemptions to return. The possible case-sensitive values are:
 *   * `"CANCELED"`
 *   * `"FULFILLED"`
 *   * `"UNFULFILLED"`
 * 
 * [[Note: This field is required only if you don't specify the `id` parameter.]]
 * [[Note: Canceled and fulfilled redemptions are returned for only a few days after they're canceled or fulfilled.]]
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `id` : ${type.real} or ${type.array} of ${type.real} : A list of IDs to filter the redemptions by. To specify more than one ID, pass an array containing the ID of each redemption you want to get. You may specify a maximum of 50 IDs.
 *   Duplicate IDs are ignored. The response contains only the IDs that were found. If none of the IDs were found, the response is 404 Not Found.
 * - `sort` : ${type.string} : The order to sort redemptions by. The possible case-sensitive values are:
 *   * `"OLDEST"`
 *   * `"NEWEST"`
 * 
 * The default is `"OLDEST"`.
 * 
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * - `first` : ${type.number} : The maximum number of redemptions to return per page in the response. The minimum page size is 1 redemption per page and the maximum is 50. The default is 20.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of redemptions for the specified reward. The list is empty if there are no redemptions that match the redemption criteria.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID that uniquely identifies the broadcaster.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | The ID that uniquely identifies this redemption.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | The ID that uniquely identifies the user that redeemed the reward.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;user_input | ${type.string}  | The text the user entered at the prompt when they redeemed the reward; otherwise, an empty string if user input was not required.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | The state of the redemption. Possible values are: `"CANCELED"`, `"FULFILLED"`, `"UNFULFILLED"`  |
 * | &nbsp;├──&nbsp;redeemed_at | ${type.string}  | The date and time of when the reward was redeemed, in RFC3339 format.  |
 * | &nbsp;└──&nbsp;reward | ${type.struct}  | The reward that the user redeemed.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | The ID that uniquely identifies the redeemed reward.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;title | ${type.string}  | The reward's title.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;prompt | ${type.string}  | The prompt displayed to the viewer if user input is required.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;cost | ${type.int64}  | The reward's cost, in Channel Points.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_channel_points_get_custom_reward_redemption(broadcaster_id, reward_id, status, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_channel_points_update_custom_reward
 * @desc **Twitch Endpoint:** [Update Custom Reward](https://dev.twitch.tv/docs/api/reference/#update-custom-reward)
 * 
 * This function updates a custom reward. The app used to create the reward is the only app that may update the reward.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_REDEMPTIONS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that's updating the reward. This ID must match the user ID found in the OAuth token. 
 * @param {string} id The ID of the reward to update. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `title` : ${type.string} : The reward's title. The title may contain a maximum of 45 characters and it must be unique amongst all of the broadcaster's custom rewards.
 * - `prompt` : ${type.string} : The prompt shown to the viewer when they redeem the reward. Specify a prompt if `is_user_input_required` is `true`. The prompt is limited to a maximum of 200 characters.
 * - `cost` : ${type.int64} : The cost of the reward, in channel points. The minimum is 1 point.
 * - `background_color` : ${type.string} : The background color to use for the reward. Specify the color using Hex format (for example, \#00E5CB).
 * - `is_enabled` : ${type.boolean} : A Boolean value that indicates whether the reward is enabled. Set to `true` to enable the reward. Viewers see only enabled rewards.
 * - `is_user_input_required` : ${type.boolean} : A Boolean value that determines whether users must enter information to redeem the reward. Set to `true` if user input is required. See the `prompt` field.
 * - `is_max_per_stream_enabled` : ${type.boolean} : A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream (see the `max_per_stream` field). Set to `true` to limit redemptions.
 * - `max_per_stream` : ${type.int64} : The maximum number of redemptions allowed per live stream. Applied only if `is_max_per_stream_enabled` is `true`. The minimum value is 1.
 * - `is_max_per_user_per_stream_enabled` : ${type.boolean} : A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream (see `max_per_user_per_stream`). The minimum value is 1. Set to `true` to limit redemptions.
 * - `max_per_user_per_stream` : ${type.int64} : The maximum number of redemptions allowed per user per stream. Applied only if `is_max_per_user_per_stream_enabled` is `true`.
 * - `is_global_cooldown_enabled` : ${type.boolean} : A Boolean value that determines whether to apply a cooldown period between redemptions. Set to `true` to apply a cooldown period. For the duration of the cooldown period, see `global_cooldown_seconds`.
 * - `global_cooldown_seconds` : ${type.int64} : The cooldown period, in seconds. Applied only if `is_global_cooldown_enabled` is `true`. The minimum value is 1; however, for it to be shown in the Twitch UX, the minimum value is 60.
 * - `is_paused` : ${type.boolean} : A Boolean value that determines whether to pause the reward. Set to `true` to pause the reward. Viewers can't redeem paused rewards..
 * - `should_redemptions_skip_request_queue` : ${type.boolean} : A Boolean value that determines whether redemptions should be set to `"FULFILLED"` status immediately when a reward is redeemed. If `false`, status is set to `"UNFULFILLED"` and follows the normal request queue process.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list contains the single reward that you updated.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID that uniquely identifies the broadcaster.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | The ID that uniquely identifies this custom reward.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The title of the reward.  |
 * | &nbsp;├──&nbsp;prompt | ${type.string}  | The prompt shown to the viewer when they redeem the reward if user input is required. See the `is_user_input_required` field.  |
 * | &nbsp;├──&nbsp;cost | ${type.int64}  | The cost of the reward in Channel Points.  |
 * | &nbsp;├──&nbsp;image | ${type.struct}  | A set of custom images for the reward. This field is `undefined` if the broadcaster didn't upload images.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_1x | ${type.string}  | The URL to a small version of the image.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_2x | ${type.string}  | The URL to a medium version of the image.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;url_4x | ${type.string}  | The URL to a large version of the image.  |
 * | &nbsp;├──&nbsp;default_image | ${type.struct}  | A set of default images for the reward.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_1x | ${type.string}  | The URL to a small version of the image.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_2x | ${type.string}  | The URL to a medium version of the image.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;url_4x | ${type.string}  | The URL to a large version of the image.  |
 * | &nbsp;├──&nbsp;background_color | ${type.string}  | The background color to use for the reward. The color is in Hex format (for example, `"#00E5CB"`).  |
 * | &nbsp;├──&nbsp;is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward is enabled. Is `true` if enabled; otherwise, `false`. Disabled rewards aren't shown to the user.  |
 * | &nbsp;├──&nbsp;is_user_input_required | ${type.boolean}  | A Boolean value that determines whether the user must enter information when they redeem the reward. Is `true` if the user is prompted.  |
 * | &nbsp;├──&nbsp;max_per_stream_setting | ${type.struct}  | The settings used to determine whether to apply a maximum to the number of redemptions allowed per live stream.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per live stream. Is `true` if the reward applies a limit.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;max_per_stream | ${type.int64}  | The maximum number of redemptions allowed per live stream.  |
 * | &nbsp;├──&nbsp;max_per_user_per_stream_setting | ${type.struct}  | The settings used to determine whether to apply a maximum to the number of redemptions allowed per user per live stream.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_enabled | ${type.boolean}  | A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per user per live stream. Is `true` if the reward applies a limit.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;max_per_user_per_stream | ${type.int64}  | The maximum number of redemptions allowed per user per live stream.  |
 * | &nbsp;├──&nbsp;global_cooldown_setting | ${type.struct}  | The settings used to determine whether to apply a cooldown period between redemptions and the length of the cooldown.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_enabled | ${type.boolean}  | A Boolean value that determines whether to apply a cooldown period. Is `true` if a cooldown period is enabled.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;global_cooldown_seconds | ${type.int64}  | The cooldown period, in seconds.  |
 * | &nbsp;├──&nbsp;is_paused | ${type.boolean}  | A Boolean value that determines whether the reward is currently paused. Is `true` if the reward is paused. Viewers can't redeem paused rewards.  |
 * | &nbsp;├──&nbsp;is_in_stock | ${type.boolean}  | A Boolean value that determines whether the reward is currently in stock. Is `true` if the reward is in stock. Viewers can't redeem out of stock rewards.  |
 * | &nbsp;├──&nbsp;should_redemptions_skip_request_queue | ${type.boolean}  | A Boolean value that determines whether redemptions should be set to `"FULFILLED"` status immediately when a reward is redeemed. If `false`, status is set to `"UNFULFILLED"` and follows the normal request queue process.  |
 * | &nbsp;├──&nbsp;redemptions_redeemed_current_stream | ${type.number}  | The number of redemptions redeemed during the current live stream. The number counts against the `max_per_stream_setting` limit. This field is `undefined` if the broadcaster's stream isn't live or `max_per_stream_setting` isn't enabled.  |
 * | &nbsp;└──&nbsp;cooldown_expires_at | ${type.string}  | The timestamp of when the cooldown period expires. Is `undefined` if the reward isn't in a cooldown state. See the `global_cooldown_setting` field.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_channel_points_update_custom_reward(broadcaster_id, id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_channel_points_update_redemption_status
 * @desc **Twitch Endpoint:** [Update Redemption Status](https://dev.twitch.tv/docs/api/reference/#update-redemption-status)
 * 
 * This function updates a redemption's status. You may update a redemption only if its status is `"UNFULFILLED"`. The app used to create the reward is the only app that may update the redemption.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_REDEMPTIONS`.]]
 * 
 * @param {real|array} id A list of IDs that identify the redemptions to update. To specify more than one ID, pass an array containing the IDs of the redemptions you want to update. You may specify a maximum of 50 IDs. 
 * @param {string} broadcaster_id The ID of the broadcaster that's updating the redemption. This ID must match the user ID in the user access token. 
 * @param {string} reward_id The ID that identifies the reward that's been redeemed. 
 * @param {string} status The status to set the redemption to. Possible values are:
 * 
 *   * `"CANCELED"`
 *   * `"FULFILLED"`
 * 
 * Setting the status to `"CANCELED"` refunds the user's channel points.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list contains the single redemption that you updated.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID that uniquely identifies the broadcaster.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | The ID that uniquely identifies this redemption..  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | The ID of the user that redeemed the reward.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;reward | ${type.struct}  | a struct that describes the reward that the user redeemed.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | The ID that uniquely identifies the reward.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;title | ${type.string}  | The reward's title.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;prompt | ${type.string}  | The prompt displayed to the viewer if user input is required.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;cost | ${type.int64}  | The reward's cost, in Channel Points.  |
 * | &nbsp;├──&nbsp;user_input | ${type.string}  | The text that the user entered at the prompt when they redeemed the reward; otherwise, an empty string if user input was not required.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | The state of the redemption. Possible values are: `"CANCELED"`, `"FULFILLED"`, `"UNFULFILLED"`  |
 * | &nbsp;└──&nbsp;redeemed_at | ${type.string}  | The date and time of when the reward was redeemed, in RFC3339 format.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_channel_points_update_redemption_status(id, broadcaster_id, reward_id, status, callback_success, callback_failed) {}


/**
 * @func twitch_charity_get_charity_campaign
 * @desc **Twitch Endpoint:** [Get Charity Campaign](https://dev.twitch.tv/docs/api/reference/#get-charity-campaign)
 * 
 * This function gets information about the charity campaign that a broadcaster is running. For example, the campaign's fundraising goal and the current amount of donations.
 * 
 * To receive events when progress is made towards the campaign's goal or the broadcaster changes the fundraising goal, subscribe to the [channel.charity_campaign.progress](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelcharity_campaignprogress) subscription type.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_READ_CHARITY`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that's currently running a charity campaign. This ID must match the user ID in the access token. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the charity campaign that the broadcaster is currently running. The list is empty if the broadcaster is not running a charity campaign; the campaign information is not available after the campaign ends.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the charity campaign.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that's running the campaign.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;charity_name | ${type.string}  | The charity's name.  |
 * | &nbsp;├──&nbsp;charity_description | ${type.string}  | A description of the charity.  |
 * | &nbsp;├──&nbsp;charity_logo | ${type.string}  | A URL to an image of the charity's logo. The image's type is PNG and its size is 100px X 100px.  |
 * | &nbsp;├──&nbsp;charity_website | ${type.string}  | A URL to the charity's website.  |
 * | &nbsp;├──&nbsp;current_amount | ${type.struct}  | The current amount of donations that the campaign has received.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;value | ${type.number}  | The monetary amount. The amount is specified in the currency's minor unit. For example, the minor units for USD is cents, so if the amount is $5.50 USD, `value` is set to 550.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;decimal_places | ${type.number}  | The number of decimal places used by the currency. For example, USD uses two decimal places. Use this number to translate `value` from minor units to major units by using the formula: `value / 10^decimal_places`  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;currency | ${type.string}  | The ISO-4217 three-letter currency code that identifies the type of currency in `value`.  |
 * | &nbsp;└──&nbsp;target_amount | ${type.struct}  | The campaign's fundraising goal. This field is `undefined` if the broadcaster has not defined a fundraising goal.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;value | ${type.number}  | The monetary amount. The amount is specified in the currency's minor unit. For example, the minor units for USD is cents, so if the amount is $5.50 USD, `value` is set to 550.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;decimal_places | ${type.number}  | The number of decimal places used by the currency. For example, USD uses two decimal places. Use this number to translate `value` from minor units to major units by using the formula: `value / 10^decimal_places`  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;currency | ${type.string}  | The ISO-4217 three-letter currency code that identifies the type of currency in `value`.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_charity_get_charity_campaign(broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_charity_get_charity_campaign_donations
 * @desc **Twitch Endpoint:** [Get Charity Campaign Donations](https://dev.twitch.tv/docs/api/reference/#get-charity-campaign-donations)
 * 
 * This function gets the list of donations that users have made to the broadcaster's active charity campaign.
 * 
 * To receive events as donations occur, subscribe to the [channel.charity_campaign.donate](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelcharity_campaigndonate) subscription type.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_READ_CHARITY`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that's currently running a charity campaign. This ID must match the user ID in the access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the donations that users have made to the broadcaster's charity campaign.  The list is empty if the broadcaster is not currently running a charity campaign; the donation information is not available after the campaign ends.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the donation. The ID is unique across campaigns.  |
 * | &nbsp;├──&nbsp;campaign_id | ${type.string}  | An ID that identifies the charity campaign that the donation applies to.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | An ID that identifies a user that donated money to the campaign.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;amount | ${type.struct}  | a struct that contains the amount of money that the user donated.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;value | ${type.number}  | The monetary amount. The amount is specified in the currency's minor unit. For example, the minor units for USD is cents, so if the amount is $5.50 USD, `value` is set to 550.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;decimal_places | ${type.number}  | The number of decimal places used by the currency. For example, USD uses two decimal places. Use this number to translate `value` from minor units to major units by using the formula:`value / 10^decimal_places`  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;currency | ${type.string}  | The ISO-4217 three-letter currency code that identifies the type of currency in `value`.  |
 * | pagination | ${type.struct}  | a struct that contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_charity_get_charity_campaign_donations(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_chat_get_chatters
 * @desc **Twitch Endpoint:** [func_name](https://dev.twitch.tv/docs/api/reference/#get-chatters)
 * 
 * This function gets the list of users that are connected to the broadcaster's chat session.
 * 
 * [[Note: There is a delay between when users join and leave a chat and when the list is updated accordingly.]]
 * 
 * To determine whether a user is a moderator or VIP, use ${function.twitch_moderation_get_moderators} and ${function.twitch_moderation_get_vips}. You can check the roles of up to 100 users.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_READ_CHATTERS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose list of chatters you want to get. 
 * @param {string} moderator_id The ID of the broadcaster or one of the broadcaster's moderators. This ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 1,000. The default is 100.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users that are connected to the broadcaster's chat room. The list is empty if no users are connected to the chat room.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | The ID of a user that's connected to the broadcaster's chat room.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | &nbsp;└──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * | total | ${type.number}  | The total number of users that are connected to the broadcaster's chat room. As you page through the list, the number of users may change as users join and leave the chat room.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_get_chatters(broadcaster_id, moderator_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_chat_get_channel_emotes
 * @desc **Twitch Endpoint:** [Get Channel Emotes](https://dev.twitch.tv/docs/api/reference/#get-channel-emotes)
 * 
 * This function gets the broadcaster's list of custom emotes. Broadcasters create these custom emotes for users who subscribe to or follow the channel or cheer Bits in the channel's chat window. [Learn More](https://dev.twitch.tv/docs/irc/emotes)
 * 
 * For information about the custom emotes, see [subscriber emotes](https://help.twitch.tv/s/article/subscriber-emote-guide), [Bits tier emotes](https://help.twitch.tv/s/article/custom-bit-badges-guide?language=bg#slots), and [follower emotes](https://blog.twitch.tv/en/2021/06/04/kicking-off-10-years-with-our-biggest-emote-update-ever/).
 * 
 * [[Note: With the exception of custom follower emotes, users may use custom emotes in any Twitch chat.]]
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string} broadcaster_id An ID that identifies the broadcaster whose emotes you want to get. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of emotes that the specified broadcaster created. If the broadcaster hasn't created custom emotes, the list is empty.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this emote.  |
 * | &nbsp;├──&nbsp;name | ${type.string}  | The name of the emote. This is the name that viewers type in the chat window to get the emote to appear.  |
 * | &nbsp;├──&nbsp;images | ${type.struct}  | The image URLs for the emote. These image URLs always provide a static, non-animated emote image with a light background. **NOTE:** You should use the templated URL in the `template` field to fetch the image instead of using these URLs.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_1x | ${type.string}  | A URL to the small version (28px x 28px) of the emote.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_2x | ${type.string}  | A URL to the medium version (56px x 56px) of the emote.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;url_4x | ${type.string}  | A URL to the large version (112px x 112px) of the emote.  |
 * | &nbsp;├──&nbsp;tier | ${type.string}  | The subscriber tier at which the emote is unlocked. This field contains the tier information only if `emote_type` is set to `"subscriptions"`, otherwise, it's an empty string.  |
 * | &nbsp;├──&nbsp;emote_type | ${type.string}  | The type of emote. The possible values are: `"bitstier"` — A custom Bits tier emote, `"follower"` — A custom follower emote, `"subscriptions"` — A custom subscriber emote.  |
 * | &nbsp;├──&nbsp;emote_set_id | ${type.string}  | An ID that identifies the emote set that the emote belongs to.  |
 * | &nbsp;├──&nbsp;format | ${type.array} of ${type.string}  | The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only `"static"`. But if the emote is available as a static PNG and an animated GIF, the array contains `"static"` and `"animated"`. The possible formats are: `"animated"` — An animated GIF is available for this emote, `"static"` — A static PNG file is available for this emote.  |
 * | &nbsp;├──&nbsp;scale | ${type.array} of ${type.string}  | The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0. Possible sizes are: 1.0 — A small version (28px x 28px) is available, 2.0 — A medium version (56px x 56px) is available, 3.0 — A large version (112px x 112px) is available.  |
 * | &nbsp;└──&nbsp;theme_mode | ${type.array} of ${type.string}  | The background themes that the emote is available in. Possible themes are: `"dark"`, `"light"`  |
 * | template | ${type.string}  | A templated URL. Use the values from the `id`, `format`, `scale`, and `theme_mode` fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes, see [Emote CDN URL format](https://dev.twitch.tv/docs/irc/emotes#cdn-template). You should use this template instead of using the URLs in the `images` struct.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_get_channel_emotes(broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_chat_get_global_emotes
 * @desc **Twitch Endpoint:** [Get Global Emotes](https://dev.twitch.tv/docs/api/reference/#get-global-emotes)
 * 
 * This function gets the list of [global emotes](https://www.twitch.tv/creatorcamp/en/learn-the-basics/emotes/). Global emotes are Twitch-created emotes that users can use in any Twitch chat.
 * 
 * [Learn More](https://dev.twitch.tv/docs/irc/emotes)
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of global emotes.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this emote.  |
 * | &nbsp;├──&nbsp;name | ${type.string}  | The name of the emote. This is the name that viewers type in the chat window to get the emote to appear.  |
 * | &nbsp;├──&nbsp;images | ${type.struct}  | The image URLs for the emote. These image URLs always provide a static, non-animated emote image with a light background. **NOTE**: You should use the templated URL in the `template` field to fetch the image instead of using these URLs.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_1x | ${type.string}  | A URL to the small version (28px x 28px) of the emote.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_2x | ${type.string}  | A URL to the medium version (56px x 56px) of the emote.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;url_4x | ${type.string}  | A URL to the large version (112px x 112px) of the emote.  |
 * | &nbsp;├──&nbsp;format | ${type.array} of ${type.string}  | The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only `"static"`. But if the emote is available as a static PNG and an animated GIF, the array contains `"static"` and `"animated"`. The possible formats are: `"animated"` — An animated GIF is available for this emote, `"static"` — A static PNG file is available for this emote.  |
 * | &nbsp;├──&nbsp;scale | ${type.array} of ${type.string}  | The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0. Possible sizes are:1.0 — A small version (28px x 28px) is available.2.0 — A medium version (56px x 56px) is available.3.0 — A large version (112px x 112px) is available.  |
 * | &nbsp;└──&nbsp;theme_mode | ${type.array} of ${type.string}  | The background themes that the emote is available in. Possible themes are: `"dark"`, `"light"`  |
 * | template | ${type.string}  | A templated URL. Use the values from the `id`, `format`, `scale`, and `theme_mode` fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes, see [Emote CDN URL format](https://dev.twitch.tv/docs/irc/emotes#cdn-template). You should use this template instead of using the URLs in the `images` struct.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_get_global_emotes(callback_success, callback_failed) {}


/**
 * @func twitch_chat_get_emote_sets
 * @desc **Twitch Endpoint:** [Get Emote Sets](https://dev.twitch.tv/docs/api/reference/#get-emote-sets)
 * 
 * This function gets emotes for one or more specified emote sets.
 * 
 * An emote set groups emotes that have a similar context. For example, Twitch places all the subscriber emotes that a broadcaster uploads for their channel in the same emote set.
 * 
 * [Learn More](https://dev.twitch.tv/docs/irc/emotes)
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string|array} emote_set_id An ID that identifies the emote set to get. Pass an array of IDs to specify multiple emote sets. You may specify a maximum of 25 IDs. The response contains only the IDs that were found and ignores duplicate IDs. To get emote set IDs, use ${function.twitch_chat_get_channel_emotes}.
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of emotes found in the specified emote sets. The list is empty if none of the IDs were found. The list is in the same order as the set IDs specified in the request. Each set contains one or more emoticons.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that uniquely identifies this emote.  |
 * | &nbsp;├──&nbsp;name | ${type.string}  | The name of the emote. This is the name that viewers type in the chat window to get the emote to appear.  |
 * | &nbsp;├──&nbsp;images | ${type.struct}  | The image URLs for the emote. These image URLs always provide a static, non-animated emote image with a light background. **NOTE**: You should use the templated URL in the `template` field to fetch the image instead of using these URLs.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_1x | ${type.string}  | A URL to the small version (28px x 28px) of the emote.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;url_2x | ${type.string}  | A URL to the medium version (56px x 56px) of the emote.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;url_4x | ${type.string}  | A URL to the large version (112px x 112px) of the emote.  |
 * | &nbsp;├──&nbsp;emote_type | ${type.string}  | The type of emote. The possible values are: `"bitstier"` - A Bits tier emote, `"follower"` - A follower emote, `"subscriptions"` - A subscriber emote.  |
 * | &nbsp;├──&nbsp;emote_set_id | ${type.string}  | An ID that identifies the emote set that the emote belongs to.  |
 * | &nbsp;├──&nbsp;owner_id | ${type.string}  | The ID of the broadcaster who owns the emote.  |
 * | &nbsp;├──&nbsp;format | ${type.array} of ${type.string}  | The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only `"static"`. But if the emote is available as a static PNG and an animated GIF, the array contains `"static"` and `"animated"`. The possible formats are: `"animated"` - An animated GIF is available for this emote, `"static"` - A static PNG file is available for this emote.  |
 * | &nbsp;├──&nbsp;scale | ${type.array} of ${type.string}  | The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0. Possible sizes are: 1.0 - A small version (28px x 28px) is available, 2.0 - A medium version (56px x 56px) is available, 3.0 - A large version (112px x 112px) is available.  |
 * | &nbsp;└──&nbsp;theme_mode | ${type.array} of ${type.string}  | The background themes that the emote is available in. Possible themes are: `"dark"`, `"light"`  |
 * | template | ${type.string}  | A templated URL. Use the values from the `id`, `format`, `scale`, and `theme_mode` fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes, see [Emote CDN URL format](https://dev.twitch.tv/docs/irc/emotes#cdn-template). You should use this template instead of using the URLs in the `images` struct.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_get_emote_sets(emote_set_id, callback_success, callback_failed) {}


/**
 * @func twitch_chat_get_channel_chat_badges
 * @desc **Twitch Endpoint:** [Get Channel Chat Badges](https://dev.twitch.tv/docs/api/reference/#get-channel-chat-badges)
 * 
 * This function gets the broadcaster's list of custom chat badges. The list is empty if the broadcaster hasn't created custom chat badges. For information about custom badges, see [subscriber badges](https://help.twitch.tv/s/article/subscriber-badge-guide) and [Bits badges](https://help.twitch.tv/s/article/custom-bit-badges-guide).
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose chat badges you want to get. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of chat badges. The list is sorted in ascending order by `set_id`, and within a set, the list is sorted in ascending order by `id`.  |
 * | &nbsp;├──&nbsp;set_id | ${type.string}  | An ID that identifies this set of chat badges. For example, Bits or Subscriber.  |
 * | &nbsp;└──&nbsp;versions | ${type.array}  | The list of chat badges in this set.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this version of the badge. The ID can be any value. For example, for Bits, the ID is the Bits tier level, but for World of Warcraft, it could be Alliance or Horde.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;image_url_1x | ${type.string}  | A URL to the small version (18px x 18px) of the badge.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;image_url_2x | ${type.string}  | A URL to the medium version (36px x 36px) of the badge.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;image_url_4x | ${type.string}  | A URL to the large version (72px x 72px) of the badge.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;title | ${type.string}  | The title of the badge.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;description | ${type.string}  | The description of the badge.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;click_action | ${type.string}  | The action to take when clicking on the badge. Set to `undefined` if no action is specified.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;click_url | ${type.string}  | The URL to navigate to when clicking on the badge. Set to `undefined` if no URL is specified.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_get_channel_chat_badges(broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_chat_get_global_chat_badges
 * @desc **Twitch Endpoint:** [Get Global Chat Badges](https://dev.twitch.tv/docs/api/reference/#get-global-chat-badges)
 * 
 * This function gets Twitch's list of chat badges, which users may use in any channel's chat room. For information about chat badges, see [Twitch Chat Badges Guide](https://help.twitch.tv/s/article/twitch-chat-badges-guide).
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of chat badges. The list is sorted in ascending order by `set_id`, and within a set, the list is sorted in ascending order by `id`.  |
 * | &nbsp;├──&nbsp;set_id | ${type.string}  | An ID that identifies this set of chat badges. For example, Bits or Subscriber.  |
 * | &nbsp;└──&nbsp;versions | ${type.array}  | The list of chat badges in this set.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this version of the badge. The ID can be any value. For example, for Bits, the ID is the Bits tier level, but for World of Warcraft, it could be Alliance or Horde.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;image_url_1x | ${type.string}  | A URL to the small version (18px x 18px) of the badge.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;image_url_2x | ${type.string}  | A URL to the medium version (36px x 36px) of the badge.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;image_url_4x | ${type.string}  | A URL to the large version (72px x 72px) of the badge.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;title | ${type.string}  | The title of the badge.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;description | ${type.string}  | The description of the badge.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;click_action | ${type.string}  | The action to take when clicking on the badge. Set to `undefined` if no action is specified.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;click_url | ${type.string}  | The URL to navigate to when clicking on the badge. Set to `undefined` if no URL is specified.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_get_global_chat_badges(callback_success, callback_failed) {}


/**
 * @func twitch_chat_get_chat_settings
 * @desc **Twitch Endpoint:** [Get Chat Settings](https://dev.twitch.tv/docs/api/reference/#get-chat-settings)
 * 
 * This function gets the broadcaster's chat settings.
 * 
 * For an overview of chat settings, see [Chat Commands for Broadcasters and Moderators](https://help.twitch.tv/s/article/chat-commands#AllMods) and [Moderator Preferences](https://help.twitch.tv/s/article/setting-up-moderation-for-your-twitch-channel#modpreferences).
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose chat settings you want to get. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `moderator_id` : ${type.string} : The ID of the broadcaster or one of the broadcaster's moderators. This field is required only if you want to include the `non_moderator_chat_delay` and `non_moderator_chat_delay_duration` settings in the response. If you specify this field, this ID must match the user ID in the user access token.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of chat settings. It contains a single struct with all the settings.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID of the broadcaster specified in the request.  |
 * | &nbsp;├──&nbsp;emote_mode | ${type.boolean}  | A Boolean value that determines whether chat messages must contain only emotes. Is `true` if chat messages may contain only emotes; otherwise, `false`.  |
 * | &nbsp;├──&nbsp;follower_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster restricts the chat room to followers only. Is `true` if the broadcaster restricts the chat room to followers only; otherwise, `false`. See the `follower_mode_duration` field for how long users must follow the broadcaster before being able to participate in the chat room.  |
 * | &nbsp;├──&nbsp;follower_mode_duration | ${type.number}  | The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. Is `undefined` if `follower_mode` is `false`.  |
 * | &nbsp;├──&nbsp;moderator_id | ${type.string}  | The moderator's ID. The response includes this field only if the request specifies a user access token that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATION_READ_CHAT_SETTINGS`.  |
 * | &nbsp;├──&nbsp;non_moderator_chat_delay | ${type.boolean}  | A Boolean value that determines whether the broadcaster adds a short delay before chat messages appear in the chat room. This gives chat moderators and bots a chance to remove them before viewers can see the message. See the `non_moderator_chat_delay_duration` field for the length of the delay. Is `true` if the broadcaster applies a delay; otherwise, `false`. The response includes this field only if the request specifies a user access token that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATION_READ_CHAT_SETTINGS`.and the user in the `moderator_id` parameter is one of the broadcaster's moderators.  |
 * | &nbsp;├──&nbsp;non_moderator_chat_delay_duration | ${type.number}  | The amount of time, in seconds, that messages are delayed before appearing in chat. Is `undefined` if `non_moderator_chat_delay` is `false`.The response includes this field only if the request specifies a user access token that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_READ_CHAT_SETTINGS`.and the user in the `moderator_id` parameter is one of the broadcaster's moderators.  |
 * | &nbsp;├──&nbsp;slow_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages. Is `true` if the broadcaster applies a delay; otherwise, `false`. See the `slow_mode_wait_time` field for the delay.  |
 * | &nbsp;├──&nbsp;slow_mode_wait_time | ${type.number}  | The amount of time, in seconds, that users must wait between sending messages. Is `undefined` if `slow_mode` is `false`.  |
 * | &nbsp;├──&nbsp;subscriber_mode | ${type.boolean}  | A Boolean value that determines whether only users that subscribe to the broadcaster's channel may talk in the chat room. Is `true` if the broadcaster restricts the chat room to subscribers only; otherwise, `false`.  |
 * | &nbsp;└──&nbsp;unique_chat_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room. Is `true` if the broadcaster requires unique messages only; otherwise, `false`.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_get_chat_settings(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_chat_get_user_emotes
 * @desc **Twitch Endpoint:** [Get User Emotes](https://dev.twitch.tv/docs/api/reference/#get-user-emotes)
 * 
 * This function retrieves emotes available to the user across all channels.
 * 
 * * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_EMOTES`.
 * * Parameter `user_id` must match the `user_id` in the user access token.
 * 
 * @param {string} user_id The ID of the user. This ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `after` : ${type.string} : The cursor used to get the next page of results. The Pagination struct in the response contains the cursor's value.
 * - `broadcaster_id` : ${type.string} : The User ID of a broadcaster you wish to get follower emotes of. Using this parameter will guarantee inclusion of the broadcaster's follower emotes in the response body. **Note:** If the user specified in `user_id` is subscribed to the broadcaster specified, their follower emotes will appear in the response body regardless if this parameter is used.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  |   |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that uniquely identifies this emote.  |
 * | &nbsp;├──&nbsp;name | ${type.string}  | The User ID of broadcaster whose channel is receiving the unban request.  |
 * | &nbsp;├──&nbsp;emote_type | ${type.string}  | The type of emote. The possible values are: `"none"` — No emote type was assigned to this emote, `"bitstier"` — A Bits tier emote, `"follower"` — A follower emote, `"subscriptions"` — A subscriber emote, `"channelpoints"` — An emote granted by using channel points, `"rewards"` — An emote granted to the user through a special event, `"hypetrain"` — An emote granted for participation in a Hype Train, `"prime"` — An emote granted for linking an Amazon Prime account, `"turbo"` — An emote granted for having Twitch Turbo, `"smilies"` — Emoticons supported by Twitch, `"globals"` — An emote accessible by everyone, `"owl2019"` — Emotes related to Overwatch League 2019, `"twofactor"` — Emotes granted by enabling two-factor authentication on an account, `"limitedtime"` — Emotes that were granted for only a limited time.  |
 * | &nbsp;├──&nbsp;emote_set_id | ${type.string}  | An ID that identifies the emote set that the emote belongs to.  |
 * | &nbsp;├──&nbsp;owner_id | ${type.string}  | The ID of the broadcaster who owns the emote.  |
 * | &nbsp;├──&nbsp;format | ${type.array} of ${type.string}  | The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only `"static"`. But if the emote is available as a static PNG and an animated GIF, the array contains `"static"` and `"animated"`. `"animated"` —  An animated GIF is available for this emote, `"static"` — A static PNG file is available for this emote.  |
 * | &nbsp;├──&nbsp;scale | ${type.array} of ${type.string}  | The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0. 1.0 —  A small version (28px x 28px) is available, 2.0 — A medium version (56px x 56px) is available, 3.0 —  A large version (112px x 112px) is available.  |
 * | &nbsp;└──&nbsp;theme_mode | ${type.array} of ${type.string}  | The background themes that the emote is available in: `"dark"`, `"light"`  |
 * | template | ${type.string}  | A templated URL. Uses the values from the `id`, `format`, `scale`, and `theme_mode` fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote.  For information about what the template looks like and how to use it to fetch emotes, see [Emote CDN URL format](https://dev.twitch.tv/docs/irc/emotes#cdn-template).  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through.  For more information about pagination support, see Twitch API Guide - Pagination.  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_get_user_emotes(user_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_chat_update_chat_settings
 * @desc **Twitch Endpoint:** [Update Chat Settings](https://dev.twitch.tv/docs/api/reference/#update-chat-settings)
 * 
 * This function updates the broadcaster's chat settings.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_MANAGE_CHAT_SETTINGS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose chat settings you want to update. 
 * @param {string} moderator_id The ID of a user that has permission to moderate the broadcaster's chat room, or the broadcaster's ID if they're making the update. This ID must match the user ID in the user access token. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | emote_mode | ${type.boolean}  | A Boolean value that determines whether chat messages must contain only emotes. Set to `true` if only emotes are allowed; otherwise, `false`. The default is `false`.  |
 * | follower_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster restricts the chat room to followers only. Set to `true` if the broadcaster restricts the chat room to followers only; otherwise, `false`. The default is `true`.To specify how long users must follow the broadcaster before being able to participate in the chat room, see the `follower_mode_duration` field.  |
 * | follower_mode_duration | ${type.number}  | The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. Set only if `follower_mode` is `true`. Possible values are: 0 (no restriction) through 129600 (3 months). The default is 0.  |
 * | non_moderator_chat_delay | ${type.boolean}  | A Boolean value that determines whether the broadcaster adds a short delay before chat messages appear in the chat room. This gives chat moderators and bots a chance to remove them before viewers can see the message. Set to `true` if the broadcaster applies a delay; otherwise, `false`. The default is `false`. To specify the length of the delay, see the `non_moderator_chat_delay_duration` field.  |
 * | non_moderator_chat_delay_duration | ${type.number}  | The amount of time, in seconds, that messages are delayed before appearing in chat. Set only if `non_moderator_chat_delay` is `true`. Possible values are: 2  -  2 second delay (recommended), 4  -  4 second delay, 6  -  6 second delay  |
 * | slow_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages. Set to `true` if the broadcaster applies a wait period between messages; otherwise, `false`. The default is `false`.To specify the delay, see the `slow_mode_wait_time` field.  |
 * | slow_mode_wait_time | ${type.number}  | The amount of time, in seconds, that users must wait between sending messages. Set only if `slow_mode` is `true`. Possible values are: 3 (3 second delay) through 120 (2 minute delay). The default is 30 seconds.  |
 * | subscriber_mode | ${type.boolean}  | A Boolean value that determines whether only users that subscribe to the broadcaster's channel may talk in the chat room. Set to `true` if the broadcaster restricts the chat room to subscribers only; otherwise, `false`. The default is `false`.  |
 * | unique_chat_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room. Set to `true` if the broadcaster allows only unique messages; otherwise, `false`. The default is `false`.  |
 * | data | ${type.array}  | The list of chat settings. The list contains a single struct with all the settings.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID of the broadcaster specified in the request.  |
 * | &nbsp;├──&nbsp;emote_mode | ${type.boolean}  | A Boolean value that determines whether chat messages must contain only emotes. Is `true` if chat messages may contain only emotes; otherwise, `false`.  |
 * | &nbsp;├──&nbsp;follower_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster restricts the chat room to followers only. Is `true` if the broadcaster restricts the chat room to followers only; otherwise, `false`. See the follower_mode_duration field for how long users must follow the broadcaster before being able to participate in the chat room.  |
 * | &nbsp;├──&nbsp;follower_mode_duration | ${type.number}  | The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. Is `undefined` if `follower_mode` is `false`.  |
 * | &nbsp;├──&nbsp;moderator_id | ${type.string}  | The moderator's ID. The response includes this field only if the request specifies a user access token that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_READ_CHAT_SETTINGS`.  |
 * | &nbsp;├──&nbsp;non_moderator_chat_delay | ${type.boolean}  | A Boolean value that determines whether the broadcaster adds a short delay before chat messages appear in the chat room. This gives chat moderators and bots a chance to remove them before viewers can see the message. See the `non_moderator_chat_delay_duration` field for the length of the delay. Is `true` if the broadcaster applies a delay; otherwise, `false`.  |
 * | &nbsp;├──&nbsp;non_moderator_chat_delay_duration | ${type.number}  | The amount of time, in seconds, that messages are delayed before appearing in chat. Is `undefined` if `non_moderator_chat_delay` is `false`.  |
 * | &nbsp;├──&nbsp;slow_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages. Is `true` if the broadcaster applies a delay; otherwise, `false`. See the `slow_mode_wait_time` field for the delay.  |
 * | &nbsp;├──&nbsp;slow_mode_wait_time | ${type.number}  | The amount of time, in seconds, that users must wait between sending messages. Is `undefined` if `slow_mode` is `false`.  |
 * | &nbsp;├──&nbsp;subscriber_mode | ${type.boolean}  | A Boolean value that determines whether only users that subscribe to the broadcaster's channel may talk in the chat room. Is `true` if the broadcaster restricts the chat room to subscribers only; otherwise, `false`.  |
 * | &nbsp;└──&nbsp;unique_chat_mode | ${type.boolean}  | A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room. Is `true` if the broadcaster requires unique messages only; otherwise, `false`.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_update_chat_settings(broadcaster_id, moderator_id, callback_success, callback_failed) {}


/**
 * @func twitch_chat_send_chat_announcement
 * @desc **Twitch Endpoint:** [Send Chat Announcement](https://dev.twitch.tv/docs/api/reference/#send-chat-announcement)
 * 
 * This function sends an announcement to the broadcaster's chat room.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_MANAGE_ANNOUNCEMENTS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the chat room to send the announcement to. 
 * @param {string} moderator_id The ID of a user who has permission to moderate the broadcaster's chat room, or the broadcaster's ID if they're sending the announcement. This ID must match the user ID in the user access token. 
 * @param {string} message The announcement to make in the broadcaster's chat room. Announcements are limited to a maximum of 500 characters; announcements longer than 500 characters are truncated. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `color` : ${type.string} : The color used to highlight the announcement. Possible case-sensitive values are: `"blue"`, `"green"`, `"orange"`, `"purple"`, `"primary"` (default). If `color` is set to `"primary"` or is not set, the channel's accent color is used to highlight the announcement (see **Profile Accent Color** under [profile settings](https://www.twitch.tv/settings/profile), **Channel and Videos**, and **Brand**).
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_send_chat_announcement(broadcaster_id, moderator_id, message, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_chat_send_a_shoutout
 * @desc **Twitch Endpoint:** [Send a Shoutout](https://dev.twitch.tv/docs/api/reference/#send-a-shoutout)
 * 
 * This function sends a Shoutout to the specified broadcaster. Typically, you send Shoutouts when you or one of your moderators notice another broadcaster in your chat, the other broadcaster is coming up in conversation, or after they raid your broadcast.
 * 
 * Twitch's Shoutout feature is a great way for you to show support for other broadcasters and help them grow. Viewers who do not follow the other broadcaster will see a pop-up Follow button in your chat that they can click to follow the other broadcaster. [Learn More](https://help.twitch.tv/s/article/shoutouts)
 * 
 * **Rate Limits** The broadcaster may send a Shoutout once every 2 minutes. They may send the same broadcaster a Shoutout once every 60 minutes.
 * 
 * To receive notifications when a Shoutout is sent or received, subscribe to the [channel.shoutout.create](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshoutoutcreate) and [channel.shoutout.receive](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshoutoutreceive) subscription types. The **channel.shoutout.create** event includes cooldown periods that indicate when the broadcaster may send another Shoutout without exceeding the endpoint's rate limit.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_MANAGE_SHOUTOUTS`.]]
 * 
 * @param {string} from_broadcaster_id The ID of the broadcaster that's sending the Shoutout. 
 * @param {string} to_broadcaster_id The ID of the broadcaster that's receiving the Shoutout. 
 * @param {string} moderator_id The ID of the broadcaster or a user that is one of the broadcaster's moderators. This ID must match the user ID in the access token. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_send_a_shoutout(from_broadcaster_id, to_broadcaster_id, moderator_id, callback_success, callback_failed) {}


/**
 * @func twitch_chat_send_chat_message
 * @desc **Twitch Endpoint:** [Send Chat Message](https://dev.twitch.tv/docs/api/reference/#send-chat-message)
 * 
 * This function sends a message to the broadcaster's chat room.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or user access token that includes the `TWITCH_SCOPE_USER_WRITE_CHAT` scope. If app access token used, then additionally requires `TWITCH_SCOPE_USER_BOT` scope from chatting user, and either `TWITCH_SCOPE_CHANNEL_BOT` scope from broadcaster or moderator status.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose chat room the message will be sent to. 
 * @param {string} sender_id The ID of the user sending the message. This ID must match the user ID in the user access token. 
 * @param {string} message The message to send. The message is limited to a maximum of 500 characters. Chat messages can also include emoticons. To include emoticons, use the name of the emote. The names are case sensitive. Don't include colons around the name (e.g., `":bleedPurple:"`). If Twitch recognizes the name, Twitch converts the name to the emote before writing the chat message to the chat room 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `reply_parent_message_id` : ${type.string} : The ID of the chat message being replied to.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  |   |
 * | &nbsp;├──&nbsp;message_id | ${type.string}  | The message id for the message that was sent.  |
 * | &nbsp;├──&nbsp;is_sent | ${type.boolean}  | If the message passed all checks and was sent.  |
 * | &nbsp;└──&nbsp;drop_reason | ${type.struct}  | The reason the message was dropped, if any.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;code | ${type.string}  | Code for why the message was dropped.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;message | ${type.string}  | Message for why the message was dropped.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_send_chat_message(broadcaster_id, sender_id, message, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_chat_get_user_chat_color
 * @desc **Twitch Endpoint:** [Get User Chat Color](https://dev.twitch.tv/docs/api/reference/#get-user-chat-color)
 * 
 * This function gets the color used for the user's name in chat.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {real|array} user_id The ID of the user whose username color you want to get. To specify more than one user, pass an array with the ID of each user to get. The maximum number of IDs that you may specify is 100.The API ignores duplicate IDs and IDs that weren't found. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users and the color code they use for their name.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | An ID that uniquely identifies the user.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | &nbsp;└──&nbsp;color | ${type.string}  | The Hex color code that the user uses in chat for their name. If the user hasn't specified a color in their settings, the string is empty.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_get_user_chat_color(user_id, callback_success, callback_failed) {}


/**
 * @func twitch_chat_update_user_chat_color
 * @desc **Twitch Endpoint:** [Update User Chat Color](https://dev.twitch.tv/docs/api/reference/#update-user-chat-color)
 * 
 * This function updates the color used for the user's name in chat.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_MANAGE_CHAT_COLOR`.]]
 * 
 * @param {string} user_id The ID of the user whose chat color you want to update. This ID must match the user ID in the access token. 
 * @param {string} color The color to use for the user's name in chat. All users may specify one of the following named color values: `"blue"`, `"blue_violet"`, `"cadet_blue"`, `"chocolate"`, `"coral"`, `"dodger_blue"`, `"firebrick"`, `"golden_rod"`, `"green"`, `"hot_pink"`, `"orange_red"`, `"red"`, `"sea_green"`, `"spring_green"`, `"yellow_green"`. Turbo and Prime users may specify a named color or a Hex color code like `"#9146FF"`. If you use a Hex color code, remember to URL encode it. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_chat_update_user_chat_color(user_id, color, callback_success, callback_failed) {}


/**
 * @func twitch_clips_create_clip
 * @desc **Twitch Endpoint:** [func_name](https://dev.twitch.tv/docs/api/reference/#create-clip)
 * 
 * This function creates a clip from the broadcaster's stream.
 * 
 * This API captures up to 90 seconds of the broadcaster's stream. The 90 seconds spans the point in the stream from when you called the API. For example, if you call the API at the 4:00 minute mark, the API captures from approximately the 3:35 mark to approximately the 4:05 minute mark. Twitch tries its best to capture 90 seconds of the stream, but the actual length may be less. This may occur if you begin capturing the clip near the beginning or end of the stream.
 * 
 * By default, Twitch publishes up to the last 30 seconds of the 90 seconds window and provides a default title for the clip. To specify the title and the portion of the 90 seconds window that's used for the clip, use the URL in the response's `edit_url` field. You can specify a clip that's from 5 seconds to 60 seconds in length. The URL is valid for up to 24 hours or until the clip is published, whichever comes first.
 * 
 * Creating a clip is an asynchronous process that can take a short amount of time to complete. To determine whether the clip was successfully created, call ${function.twitch_clips_get_clips} using the clip ID that this request returned. If ${function.twitch_clips_get_clips} returns the clip, the clip was successfully created. If after 15 seconds ${function.twitch_clips_get_clips} hasn't returned the clip, assume it failed.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CLIPS_EDIT`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose stream you want to create a clip from. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `has_delay` : ${type.boolean} : A Boolean value that determines whether the API captures the clip at the moment the viewer requests it or after a delay. If `false` (default), Twitch captures the clip at the moment the viewer requests it (this is the same clip experience as the Twitch UX). If `true`, Twitch adds a delay before capturing the clip (this basically shifts the capture window to the right slightly).
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | edit_url | ${type.string}  | A URL that you can use to edit the clip's title, identify the part of the clip to publish, and publish the clip. [Learn More](https://help.twitch.tv/s/article/how-to-use-clips) The URL is valid for up to 24 hours or until the clip is published, whichever comes first.  |
 * | id | ${type.string}  | An ID that uniquely identifies the clip.  |
 * 
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_clips_create_clip(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_clips_get_clips
 * @desc **Twitch Endpoint:** [func_name](https://dev.twitch.tv/docs/api/reference/#get-clips)
 * 
 * This function gets one or more video clips that were captured from streams. For information about clips, see [How to use clips](https://help.twitch.tv/s/article/how-to-use-clips).
 * 
 * The `id`, `game_id`, and `broadcaster_id` parameters are mutually exclusive.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string} broadcaster_id An ID that identifies the broadcaster whose video clips you want to get. Use this parameter to get clips that were captured from the broadcaster's streams. 
 * @param {string} game_id An ID that identifies the game whose clips you want to get. Use this parameter to get clips that were captured from streams that were playing this game. 
 * @param {string|array} id An ID that identifies the clip to get. To specify more than one ID, pass an array with the ID of each clip you want to get. You may specify a maximum of 100 IDs. The API ignores duplicate IDs and IDs that aren't found. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `started_at` : ${type.string} : The start date used to filter clips. The API returns only clips within the start and end date window. Specify the date and time in RFC3339 format.
 * - `ended_at` : ${type.string} : The end date used to filter clips. If not specified, the time window is the start date plus one week. Specify the date and time in RFC3339 format.
 * - `first` : ${type.number} : The maximum number of clips to return per page in the response. The minimum page size is 1 clip per page and the maximum is 100. The default is 20.
 * - `before` : ${type.string} : The cursor used to get the previous page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * - `is_featured` : ${type.boolean} : A Boolean value that determines whether the response includes featured clips. If `true`, returns only clips that are featured. If `false`, returns only clips that aren't featured. All clips are returned if this parameter is not present.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of video clips. For clips returned by `game_id` or `broadcaster_id`, the list is in descending order by view count. For lists returned by `id`, the list is in the same order as the input IDs.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that uniquely identifies the clip.  |
 * | &nbsp;├──&nbsp;url | ${type.string}  | A URL to the clip.  |
 * | &nbsp;├──&nbsp;embed_url | ${type.string}  | A URL that you can use in an iframe to embed the clip (see [Embedding Video and Clips](https://dev.twitch.tv/docs/embed/video-and-clips/)).  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that the video was clipped from.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;creator_id | ${type.string}  | An ID that identifies the user that created the clip.  |
 * | &nbsp;├──&nbsp;creator_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;video_id | ${type.string}  | An ID that identifies the video that the clip came from. This field contains an empty string if the video is not available.  |
 * | &nbsp;├──&nbsp;game_id | ${type.string}  | The ID of the game that was being played when the clip was created.  |
 * | &nbsp;├──&nbsp;language | ${type.string}  | The ISO 639-1 two-letter language code that the broadcaster broadcasts in. For example, `"en"` for English. The value is `"other"` if the broadcaster uses a language that Twitch doesn't support.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The title of the clip.  |
 * | &nbsp;├──&nbsp;view_count | ${type.number}  | The number of times the clip has been viewed.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The date and time of when the clip was created. The date and time is in RFC3339 format.  |
 * | &nbsp;├──&nbsp;thumbnail_url | ${type.string}  | A URL to a thumbnail image of the clip.  |
 * | &nbsp;├──&nbsp;duration | ${type.real}  | The length of the clip, in seconds. Precision is 0.1.  |
 * | &nbsp;├──&nbsp;vod_offset | ${type.number}  | The zero-based offset, in seconds, to where the clip starts in the video (VOD). Is `undefined` if the video is not available or hasn't been created yet from the live stream (see `video_id`). Note that there's a delay between when a clip is created during a broadcast and when the offset is set. During the delay period, `vod_offset` is `undefined`. The delay is indeterminant but is typically minutes long.  |
 * | &nbsp;└──&nbsp;is_featured | ${type.boolean}  | A Boolean value that indicates if the clip is featured or not.  |
 * | pagination | ${type.struct}  | The information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Set the request's `after` or `before` parameter to this value depending on whether you're paging forwards or backwards.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_clips_get_clips(broadcaster_id, game_id, id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_conduits_get_conduits
 * @desc **Twitch Endpoint:** [Get Conduits](https://dev.twitch.tv/docs/api/reference/#get-conduits)
 * 
 * This function gets the [conduits](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) for a client ID.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).]]
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | List of information about the client's conduits.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | Conduit ID.  |
 * | &nbsp;└──&nbsp;shard_count | ${type.number}  | Number of shards associated with this conduit.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_conduits_get_conduits(callback_success, callback_failed) {}


/**
 * @func twitch_conduits_create_conduits
 * @desc **Twitch Endpoint:** [Create Conduits](https://dev.twitch.tv/docs/api/reference/#create-conduits)
 * 
 * This function creates a new [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/).
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).]]
 * 
 * @param {number} shard_count The number of shards to create for this conduit. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | List of information about the client's conduits.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | Conduit ID.  |
 * | &nbsp;└──&nbsp;shard_count | ${type.number}  | Number of shards created for this conduit.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_conduits_create_conduits(shard_count, callback_success, callback_failed) {}


/**
 * @func twitch_conduits_update_conduits
 * @desc **Twitch Endpoint:** [Update Conduits](https://dev.twitch.tv/docs/api/reference/#update-conduits)
 * 
 * This function updates a [conduit's](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) shard count. To delete shards, update the count to a lower number, and the shards above the count will be deleted. For example, if the existing shard count is 100, by resetting shard count to 50, shards 50-99 are disabled.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).]]
 * 
 * @param {string} id Conduit ID. 
 * @param {number} shard_count The new number of shards for this conduit. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | List of information about the client's conduits.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | Conduit ID.  |
 * | &nbsp;└──&nbsp;shard_count | ${type.number}  | Number of shards associated with this conduit after the update.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_conduits_update_conduits(id, shard_count, callback_success, callback_failed) {}


/**
 * @func twitch_conduits_delete_conduit
 * @desc **Twitch Endpoint:** [Delete Conduit](https://dev.twitch.tv/docs/api/reference/#delete-conduit)
 * 
 * This function deletes a specified [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/). Note that it may take some time for Eventsub subscriptions on a deleted [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) to show as disabled when calling [Get Eventsub Subscriptions](https://dev.twitch.tv/docs/api/reference/#get-eventsub-subscriptions).
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).]]
 * 
 * @param {string} id Conduit ID. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_conduits_delete_conduit(id, callback_success, callback_failed) {}


/**
 * @func twitch_conduits_get_conduit_shards
 * @desc **Twitch Endpoint:** [Get Conduit Shards](https://dev.twitch.tv/docs/api/reference/#get-conduit-shards)
 * 
 * This function gets a lists of all shards for a [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/).
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).]]
 * 
 * @param {string} conduit_id Conduit ID. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `status` : ${type.string} : Status to filter by.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The Pagination struct in the response contains the cursor's value.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | List of information about a conduit's shards.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | Shard ID.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | The shard status. The subscriber receives events only for enabled shards. Possible values are: `"enabled"` — The shard is enabled, `"webhook_callback_verification_pending"` — The shard is pending verification of the specified callback URL, `"webhook_callback_verification_failed"` — The specified callback URL failed verification, `"notification_failures_exceeded"` — The notification delivery failure rate was too high, `"websocket_disconnected"` — The client closed the connection, `"websocket_failed_ping_pong"` — The client failed to respond to a ping message, `"websocket_received_inbound_traffic"` — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message), `"websocket_internal_error"` — The Twitch WebSocket server experienced an unexpected error, `"websocket_network_timeout"` — The Twitch WebSocket server timed out writing the message to the client, `"websocket_network_error"` — The Twitch WebSocket server experienced a network error writing the message to the client, `"websocket_failed_to_reconnect"` - The client failed to reconnect to the Twitch WebSocket server within the required time after a Reconnect Message.  |
 * | &nbsp;└──&nbsp;transport | ${type.struct}  | The transport details used to send the notifications.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;method | ${type.string}  | The transport method. Possible values are: `"webhook"`, `"websocket"`  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;callback | ${type.string}  | The callback URL where the notifications are sent. Included only if method is set to webhook.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;session_id | ${type.string}  | An ID that identifies the WebSocket that notifications are sent to. Included only if method is set to websocket.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;connected_at | ${type.string}  | The UTC date and time that the WebSocket connection was established. Included only if method is set to websocket.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;disconnected_at | ${type.string}  | The UTC date and time that the WebSocket connection was lost. Included only if method is set to websocket.  |
 * | pagination | ${type.struct}  | Contains information used to page through a list of results. The struct is empty if there are no more pages left to page through.  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_conduits_get_conduit_shards(conduit_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_conduits_update_conduit_shards
 * @desc **Twitch Endpoint:** [Update Conduit Shards](https://dev.twitch.tv/docs/api/reference/#update-conduit-shards)
 * 
 * This function updates shard(s) for a [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/).
 * 
 * [[Note: Shard IDs are indexed starting at 0, so a conduit with a `shard_count` of 5 will have shards with IDs 0 through 4.]]
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).]]
 * 
 * @param {string} conduit_id Conduit ID. 
 * @param {array[struct]} shards List of shards to update. 
 * @param {string} id Shard ID. 
 * @param {struct} transport The transport details that you want Twitch to use when sending you notifications. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `method` : ${type.string} : The transport method. Possible values are: `"webhook"`, `"websocket"`
 * - `callback` : ${type.string} : The callback URL where the notifications are sent. The URL must use the HTTPS protocol and port 443. See Processing an event. Specify this field only if method is set to webhook. **NOTE:** Redirects are not followed.
 * - `secret` : ${type.string} : The secret used to verify the signature. The secret must be an ASCII string that's a minimum of 10 characters long and a maximum of 100 characters long. For information about how the secret is used, see Verifying the event message. Specify this field only if method is set to webhook.
 * - `session_id` : ${type.string} : An ID that identifies the WebSocket to send notifications to. When you connect to EventSub using WebSockets, the server returns the ID in the Welcome message. Specify this field only if method is set to websocket.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | List of successful shard updates.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | Shard ID.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | The shard status. The subscriber receives events only for enabled shards. Possible values are: `"enabled"` — The shard is enabled, `"webhook_callback_verification_pending"` — The shard is pending verification of the specified callback URL, `"webhook_callback_verification_failed"` — The specified callback URL failed verification, `"notification_failures_exceeded"` — The notification delivery failure rate was too high, `"websocket_disconnected"` — The client closed the connection, `"websocket_failed_ping_pong"` — The client failed to respond to a ping message, `"websocket_received_inbound_traffic"` — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message), `"websocket_internal_error"` — The Twitch WebSocket server experienced an unexpected error, `"websocket_network_timeout"` — The Twitch WebSocket server timed out writing the message to the client, `"websocket_network_error"` — The Twitch WebSocket server experienced a network error writing the message to the client, `"websocket_failed_to_reconnect"` - The client failed to reconnect to the Twitch WebSocket server within the required time after a Reconnect Message.  |
 * | &nbsp;└──&nbsp;transport | ${type.struct}  | The transport details used to send the notifications.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;method | ${type.string}  | The transport method. Possible values are: `"webhook"`, `"websocket"`  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;callback | ${type.string}  | The callback URL where the notifications are sent. Included only if method is set to webhook.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;session_id | ${type.string}  | An ID that identifies the WebSocket that notifications are sent to. Included only if method is set to websocket.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;connected_at | ${type.string}  | The UTC date and time that the WebSocket connection was established. Included only if method is set to websocket.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;disconnected_at | ${type.string}  | The UTC date and time that the WebSocket connection was lost. Included only if method is set to websocket.  |
 * | errors | ${type.array}  | List of unsuccessful updates.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | Shard ID.  |
 * | &nbsp;├──&nbsp;message | ${type.string}  | The error that occurred while updating the shard. Possible errors: - The length of the string in the secret field is not valid. - The URL in the transport's callback field is not valid. The URL must use the HTTPS protocol and the 443 port number. - The value specified in the method field is not valid. - The callback field is required if you specify the webhook transport method. - The session_id field is required if you specify the WebSocket transport method. - The websocket session is not connected. - The shard id is outside of the conduit's range.  |
 * | &nbsp;└──&nbsp;code | ${type.string}  | Error codes used to represent a specific error condition while attempting to update shards.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_conduits_update_conduit_shards(conduit_id, shards,id, transport, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_ccls_get_content_classification_labels
 * @desc **Twitch Endpoint:** [Get Content Classification Labels](https://dev.twitch.tv/docs/api/reference/#get-content-classification-labels)
 * 
 * This function gets information about Twitch content classification labels.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `locale` : ${type.string} : Locale for the Content Classification Labels. You may specify a maximum of 1 locale. Default: `"en-US"`. Supported locales: `"bg-BG"`, `"cs-CZ"`, `"da-DK"`, `"da-DK"`, `"de-DE"`, `"el-GR"`, `"en-GB"`, `"en-US"`, `"es-ES"`, `"es-MX"`, `"fi-FI"`, `"fr-FR"`, `"hu-HU"`, `"it-IT"`, `"ja-JP"`, `"ko-KR"`, `"nl-NL"`, `"no-NO"`, `"pl-PL"`, `"pt-BT"`, `"pt-PT"`, `"ro-RO"`, `"ru-RU"`, `"sk-SK"`, `"sv-SE"`, `"th-TH"`, `"tr-TR"`, `"vi-VN"`, `"zh-CN"`, `"zh-TW"`
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains information about the available content classification labels.  |
 * | &nbsp;└──&nbsp;content_classification_labels | ${type.array}  | The list of CCLs available.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | Unique identifier for the CCL.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;description | ${type.string}  | Localized description of the CCL.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;name | ${type.string}  | Localized name of the CCL.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_ccls_get_content_classification_labels(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_entitlements_get_drops_entitlements
 * @desc **Twitch Endpoint:** [Get Drops Entitlements](https://dev.twitch.tv/docs/api/reference/#get-drops-entitlements)
 * 
 * This function gets an organization's list of entitlements that have been granted to a game, a user, or both.
 * 
 * [[Note: Entitlements returned in the response body data are not guaranteed to be sorted by any field returned by the API. To retrieve CLAIMED or `"FULFILLED"` entitlements, use the `fulfillment_status` parameter to filter results. To retrieve entitlements for a specific game, use the `game_id` parameter to filter results.]]
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]] The client ID in the access token must own the game.]]
 * 
 * The following table identifies the request parameters that you may specify based on the type of access token used.
 * 
 * | Member     | Type        | Description                   |
 * | -----------| ------------| ------------------------------|
 * | App | None  | If you don't specify request parameters, the request returns all entitlements that your organization owns.  |
 * | App | user_id  | The request returns all entitlements for any game that the organization granted to the specified user.  |
 * | App | user_id, game_id  | The request returns all entitlements that the specified game granted to the specified user.  |
 * | App | game_id  | The request returns all entitlements that the specified game granted to all entitled users.  |
 * | User | None  | If you don't specify request parameters, the request returns all entitlements for any game that the organization granted to the user identified in the access token.  |
 * | User | user_id  | Invalid.  |
 * | User | user_id, game_id  | Invalid.  |
 * | User | game_id  | The request returns all entitlements that the specified game granted to the user identified in the access token.  |
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `id` : ${type.string} or ${type.array} of ${type.string} : An ID that identifies the entitlement to get. Pass an array of IDs to get multiple entitlements. You may specify a maximum of 100 IDs.
 * - `user_id` : ${type.string} : An ID that identifies a user that was granted entitlements.
 * - `game_id` : ${type.string} : An ID that identifies a game that offered entitlements.
 * - `fulfillment_status` : ${type.string} : The entitlement's fulfillment status. Used to filter the list to only those with the specified status. Possible values are: `"CLAIMED"`, `"FULFILLED"`
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * - `first` : ${type.number} : The maximum number of entitlements to return per page in the response. The minimum page size is 1 entitlement per page and the maximum is 1000. The default is 20.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * |--------|------|-------------|
 * | data | ${type.array}  | The list of entitlements.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the entitlement.  |
 * | &nbsp;├──&nbsp;benefit_id | ${type.string}  | An ID that identifies the benefit (reward).  |
 * | &nbsp;├──&nbsp;timestamp | ${type.string}  | The UTC date and time (in RFC3339 format) of when the entitlement was granted.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | An ID that identifies the user who was granted the entitlement.  |
 * | &nbsp;├──&nbsp;game_id | ${type.string}  | An ID that identifies the game the user was playing when the reward was entitled.  |
 * | &nbsp;├──&nbsp;fulfillment_status | ${type.string}  | The entitlement's fulfillment status. Possible values are: `"CLAIMED"`, `"FULFILLED"`  |
 * | &nbsp;└──&nbsp;last_updated | ${type.string}  | The UTC date and time (in RFC3339 format) of when the entitlement was last updated.  |
 * | pagination | ${type.struct}  | The information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Set the request's `after` parameter to this value to page forward through the results.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_entitlements_get_drops_entitlements(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_entitlements_update_drops_entitlements
 * @desc **Twitch Endpoint:** [Update Drops Entitlements](https://dev.twitch.tv/docs/api/reference/#update-drops-entitlements)
 * 
 * This function updates the Drop entitlement's fulfillment status.
 * 
 * The following table identifies which entitlements are updated based on the type of access token used.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]] The client ID in the access token must own the game.]]
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `entitlement_ids` : ${type.array} of ${type.string} : A list of IDs that identify the entitlements to update. You may specify a maximum of 100 IDs.
 * - `fulfillment_status` : ${type.string} : The fulfillment status to set the entitlements to. Possible values are: `"CLAIMED"` - The user claimed the benefit. `"FULFILLED"` - The developer granted the benefit that the user claimed.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that indicates which entitlements were successfully updated and those that weren't.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | A string that indicates whether the status of the entitlements in the `ids` field were successfully updated. Possible values are: `"INVALID_ID"` - The entitlement IDs in the `ids` field are not valid. `"NOT_FOUND"` - The entitlement IDs in the `ids` field were not found. `"SUCCESS"` - The status of the entitlements in the `ids` field were successfully updated. `"UNAUTHORIZED"` - The user or organization identified by the user access token is not authorized to update the entitlements. `"UPDATE_FAILED"` - The update failed. These are considered transient errors and the request should be retried later.  |
 * | &nbsp;└──&nbsp;ids | ${type.array} of ${type.string}  | The list of entitlements that the status in the `status` field applies to.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_entitlements_update_drops_entitlements(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_extensions_get_extension_configuration_segment
 * @desc **Twitch Endpoint:** [Get Extension Configuration Segment](https://dev.twitch.tv/docs/api/reference/#get-extension-configuration-segment)
 * 
 * This function gets the specified configuration segment from the specified extension.
 * 
 * **Rate Limits:** You may retrieve each segment a maximum of 20 times per minute.
 * 
 * [[Note: Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to `"external"`.]]
 * 
 * @param {string} extension_id The ID of the extension that contains the configuration segment you want to get. 
 * @param {string} segment The type of configuration segment to get. Possible case-sensitive values are: `"broadcaster"`, `"developer"`, `"global"`. You may specify one or more segments. To specify multiple segments, include the segment parameter for each segment to get. For example, `segment=broadcaster&amp;segment=developer`. Ignores duplicate segments. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `broadcaster_id` : ${type.string} : The ID of the broadcaster that installed the extension. This parameter is required if you set the `segment` parameter to broadcaster or developer. Do not specify this parameter if you set `segment` to `"global"`.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of requested configuration segments. The list is returned in the same order that you specified the list of segments in the request.  |
 * | &nbsp;├──&nbsp;segment | ${type.string}  | The type of segment. Possible values are: `"broadcaster"`, `"developer"`, `"global"`  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID of the broadcaster that installed the extension. The struct includes this field only if the `segment` parameter is set to `"developer"` or `"broadcaster"`.  |
 * | &nbsp;├──&nbsp;content | ${type.string}  | The contents of the segment. This string may be a plain-text string or a string-encoded JSON object.  |
 * | &nbsp;└──&nbsp;version | ${type.string}  | The version number that identifies this definition of the segment's data.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_extensions_get_extension_configuration_segment(extension_id, segment, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_extensions_set_extension_configuration_segment
 * @desc **Twitch Endpoint:** [Set Extension Configuration Segment](https://dev.twitch.tv/docs/api/reference/#set-extension-configuration-segment)
 * 
 * This function updates a configuration segment. The segment is limited to 5 KB. Extensions that are active on a channel do not receive the updated configuration.
 * 
 * **Rate Limits:** You may update the configuration a maximum of 20 times per minute.
 * 
 * [[Note: Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to `"external"`.]]
 * 
 * @param {string} extension_id The ID of the extension to update. 
 * @param {string} segment The configuration segment to update. Possible case-sensitive values are: `"broadcaster"`, `"developer"`, `"global"` 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `broadcaster_id` : ${type.string} : The ID of the broadcaster that installed the extension. Include this field only if the `segment` is set to `"developer"` or `"broadcaster"`.
 * - `content` : ${type.string} : The contents of the segment. This string may be a plain-text string or a string-encoded JSON object.
 * - `version` : ${type.string} : The version number that identifies this definition of the segment's data. If not specified, the latest definition is updated.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_extensions_set_extension_configuration_segment(extension_id, segment, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_extensions_set_extension_required_configuration
 * @desc **Twitch Endpoint:** [Set Extension Required Configuration](https://dev.twitch.tv/docs/api/reference/#set-extension-required-configuration)
 * 
 * This function updates the extension's required_configuration string. Use this endpoint if your extension requires the broadcaster to configure the extension before activating it (to require configuration, you must select **Custom/My Own Service** in Extension [Capabilities](https://dev.twitch.tv/docs/extensions/life-cycle/#capabilities)). For more information, see [Required Configurations](https://dev.twitch.tv/docs/extensions/building#required-configurations) and [Setting Required Configuration](https://dev.twitch.tv/docs/extensions/building#setting-required-configuration-with-the-configuration-service-optional).
 * 
 * [[Note: Requires a signed JSON Web Token (JWT) created by an EBS. For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). Set the `role` field to `"external"` and the `"user_id"` field to the ID of the user that owns the extension.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that installed the extension on their channel. 
 * @param {string} extension_id The ID of the extension to update. 
 * @param {string} extension_version The version of the extension to update. 
 * @param {string} required_configuration The required_configuration string to use with the extension. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_extensions_set_extension_required_configuration(broadcaster_id, extension_id, extension_version, required_configuration, callback_success, callback_failed) {}


/**
 * @func twitch_extensions_send_extension_pubsub_message
 * @desc **Twitch Endpoint:** [Send Extension PubSub Message](https://dev.twitch.tv/docs/api/reference/#send-extension-pubsub-message)
 * 
 * This function sends a message to one or more viewers. You can send messages to a specific channel or to all channels where your extension is active. This endpoint uses the same mechanism as the [send](https://dev.twitch.tv/docs/extensions/reference#send) JavaScript helper function used to send messages.
 * 
 * **Rate Limits:** You may send a maximum of 100 messages per minute per combination of extension client ID and broadcaster ID.
 * 
 * [[Note: Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)) along with the `channel_id` and `pubsub_perms` fields. The `role` field must be set to `"external"`.]]
 * 
 * To send the message to a specific channel, set the `channel_id` field in the JWT to the channel's ID and set the `pubsub_perms.send` array to `"broadcast"`.
 * 
 * To send the message to all channels on which your extension is active, set the `channel_id` field to `"all"` and set the `"pubsub_perms.send"` array to `"global"`.
 * 
 * @param {array[string]} target The target of the message. Possible values are: `"broadcast"`, `"global"`, `"whisper<user-id>"`. If `is_global_broadcast` is `true`, you must set this field to `"global"`. The `"broadcast"` and `"global"` values are mutually exclusive; specify only one of them. 
 * @param {string} broadcaster_id The ID of the broadcaster to send the message to. Don't include this field if `is_global_broadcast` is set to `true`. 
 * @param {string} message The message to send. The message can be a plain-text string or a string-encoded JSON object. The message is limited to a maximum of 5 KB. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `is_global_broadcast` : ${type.boolean} : A Boolean value that determines whether the message should be sent to all channels where your extension is active. Set to `true` if the message should be sent to all channels. The default is `false`.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_extensions_send_extension_pubsub_message(target, broadcaster_id, message, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_extensions_get_extension_live_channels
 * @desc **Twitch Endpoint:** [Get Extension Live Channels](https://dev.twitch.tv/docs/api/reference/#get-extension-live-channels)
 * 
 * This function gets a list of broadcasters that are streaming live and have installed or activated the extension.
 * 
 * It may take a few minutes for the list to include or remove broadcasters that have recently gone live or stopped broadcasting.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string} extension_id The ID of the extension to get. Returns the list of broadcasters that are live and that have installed or activated this extension. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The `pagination` field in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of broadcasters that are streaming live and that have installed or activated the extension.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID of the broadcaster that is streaming live and has installed or activated the extension.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;game_name | ${type.string}  | The name of the category or game being streamed.  |
 * | &nbsp;├──&nbsp;game_id | ${type.string}  | The ID of the category or game being streamed.  |
 * | &nbsp;└──&nbsp;title | ${type.string}  | The title of the broadcaster's stream. May be an empty string if not specified.  |
 * | pagination | ${type.string}  | This field contains the cursor used to page through the results. The field is empty if there are no more pages left to page through. Note that this field is a string compared to other endpoints that use a Pagination struct. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_extensions_get_extension_live_channels(extension_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_extensions_get_extension_secrets
 * @desc **Twitch Endpoint:** [Get Extension Secrets](https://dev.twitch.tv/docs/api/reference/#get-extension-secrets)
 * 
 * This function gets an extension's list of shared secrets.
 * 
 * [[Note: Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to `"external"`.]]
 * 
 * @param {string} extension_id The ID of the extension whose shared secrets you want to get. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of shared secrets that the extension created.  |
 * | &nbsp;├──&nbsp;format_version | ${type.number}  | The version number that identifies this definition of the secret's data.  |
 * | &nbsp;└──&nbsp;secrets | ${type.array}  | The list of secrets.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;content | ${type.string}  | The raw secret that you use with JWT encoding.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;active_at | ${type.string}  | The UTC date and time (in RFC3339 format) that you may begin using this secret to sign a JWT.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;expires_at | ${type.string}  | The UTC date and time (in RFC3339 format) that you must stop using this secret to decode a JWT.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_extensions_get_extension_secrets(extension_id, callback_success, callback_failed) {}


/**
 * @func twitch_extensions_create_extension_secret
 * @desc **Twitch Endpoint:** [Create Extension Secret](https://dev.twitch.tv/docs/api/reference/#create-extension-secret)
 * 
 * This function creates a shared secret used to sign and verify JWT tokens. Creating a new secret removes the current secrets from service. Use this function only when you are ready to use the new secret it returns.
 * 
 * [[Note: Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to `"external"`.]]
 * 
 * @param {string} extension_id The ID of the extension to apply the shared secret to. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `delay` : ${type.number} : The amount of time, in seconds, to delay activating the secret. The delay should provide enough time for instances of the extension to gracefully switch over to the new secret. The minimum delay is 300 seconds (5 minutes). The default is 300 seconds.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the newly added secrets.  |
 * | &nbsp;├──&nbsp;format_version | ${type.number}  | The version number that identifies this definition of the secret's data.  |
 * | &nbsp;└──&nbsp;secrets | ${type.array}  | The list of secrets.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;content | ${type.string}  | The raw secret that you use with JWT encoding.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;active_at | ${type.string}  | The UTC date and time (in RFC3339 format) that you may begin using this secret to sign a JWT.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;expires_at | ${type.string}  | The UTC date and time (in RFC3339 format) that you must stop using this secret to decode a JWT.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_extensions_create_extension_secret(extension_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_extensions_send_extension_chat_message
 * @desc **Twitch Endpoint:** [Send Extension Chat Message](https://dev.twitch.tv/docs/api/reference/#send-extension-chat-message)
 * 
 * This function sends a message to the specified broadcaster's chat room. The extension's name is used as the username for the message in the chat room. To send a chat message, your extension must enable **Chat Capabilities** (under your extension's **Capabilities** tab).
 * 
 * **Rate Limits:** You may send a maximum of 12 messages per minute per channel.
 * 
 * [[Note: Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role` and `user_id` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to `"external"`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that has activated the extension. 
 * @param {string} text The message. The message may contain a maximum of 280 characters. 
 * @param {string} extension_id The ID of the extension that's sending the chat message. 
 * @param {string} extension_version The extension's version number. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_extensions_send_extension_chat_message(broadcaster_id, text, extension_id, extension_version, callback_success, callback_failed) {}


/**
 * @func twitch_extensions_get_extensions
 * @desc **Twitch Endpoint:** [Get Extensions](https://dev.twitch.tv/docs/api/reference/#get-extensions)
 * 
 * This function gets information about an extension.
 * 
 * [[Note: Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role` field (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)), and The `role` field must be set to `"external"`.]]
 * 
 * @param {string} extension_id The ID of the extension to get. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `extension_version` : ${type.string} : The version of the extension to get. If not specified, it returns the latest, released version. If you don't have a released version, you must specify a version; otherwise, the list is empty.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the specified extension.  |
 * | &nbsp;├──&nbsp;author_name | ${type.string}  | The name of the user or organization that owns the extension.  |
 * | &nbsp;├──&nbsp;bits_enabled | ${type.boolean}  | A Boolean value that determines whether the extension has features that use Bits. Is `true` if the extension has features that use Bits.  |
 * | &nbsp;├──&nbsp;can_install | ${type.boolean}  | A Boolean value that determines whether a user can install the extension on their channel. Is `true` if a user can install the extension. Typically, this is set to `false` if the extension is currently in testing mode and requires users to be allowlisted (the allowlist is configured on Twitch's [developer site](https://dev.twitch.tv/console/extensions) under the **Extensions** > **Extension** > **Version** > **Access**).  |
 * | &nbsp;├──&nbsp;configuration_location | ${type.string}  | The location of where the extension's configuration is stored. Possible values are: `"hosted"` - The Extensions Configuration Service hosts the configuration. `"custom"` - The Extension Backend Service (EBS) hosts the configuration. `"none"` - The extension doesn't require configuration.  |
 * | &nbsp;├──&nbsp;description | ${type.string}  | A longer description of the extension. It appears on the details page.  |
 * | &nbsp;├──&nbsp;eula_tos_url | ${type.string}  | A URL to the extension's Terms of Service.  |
 * | &nbsp;├──&nbsp;has_chat_support | ${type.boolean}  | A Boolean value that determines whether the extension can communicate with the installed channel's chat. Is `true` if the extension can communicate with the channel's chat room.  |
 * | &nbsp;├──&nbsp;icon_url | ${type.string}  | A URL to the default icon that's displayed in the Extensions directory.  |
 * | &nbsp;├──&nbsp;icon_urls | ${type.struct}  | A dictionary that contains URLs to different sizes of the default icon. The dictionary's key identifies the icon's size (for example, `"24x24"`), and the dictionary's value contains the URL to the icon.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | The extension's ID.  |
 * | &nbsp;├──&nbsp;name | ${type.string}  | The extension's name.  |
 * | &nbsp;├──&nbsp;privacy_policy_url | ${type.string}  | A URL to the extension's privacy policy.  |
 * | &nbsp;├──&nbsp;request_identity_link | ${type.boolean}  | A Boolean value that determines whether the extension wants to explicitly ask viewers to link their Twitch identity.  |
 * | &nbsp;├──&nbsp;screenshot_urls | ${type.array} of ${type.string}  | A list of URLs to screenshots that are shown in the Extensions marketplace.  |
 * | &nbsp;├──&nbsp;state | ${type.string}  | The extension's state. Possible values are: `"Approved"`, `"AssetsUploaded"`, `"Deleted"`, `"Deprecated"`, `"InReview"`, `"InTest"`, `"PendingAction"`, `"Rejected"`, `"Released"`  |
 * | &nbsp;├──&nbsp;subscriptions_support_level | ${type.string}  | Indicates whether the extension can view the user's subscription level on the channel that the extension is installed on. Possible values are: `"none"` - The extension can't view the user's subscription level. `"optional"` - The extension can view the user's subscription level.  |
 * | &nbsp;├──&nbsp;summary | ${type.string}  | A short description of the extension that streamers see when hovering over the discovery splash screen in the Extensions manager.  |
 * | &nbsp;├──&nbsp;support_email | ${type.string}  | The email address that users use to get support for the extension.  |
 * | &nbsp;├──&nbsp;version | ${type.string}  | The extension's version number.  |
 * | &nbsp;├──&nbsp;viewer_summary | ${type.string}  | A brief description displayed on the channel to explain how the extension works.  |
 * | &nbsp;├──&nbsp;views | ${type.struct}  | Describes all views-related information such as how the extension is displayed on mobile devices.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;mobile | ${type.struct}  | Describes how the extension is displayed on mobile devices.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;viewer_url | ${type.string}  | The HTML file that is shown to viewers on mobile devices. This page is presented to viewers as a panel behind the chat area of the mobile app.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;panel | ${type.struct}  | Describes how the extension is rendered if the extension may be activated as a panel extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;viewer_url | ${type.string}  | The HTML file that is shown to viewers on the channel page when the extension is activated in a Panel slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;height | ${type.number}  | The height, in pixels, of the panel component that the extension is rendered in.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;video_overlay | ${type.struct}  | Describes how the extension is rendered if the extension may be activated as a video-overlay extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;viewer_url | ${type.string}  | The HTML file that is shown to viewers on the channel page when the extension is activated on the Video - Overlay slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;component | ${type.struct}  | Describes how the extension is rendered if the extension may be activated as a video-component extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;viewer_url | ${type.string}  | The HTML file that is shown to viewers on the channel page when the extension is activated in a Video - Component slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;aspect_ratio_x | ${type.number}  | The width value of the ratio (width : height) which determines the extension's width, and how the extension's iframe will resize in different video player environments.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;aspect_ratio_y | ${type.number}  | The height value of the ratio (width : height) which determines the extension's height, and how the extension's iframe will resize in different video player environments.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;autoscale | ${type.boolean}  | A Boolean value that determines whether to apply CSS zoom. If `true`, a CSS zoom is applied such that the size of the extension is variable but the inner dimensions are fixed based on Scale Pixels. This allows your extension to render as if it is of fixed width and height. If `false`, the inner dimensions of the extension iframe are variable, meaning your extension must implement responsiveness.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;scale_pixels | ${type.number}  | The base width, in pixels, of the extension to use when scaling (see `autoscale`). This value is ignored if `autoscale` is `false`.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;target_height | ${type.number}  | The height as a percent of the maximum height of a video component extension. Values are between 1% - 100%.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;config | ${type.struct}  | Describes the view that is shown to broadcasters while they are configuring your extension within the Extension Manager.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;viewer_url | ${type.string}  | The HTML file shown to broadcasters while they are configuring your extension within the Extension Manager.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | &nbsp;├──&nbsp;allowlisted_config_urls | ${type.array} of ${type.string}  | Allowlisted configuration URLs for displaying the extension (the allowlist is configured on Twitch's [developer site](https://dev.twitch.tv/console/extensions) under the **Extensions** > **Extension** > **Version** > **Capabilities**).  |
 * | &nbsp;└──&nbsp;allowlisted_panel_urls | ${type.array} of ${type.string}  | Allowlisted panel URLs for displaying the extension (the allowlist is configured on Twitch's [developer site](https://dev.twitch.tv/console/extensions) under the **Extensions** > **Extension** > **Version** > **Capabilities**).  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_extensions_get_extensions(extension_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_extensions_get_released_extensions
 * @desc **Twitch Endpoint:** [Get Released Extensions](https://dev.twitch.tv/docs/api/reference/#get-released-extensions)
 * 
 * This function gets information about a released extension. Returns the extension if its `state` is `"Released"`.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string} extension_id The ID of the extension to get. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `extension_version` : ${type.string} : The version of the extension to get. If not specified, it returns the latest version.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the specified extension.  |
 * | &nbsp;├──&nbsp;author_name | ${type.string}  | The name of the user or organization that owns the extension.  |
 * | &nbsp;├──&nbsp;bits_enabled | ${type.boolean}  | A Boolean value that determines whether the extension has features that use Bits. Is `true` if the extension has features that use Bits.  |
 * | &nbsp;├──&nbsp;can_install | ${type.boolean}  | A Boolean value that determines whether a user can install the extension on their channel. Is `true` if a user can install the extension. Typically, this is set to `false` if the extension is currently in testing mode and requires users to be allowlisted (the allowlist is configured on Twitch's developer site under the **Extensions** > **Extension** > **Version** > **Access**).  |
 * | &nbsp;├──&nbsp;configuration_location | ${type.string}  | The location of where the extension's configuration is stored. Possible values are: `"hosted"` - The Extensions Configuration Service hosts the configuration. `"custom"` - The Extension Backend Service (EBS) hosts the configuration. `"none"` - The extension doesn't require configuration.  |
 * | &nbsp;├──&nbsp;description | ${type.string}  | A longer description of the extension. It appears on the details page.  |
 * | &nbsp;├──&nbsp;eula_tos_url | ${type.string}  | A URL to the extension's Terms of Service.  |
 * | &nbsp;├──&nbsp;has_chat_support | ${type.boolean}  | A Boolean value that determines whether the extension can communicate with the installed channel's chat. Is `true` if the extension can communicate with the channel's chat room.  |
 * | &nbsp;├──&nbsp;icon_url | ${type.string}  | A URL to the default icon that's displayed in the Extensions directory.  |
 * | &nbsp;├──&nbsp;icon_urls | ${type.struct}  | A dictionary that contains URLs to different sizes of the default icon. The dictionary's key identifies the icon's size (for example, `"24x24"`), and the dictionary's value contains the URL to the icon.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | The extension's ID.  |
 * | &nbsp;├──&nbsp;name | ${type.string}  | The extension's name.  |
 * | &nbsp;├──&nbsp;privacy_policy_url | ${type.string}  | A URL to the extension's privacy policy.  |
 * | &nbsp;├──&nbsp;request_identity_link | ${type.boolean}  | A Boolean value that determines whether the extension wants to explicitly ask viewers to link their Twitch identity.  |
 * | &nbsp;├──&nbsp;screenshot_urls | ${type.array} of ${type.string}  | A list of URLs to screenshots that are shown in the Extensions marketplace.  |
 * | &nbsp;├──&nbsp;state | ${type.string}  | The extension's state. Possible values are: `"Approved"`, `"AssetsUploaded"`, `"Deleted"`, `"Deprecated"`, `"InReview"`, `"InTest"`, `"PendingAction"`, `"Rejected"`, `"Released"`  |
 * | &nbsp;├──&nbsp;subscriptions_support_level | ${type.string}  | Indicates whether the extension can view the user's subscription level on the channel that the extension is installed on. Possible values are: `"none"` - The extension can't view the user's subscription level. `"optional"` - The extension can view the user's subscription level.  |
 * | &nbsp;├──&nbsp;summary | ${type.string}  | A short description of the extension that streamers see when hovering over the discovery splash screen in the Extensions manager.  |
 * | &nbsp;├──&nbsp;support_email | ${type.string}  | The email address that users use to get support for the extension.  |
 * | &nbsp;├──&nbsp;version | ${type.string}  | The extension's version number.  |
 * | &nbsp;├──&nbsp;viewer_summary | ${type.string}  | A brief description displayed on the channel to explain how the extension works.  |
 * | &nbsp;├──&nbsp;views | ${type.struct}  | Describes all views-related information such as how the extension is displayed on mobile devices.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;mobile | ${type.struct}  | Describes how the extension is displayed on mobile devices.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;viewer_url | ${type.string}  | The HTML file that is shown to viewers on mobile devices. This page is presented to viewers as a panel behind the chat area of the mobile app.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;panel | ${type.struct}  | Describes how the extension is rendered if the extension may be activated as a panel extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;viewer_url | ${type.string}  | The HTML file that is shown to viewers on the channel page when the extension is activated in a Panel slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;height | ${type.number}  | The height, in pixels, of the panel component that the extension is rendered in.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;video_overlay | ${type.struct}  | Describes how the extension is rendered if the extension may be activated as a video-overlay extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;viewer_url | ${type.string}  | The HTML file that is shown to viewers on the channel page when the extension is activated on the Video - Overlay slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;component | ${type.struct}  | Describes how the extension is rendered if the extension may be activated as a video-component extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;viewer_url | ${type.string}  | The HTML file that is shown to viewers on the channel page when the extension is activated in a Video - Component slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;aspect_ratio_x | ${type.number}  | The width value of the ratio (width : height) which determines the extension's width, and how the extension's iframe will resize in different video player environments.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;aspect_ratio_y | ${type.number}  | The height value of the ratio (width : height) which determines the extension's height, and how the extension's iframe will resize in different video player environments.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;autoscale | ${type.boolean}  | A Boolean value that determines whether to apply CSS zoom. If `true`, a CSS zoom is applied such that the size of the extension is variable but the inner dimensions are fixed based on Scale Pixels. This allows your extension to render as if it is of fixed width and height. If `false`, the inner dimensions of the extension iframe are variable, meaning your extension must implement responsiveness.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;scale_pixels | ${type.number}  | The base width, in pixels, of the extension to use when scaling (see `autoscale`). This value is ignored if `autoscale` is `false`.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;target_height | ${type.number}  | The height as a percent of the maximum height of a video component extension. Values are between 1% - 100%.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;config | ${type.struct}  | Describes the view that is shown to broadcasters while they are configuring your extension within the Extension Manager.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;viewer_url | ${type.string}  | The HTML file shown to broadcasters while they are configuring your extension within the Extension Manager.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;can_link_external_content | ${type.boolean}  | A Boolean value that determines whether the extension can link to non-Twitch domains.  |
 * | &nbsp;├──&nbsp;allowlisted_config_urls | ${type.array} of ${type.string}  | Allowlisted configuration URLs for displaying the extension (the allowlist is configured on Twitch's [developer site](https://dev.twitch.tv/console/extensions) under the **Extensions** > **Extension** > **Version** > **Capabilities**).  |
 * | &nbsp;└──&nbsp;allowlisted_panel_urls | ${type.array} of ${type.string}  | Allowlisted panel URLs for displaying the extension (the allowlist is configured on Twitch's [developer site](https://dev.twitch.tv/console/extensions) under the **Extensions** > **Extension** > **Version** > **Capabilities**).  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_extensions_get_released_extensions(extension_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_extensions_get_extension_bits_products
 * @desc **Twitch Endpoint:** [Get Extension Bits Products](https://dev.twitch.tv/docs/api/reference/#get-extension-bits-products)
 * 
 * This function gets the list of Bits products that belongs to the extension. The client ID in the app access token identifies the extension.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens). The client ID in the app access token must be the extension's client ID.]]
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `should_include_all` : ${type.boolean} : A Boolean value that determines whether to include disabled or expired Bits products in the response. The default is `false`.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list of Bits products that the extension created. The list is in ascending SKU order. The list is empty if the extension hasn't created any products or they're all expired or disabled.  |
 * | &nbsp;├──&nbsp;sku | ${type.string}  | The product's SKU. The SKU is unique across an extension's products.  |
 * | &nbsp;├──&nbsp;cost | ${type.struct}  | a struct that contains the product's cost information.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;amount | ${type.number}  | The product's price.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;type | ${type.string}  | The type of currency. Possible values are: `"bits"`  |
 * | &nbsp;├──&nbsp;in_development | ${type.boolean}  | A Boolean value that indicates whether the product is in development. If `true`, the product is not available for public use.  |
 * | &nbsp;├──&nbsp;display_name | ${type.string}  | The product's name as displayed in the extension.  |
 * | &nbsp;├──&nbsp;expiration | ${type.string}  | The date and time, in RFC3339 format, when the product expires.  |
 * | &nbsp;└──&nbsp;is_broadcast | ${type.boolean}  | A Boolean value that determines whether Bits product purchase events are broadcast to all instances of an extension on a channel. The events are broadcast via the `onTransactionComplete` helper callback. Is `true` if the event is broadcast to all instances.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_extensions_get_extension_bits_products(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_extensions_update_extension_bits_product
 * @desc **Twitch Endpoint:** [Update Extension Bits Product](https://dev.twitch.tv/docs/api/reference/#update-extension-bits-product)
 * 
 * This function adds or updates a Bits product that the extension created. If the SKU doesn't exist, the product is added. You may update all fields except the `sku` field.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens). The client ID in the app access token must match the extension's client ID.]]
 * 
 * @param {string} sku The product's SKU. The SKU must be unique within an extension. The product's SKU cannot be changed. The SKU may contain only alphanumeric characters, dashes (-), underscores (_), and periods (.) and is limited to a maximum of 255 characters. No spaces. 
 * @param {struct} cost a struct that contains the product's cost information. 
 * @param {number} amount The product's price. 
 * @param {string} type The type of currency. Possible values are: `"bits"` — The minimum price is 1 and the maximum is 10000. 
 * @param {string} display_name The product's name as displayed in the extension. The maximum length is 255 characters. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `in_development` : ${type.boolean} : A Boolean value that indicates whether the product is in development. Set to `true` if the product is in development and not available for public use. The default is `false`.
 * - `expiration` : ${type.string} : The date and time, in RFC3339 format, when the product expires. If not set, the product does not expire. To disable the product, set the expiration date to a date in the past.
 * - `is_broadcast` : ${type.boolean} : A Boolean value that determines whether Bits product purchase events are broadcast to all instances of the extension on a channel. The default is `false`.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list of Bits products that the extension created. The list is in ascending SKU order. The list is empty if the extension hasn't created any products or they're all expired or disabled.  |
 * | &nbsp;├──&nbsp;sku | ${type.string}  | The product's SKU. The SKU is unique across an extension's products.  |
 * | &nbsp;├──&nbsp;cost | ${type.struct}  | a struct that contains the product's cost information.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;amount | ${type.number}  | The product's price.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;type | ${type.string}  | The type of currency. Possible values are:`"bits"`  |
 * | &nbsp;├──&nbsp;in_development | ${type.boolean}  | A Boolean value that indicates whether the product is in development. If `true`, the product is not available for public use.  |
 * | &nbsp;├──&nbsp;display_name | ${type.string}  | The product's name as displayed in the extension.  |
 * | &nbsp;├──&nbsp;expiration | ${type.string}  | The date and time, in RFC3339 format, when the product expires.  |
 * | &nbsp;└──&nbsp;is_broadcast | ${type.boolean}  | A Boolean value that determines whether Bits product purchase events are broadcast to all instances of an extension on a channel. Is `true` if the event is broadcast to all instances.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_extensions_update_extension_bits_product(sku, cost, amount, type, display_name, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_eventsub_create_eventsub_subscription
 * @desc **Twitch Endpoint:** [Create EventSub Subscription](https://dev.twitch.tv/docs/api/reference/#create-eventsub-subscription)
 * 
 * This function creates an EventSub subscription.
 * 
 * If you use [webhooks to receive events](https://dev.twitch.tv/docs/eventsub/handling-webhook-events), the request must specify an app access token. The request will fail if you use a user access token. If the subscription type requires user authorization, the user must have granted your app (client ID) permissions to receive those events before you subscribe to them. For example, to subscribe to [channel.subscribe](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelsubscribe) events, your app must get a user access token that includes the `TWITCH_SCOPE_CHANNEL_READ_SUBSCRIPTIONS` scope, which adds the required permission to your app access token's client ID.
 * 
 * If you use [WebSockets to receive events](https://dev.twitch.tv/docs/eventsub/handling-websocket-events), the request must specify a user access token. The request will fail if you use an app access token. If the subscription type requires user authorization, the token must include the required scope. However, if the subscription type doesn't include user authorization, the token may include any scopes or no scopes.
 * 
 * If you use [Conduits](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) to receive events, the request must specify an app access token. The request will fail if you use a user access token.
 * 
 * @param {string} type The type of subscription to create. For a list of subscriptions that you can create, see&nbsp;[Subscription Types](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#subscription-types). Set this field to the value in the&nbsp;**Name**&nbsp;column of the Subscription Types table. 
 * @param {string} version The version number that identifies the definition of the subscription type that you want the response to use. 
 * @param {struct} condition A JSON object that contains the parameter values that are specific to the specified subscription type. For the object's required and optional fields, see the subscription type's documentation. 
 * @param {struct} transport The transport details that you want Twitch to use when sending you notifications.
 * @param {string} method The transport method.
 * 
 * Possible values are:
 * 
 * - `"webhook"`
 * - `"websocket"`
 * - `"conduit"`
 * 
 * The demo project provides example code that shows how to use the `"websocket"` method. The other transports methods can also be used, though require additional setup. See [Getting Events Using Webhook Callbacks](https://dev.twitch.tv/docs/eventsub/handling-webhook-events/) and [Getting Events Using Conduits](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/).
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `callback` : ${type.string} : The callback URL where the notifications are sent. The URL must use the HTTPS protocol and port 443. See&nbsp;[Processing an event](https://dev.twitch.tv/docs/eventsub/handling-webhook-events#processing-an-event). Specify this field only if `method` is set to `"webhook"`. **NOTE**: Redirects are not followed.
 * - `secret` : ${type.string} : The secret used to verify the signature. The secret must be an ASCII string that's a minimum of 10 characters long and a maximum of 100 characters long. For information about how the secret is used, see&nbsp;[Verifying the event message](https://dev.twitch.tv/docs/eventsub/handling-webhook-events#verifying-the-event-message). Specify this field only if&nbsp;`method`&nbsp;is set to&nbsp;`"webhook"`.
 * - `session_id` : ${type.string} : An ID that identifies the WebSocket to send notifications to. When you connect to EventSub using WebSockets, the server returns the ID in the Welcome message. Specify this field only if&nbsp;`"method"`&nbsp;is set to&nbsp;`"websocket"`.
 * - `conduit_id` : ${type.string} : An ID that identifies the conduit to send notifications to. When you create a conduit, the server returns the conduit ID. Specify this field only if `method` is set to `"conduit"`.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single subscription that you created.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the subscription.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | The subscription's status. The subscriber receives events only for enabled subscriptions. Possible values are: `"enabled"` — The subscription is enabled. `"webhook_callback_verification_pending"` — The subscription is pending verification of the specified callback URL (see [Responding to a challenge request](https://dev.twitch.tv/docs/eventsub/handling-webhook-events#responding-to-a-challenge-request)).  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The subscription's type. See [Subscription Types](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#subscription-types).  |
 * | &nbsp;├──&nbsp;version | ${type.string}  | The version number that identifies this definition of the subscription's data.  |
 * | &nbsp;├──&nbsp;condition | ${type.struct}  | The subscription's parameter values. This is a string-encoded JSON object whose contents are determined by the subscription type.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The date and time (in RFC3339 format) of when the subscription was created.  |
 * | &nbsp;├──&nbsp;transport | ${type.struct}  | The transport details used to send the notifications.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;method | ${type.string}  | The transport method. Possible values are: `"webhook"`, `"websocket"`, `"conduit"`  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;callback | ${type.string}  | The callback URL where the notifications are sent. Included only if `method` is set to `"webhook"`.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;session_id | ${type.string}  | An ID that identifies the WebSocket that notifications are sent to. Included only if `method` is set to `"websocket"`.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;connected_at | ${type.string}  | The UTC date and time that the WebSocket connection was established. Included only if method is set to `"websocket"`.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;conduit_id | ${type.string}  | An ID that identifies the conduit to send notifications to. Included only if method is set to `"conduit"`.  |
 * | &nbsp;└──&nbsp;cost | ${type.number}  | The amount that the subscription counts against your limit. [Learn More](https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits)  |
 * | total | ${type.number}  | The total number of subscriptions you've created.  |
 * | total_cost | ${type.number}  | The sum of all of your subscription costs. [Learn More](https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits)  |
 * | max_total_cost | ${type.number}  | The maximum total cost that you're allowed to incur for all subscriptions you create.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_eventsub_create_eventsub_subscription(type, version, condition, transport, method, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_eventsub_delete_eventsub_subscription
 * @desc **Twitch Endpoint:** [Delete EventSub Subscription](https://dev.twitch.tv/docs/api/reference/#delete-eventsub-subscription)
 * 
 * This function deletes an EventSub subscription.
 * 
 * If you use [webhooks to receive events](https://dev.twitch.tv/docs/eventsub/handling-webhook-events), the request must specify an app access token. The request will fail if you use a user access token.
 * 
 * If you use [WebSockets to receive events](https://dev.twitch.tv/docs/eventsub/handling-websocket-events), the request must specify a user access token. The request will fail if you use an app access token. The token may include any scopes.
 * 
 * @param {string} id The ID of the subscription to delete. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_eventsub_delete_eventsub_subscription(id, callback_success, callback_failed) {}


/**
 * @func twitch_eventsub_get_eventsub_subscriptions
 * @desc **Twitch Endpoint:** [Get EventSub Subscriptions](https://dev.twitch.tv/docs/api/reference/#get-eventsub-subscriptions)
 * 
 * This function gets a list of EventSub subscriptions that the client in the access token created.
 * 
 * If you use Webhooks or Conduits to receive events, the request must specify an app access token. The request will fail if you use a user access token.
 * 
 * If you use WebSockets to receive events, the request must specify a user access token. The request will fail if you use an app access token. The token may include any scopes.
 * 
 * [[Note: Use the `status`, `type`, and `user_id` parameters to filter the list of subscriptions that are returned. The filters are mutually exclusive; the request fails if you specify more than one filter.]]
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `status` : ${type.string} : Filter subscriptions by its status. Possible values are: `"enabled"` — The subscription is enabled. `"webhook_callback_verification_pending"` — The subscription is pending verification of the specified callback URL. `"webhook_callback_verification_failed"` — The specified callback URL failed verification. `"notification_failures_exceeded"` — The notification delivery failure rate was too high. `"authorization_revoked"` — The authorization was revoked for one or more users specified in the **Condition* object. `"moderator_removed"` — The moderator that authorized the subscription is no longer one of the broadcaster's moderators. `"user_removed"` — One of the users specified in the **Condition** object was removed. `"chat_user_banned"` - The user specified in the **Condition** object was banned from the broadcaster's chat. `"version_removed"` — The subscription to subscription type and version is no longer supported. `"beta_maintenance"` — The subscription to the beta subscription type was removed due to maintenance. `"websocket_disconnected"` — The client closed the connection. `"websocket_failed_ping_pong"` — The client failed to respond to a ping message. `"websocket_received_inbound_traffic"` — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message). `"websocket_connection_unused"` — The client failed to subscribe to events within the required time. `"websocket_internal_error"` — The Twitch WebSocket server experienced an unexpected error. `"websocket_network_timeout"` — The Twitch WebSocket server timed out writing the message to the client. `"websocket_network_error"` — The Twitch WebSocket server experienced a network error writing the message to the client. `"websocket_failed_to_reconnect"` - The client failed to reconnect to the Twitch WebSocket server within the required time after a Reconnect Message.
 * - `type` : ${type.string} : Filter subscriptions by subscription type. For a list of subscription types, see [Subscription Types](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#subscription-types).
 * - `user_id` : ${type.string} : Filter subscriptions by user ID. The response contains subscriptions where this ID matches a user ID that you specified in the **Condition** object when you [created the subscription](https://dev.twitch.tv/docs/api/reference#create-eventsub-subscription).
 * - `after` : ${type.string} : The cursor used to get the next page of results. The `pagination` struct in the response contains the cursor's value.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of subscriptions. The list is ordered by the oldest subscription first. The list is empty if the client hasn't created subscriptions or there are no subscriptions that match the specified filter criteria.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the subscription.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | The subscription's status. The subscriber receives events only for **enabled** subscriptions. Possible values are: `"enabled"` — The subscription is enabled. `"webhook_callback_verification_pending"` — The subscription is pending verification of the specified callback URL. `"webhook_callback_verification_failed"` — The specified callback URL failed verification. `"notification_failures_exceeded"` — The notification delivery failure rate was too high. `"authorization_revoked"` — The authorization was revoked for one or more users specified in the **Condition** object. `"moderator_removed"` — The moderator that authorized the subscription is no longer one of the broadcaster's moderators. `"user_removed"` — One of the users specified in the **Condition** object was removed. `"version_removed"` — The subscription to subscription type and version is no longer supported. `"beta_maintenance"` — The subscription to the beta subscription type was removed due to maintenance. `"websocket_disconnected"` — The client closed the connection. `"websocket_failed_ping_pong"` — The client failed to respond to a ping message. `"websocket_received_inbound_traffic"` — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message). `"websocket_connection_unused"` — The client failed to subscribe to events within the required time. `"websocket_internal_error"` — The Twitch WebSocket server experienced an unexpected error. `"websocket_network_timeout"` — The Twitch WebSocket server timed out writing the message to the client. `"websocket_network_error"` — The Twitch WebSocket server experienced a network error writing the message to the client.  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The subscription's type. See [Subscription Types](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#subscription-types).  |
 * | &nbsp;├──&nbsp;version | ${type.string}  | The version number that identifies this definition of the subscription's data.  |
 * | &nbsp;├──&nbsp;condition | ${type.struct}  | The subscription's parameter values. This is a string-encoded JSON object whose contents are determined by the subscription type.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The date and time (in RFC3339 format) of when the subscription was created.  |
 * | &nbsp;├──&nbsp;transport | ${type.struct}  | The transport details used to send the notifications.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;method | ${type.string}  | The transport method. Possible values are: `"webhook"`, `"websocket"`  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;callback | ${type.string}  | The callback URL where the notifications are sent. Included only if `method` is set to `"webhook"`.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;session_id | ${type.string}  | An ID that identifies the WebSocket that notifications are sent to. Included only if `method` is set to `"websocket"`.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;connected_at | ${type.string}  | The UTC date and time that the WebSocket connection was established. Included only if `method` is set to `"websocket"`.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;disconnected_at | ${type.string}  | The UTC date and time that the WebSocket connection was lost. Included only if `method` is set to `"websocket"`.  |
 * | &nbsp;└──&nbsp;cost | ${type.number}  | The amount that the subscription counts against your limit. [Learn More](https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits)  |
 * | total | ${type.number}  | The total number of subscriptions that you've created.  |
 * | total_cost | ${type.number}  | The sum of all of your subscription costs. [Learn More](https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits)  |
 * | max_total_cost | ${type.number}  | The maximum total cost that you're allowed to incur for all subscriptions that you create.  |
 * | pagination | ${type.struct}  | a struct that contains the cursor used to get the next page of subscriptions. The struct is empty if there are no more pages to get. The number of subscriptions returned per page is undertermined.  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor value that you set the after parameter to.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_eventsub_get_eventsub_subscriptions(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_eventsub_live_connect
 * @desc **Twitch Endpoint:** N / A
 * 
 * This function creates a connection to be used with the `"websocket"` transport method of the EventSub functions.
 * 
 * The function takes a callback function with a single parameter: the ${type.buffer} that holds the received data.
 * 
 * ```gml
 * eventsub_callback = function(_buffer)
 * {
 *     var _eventsub_str = buffer_read(_buffer, buffer_string);
 *     var _data = json_parse(_eventsub_str);
 *     
 *     switch(_data.metadata.message_type)
 *     {
 *         // Process different message types in a switch statement
 *         // ...
 *     }
 * }
 * ```
 * 
 * This connection receives several types of message that should be handled correctly. See [Handling WebSocket Events](https://dev.twitch.tv/docs/eventsub/handling-websocket-events/).
 * See the demo project for a complete code example.
 * 
 * [[Note: Ping-pong messages are handled automatically by GameMaker.]]
 * 
 * @param {function} callback The callback function that's called when data is received on the network socket
 * 
 * @func_end
 */


/**
 * @func twitch_eventsub_live_disconnect
 * @desc **Twitch Endpoint:** N / A
 * 
 * This function disconnects from the connection set up earlier using ${function.twitch_eventsub_live_connect}.
 * 
 * [[Note: This function frees the underlying web socket and must be called when you're finished using the connection to prevent a memory leak.]]
 * 
 * @func_end
 */


/**
 * @func twitch_games_get_top_games
 * @desc **Twitch Endpoint:** [Get Top Games](https://dev.twitch.tv/docs/api/reference/#get-top-games)
 * 
 * This function gets information about all broadcasts on Twitch.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * - `before` : ${type.string} : The cursor used to get the previous page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of broadcasts. The broadcasts are sorted by the number of viewers, with the most popular first.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the category or game.  |
 * | &nbsp;├──&nbsp;name | ${type.string}  | The category's or game's name.  |
 * | &nbsp;├──&nbsp;box_art_url | ${type.string}  | A URL to the category's or game's box art. You must replace the `{width}x{height}` placeholder with the size of image you want.  |
 * | &nbsp;└──&nbsp;igdb_id | ${type.string}  | The ID that [IGDB](https://www.igdb.com/) uses to identify this game. If the IGDB ID is not available to Twitch, this field is set to an empty string.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` or `before` parameter to get the next or previous page of results.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_games_get_top_games(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_games_get_games
 * @desc **Twitch Endpoint:** [Get Games](https://dev.twitch.tv/docs/api/reference/#get-games)
 * 
 * This function gets information about specified categories or games.
 * 
 * You may get up to 100 categories or games by specifying their ID or name. You may specify all IDs, all names, or a combination of IDs and names. If you specify a combination of IDs and names, the total number of IDs and names must not exceed 100.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * 
 * @param {string} id The ID of the category or game to get. Include this parameter for each category or game you want to get. For example, `&amp;id=1234&amp;id=5678`. You may specify a maximum of 100 IDs. The endpoint ignores duplicate and invalid IDs or IDs that weren't found. 
 * @param {string} name The name of the category or game to get. The name must exactly match the category's or game's title. Include this parameter for each category or game you want to get. For example, `&amp;name=foo&amp;name=bar`. You may specify a maximum of 100 names. The endpoint ignores duplicate names and names that weren't found. 
 * @param {string} igdb_id The [IGDB](https://www.igdb.com/) ID of the game to get. Include this parameter for each game you want to get. For example, `&amp;igdb_id=1234&amp;igdb_id=5678`. You may specify a maximum of 100 IDs. The endpoint ignores duplicate and invalid IDs or IDs that weren't found. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of categories and games. The list is empty if the specified categories and games weren't found.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the category or game.  |
 * | &nbsp;├──&nbsp;name | ${type.string}  | The category's or game's name.  |
 * | &nbsp;├──&nbsp;box_art_url | ${type.string}  | A URL to the category's or game's box art. You must replace the `{width}x{height}` placeholder with the size of image you want.  |
 * | &nbsp;└──&nbsp;igdb_id | ${type.string}  | The ID that [IGDB](https://www.igdb.com/) uses to identify this game. If the IGDB ID is not available to Twitch, this field is set to an empty string.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_games_get_games(id, name, igdb_id, callback_success, callback_failed) {}


/**
 * @func twitch_goals_get_creator_goals
 * @desc **Twitch Endpoint:** [Get Creator Goals](https://dev.twitch.tv/docs/api/reference/#get-creator-goals)
 * 
 * This function gets the broadcaster's list of active goals. Use this endpoint to get the current progress of each goal.
 * 
 * Instead of polling for the progress of a goal, consider [subscribing](https://dev.twitch.tv/docs/eventsub/manage-subscriptions) to receive notifications when a goal makes progress using the [channel.goal.progress](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelgoalprogress) subscription type. [Read More](https://dev.twitch.tv/docs/api/goals#requesting-event-notifications)
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_READ_GOALS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that created the goals. This ID must match the user ID in the user access token. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of goals. The list is empty if the broadcaster hasn't created goals.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this goal.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the goal.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The type of goal. Possible values are: `"follower"` - The goal is to increase followers. `"subscription"` - The goal is to increase subscriptions. This type shows the net increase or decrease in tier points associated with the subscriptions. `"subscription_count"` - The goal is to increase subscriptions. This type shows the net increase or decrease in the number of subscriptions.`"new_subscription"` - The goal is to increase subscriptions. This type shows only the net increase in tier points associated with the subscriptions (it does not account for users that unsubscribed since the goal started). `"new_subscription_count"` - The goal is to increase subscriptions. This type shows only the net increase in the number of subscriptions (it does not account for users that unsubscribed since the goal started).  |
 * | &nbsp;├──&nbsp;description | ${type.string}  | A description of the goal. Is an empty string if not specified.  |
 * | &nbsp;├──&nbsp;current_amount | ${type.number}  | The goal's current value. The goal's `type` determines how this value is increased or decreased. If `type` is `"follower"`, this field is set to the broadcaster's current number of followers. This number increases with new followers and decreases when users unfollow the broadcaster. If `type` is `"subscription"`, this field is increased and decreased by the points value associated with the subscription tier. For example, if a tier-two subscription is worth 2 points, this field is increased or decreased by 2, not 1. If `type` is `"subscription_count"`, this field is increased by 1 for each new subscription and decreased by 1 for each user that unsubscribes. If `type` is `"new_subscription"`, this field is increased by the points value associated with the subscription tier. For example, if a tier-two subscription is worth 2 points, this field is increased by 2, not 1. If `type` is `"new_subscription_count"`, this field is increased by 1 for each new subscription.  |
 * | &nbsp;├──&nbsp;target_amount | ${type.number}  | The goal's target value. For example, if the broadcaster has 200 followers before creating the goal, and their goal is to double that number, this field is set to 400.  |
 * | &nbsp;└──&nbsp;created_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the broadcaster created the goal.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_goals_get_creator_goals(broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_guest_star_get_channel_guest_star_settings
 * @desc **Twitch Endpoint:** [Get Channel Guest Star Settings](https://dev.twitch.tv/docs/api/reference/#get-channel-guest-star-settings)
 * 
 * This function gets the channel settings for configuration of the Guest Star feature for a particular host.
 * 
 * * Parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
 * * Requires ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_READ_GUEST_STAR`, `TWITCH_SCOPE_CHANNEL_MANAGE_GUEST_STAR`, `TWITCH_SCOPE_MODERATOR_READ_GUEST_STAR` or `TWITCH_SCOPE_MODERATOR_MANAGE_GUEST_STAR`
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `broadcaster_id` : ${type.string} : The ID of the broadcaster you want to get guest star settings for.
 * - `moderator_id` : ${type.string} : The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the user ID in the user access token.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | is_moderator_send_live_enabled | ${type.boolean}  | Flag determining if Guest Star moderators have access to control whether a guest is live once assigned to a slot.  |
 * | slot_count | ${type.number}  | Number of slots the Guest Star call interface will allow the host to add to a call. Required to be between 1 and 6.  |
 * | is_browser_source_audio_enabled | ${type.boolean}  | Flag determining if Browser Sources subscribed to sessions on this channel should output audio  |
 * | group_layout | ${type.string}  | This setting determines how the guests within a session should be laid out within the browser source. Can be one of the following values: `"TILED_LAYOUT"`: All live guests are tiled within the browser source with the same size. `"SCREENSHARE_LAYOUT"`: All live guests are tiled within the browser source with the same size. If there is an active screen share, it is sized larger than the other guests.  |
 * | browser_source_token | ${type.string}  | View only token to generate browser source URLs  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_guest_star_get_channel_guest_star_settings(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_guest_star_update_channel_guest_star_settings
 * @desc **Twitch Endpoint:** [Update Channel Guest Star Settings](https://dev.twitch.tv/docs/api/reference/#update-channel-guest-star-settings)
 * 
 * This function mutates the channel settings for configuration of the Guest Star feature for a particular host.
 * 
 * * Parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
 * * Requires ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_GUEST_STAR`
 * 
 * @param {string} broadcaster_id The ID of the broadcaster you want to update Guest Star settings for.
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `is_moderator_send_live_enabled` : ${type.bool} : Flag determining if Guest Star moderators have access to control whether a guest is live once assigned to a slot.
 * - `slot_count` : ${type.real} : Number of slots the Guest Star call interface will allow the host to add to a call. Required to be between 1 and 6.
 * - `is_browser_source_audio_enabled` : ${type.bool} : Flag determining if Browser Sources subscribed to sessions on this channel should output audio
 * - `group_layout` : ${type.string} : This setting determines how the guests within a session should be laid out within the browser source. Can be one of the following values: `"TILED_LAYOUT"`: All live guests are tiled within the browser source with the same size. `"SCREENSHARE_LAYOUT"`: All live guests are tiled within the browser source with the same size. If there is an active screen share, it is sized larger than the other guests. `"HORIZONTAL_LAYOUT"`: All live guests are arranged in a horizontal bar within the browser source. `"VERTICAL_LAYOUT"`: All live guests are arranged in a vertical bar within the browser source.
 * - `regenerate_browser_sources` : ${type.bool} : Flag determining if Guest Star should regenerate the auth token associated with the channel's browser sources. Providing a true value for this will immediately invalidate all browser sources previously configured in your streaming software.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_guest_star_update_channel_guest_star_settings(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_guest_star_get_guest_star_session
 * @desc **Twitch Endpoint:** [Get Guest Star Session](https://dev.twitch.tv/docs/api/reference/#get-guest-star-session)
 * 
 * This function gets information about an ongoing Guest Star session for a particular channel.
 * 
 * * Requires ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_READ_GUEST_STAR`, `TWITCH_SCOPE_CHANNEL_MANAGE_GUEST_STAR`, `TWITCH_SCOPE_MODERATOR_READ_GUEST_STAR` or `TWITCH_SCOPE_MODERATOR_MANAGE_GUEST_STAR`
 * * Guests must be either invited or assigned a slot within the session
 * 
 * @param {string} broadcaster_id ID for the user hosting the Guest Star session.
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the user ID in the user access token.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | Summary of the session details  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | ID uniquely representing the Guest Star session.  |
 * | &nbsp;├──&nbsp;guests | ${type.array}  | List of guests currently interacting with the Guest Star session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;slot_id | ${type.string}  | ID representing this guest's slot assignment. Host is always in slot `"0"`. Guests are assigned the following consecutive IDs (e.g, `"1"`, `"2"`, `"3"`, etc.). Screen Share is represented as a special guest with the ID `"SCREENSHARE"`. The identifier here matches the ID referenced in browser source links used in broadcasting software.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_live | ${type.boolean}  | Flag determining whether or not the guest is visible in the browser source in the host's streaming software.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_id | ${type.string}  | User ID of the guest assigned to this slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_display_name | ${type.string}  | Display name of the guest assigned to this slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_login | ${type.string}  | Login of the guest assigned to this slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;volume | ${type.number}  | Value from 0 to 100 representing the host's volume setting for this guest.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;assigned_at | ${type.string}  | Timestamp when this guest was assigned a slot in the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;audio_settings | ${type.struct}  | Information about the guest's audio settings  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_host_enabled | ${type.boolean}  | Flag determining whether the host is allowing the guest's audio to be seen or heard within the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_guest_enabled | ${type.boolean}  | Flag determining whether the guest is allowing their audio to be transmitted to the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;is_available | ${type.boolean}  | Flag determining whether the guest has an appropriate audio device available to be transmitted to the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;video_settings | ${type.struct}  | Information about the guest's video settings  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_host_enabled | ${type.boolean}  | Flag determining whether the host is allowing the guest's video to be seen or heard within the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_guest_enabled | ${type.boolean}  | Flag determining whether the guest is allowing their video to be transmitted to the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;is_available | ${type.boolean}  | Flag determining whether the guest has an appropriate video device available to be transmitted to the session.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_guest_star_get_guest_star_session(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_guest_star_create_guest_star_session
 * @desc **Twitch Endpoint:** [Create Guest Star Session](https://dev.twitch.tv/docs/api/reference/#create-guest-star-session)
 * 
 * This function programmatically creates a Guest Star session on behalf of the broadcaster. Requires the broadcaster to be present in the call interface, or the call will be ended automatically.
 * 
 * * Parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
 * * Requires ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_GUEST_STAR`
 * 
 * @param {string} broadcaster_id The ID of the broadcaster you want to create a Guest Star session for. Provided `broadcaster_id` must match the `user_id` in the auth token.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | Summary of the session details.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | ID uniquely representing the Guest Star session.  |
 * | &nbsp;├──&nbsp;guests | ${type.struct}  | List of guests currently interacting with the Guest Star session. On creation, the session will contain the broadcaster as a solo guest.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;slot_id | ${type.string}  | ID representing this guest's slot assignment. Host is always in slot `"0"`. Guests are assigned the following consecutive IDs (e.g, `"1"`, `"2"`, `"3"`, etc.). Screen Share is represented as a special guest with the ID `"SCREENSHARE"`. The identifier here matches the ID referenced in browser source links used in broadcasting software.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_live | ${type.boolean}  | Flag determining whether or not the guest is visible in the browser source in the host's streaming software.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_id | ${type.string}  | User ID of the guest assigned to this slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_display_name | ${type.string}  | Display name of the guest assigned to this slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_login | ${type.string}  | Login of the guest assigned to this slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;volume | ${type.number}  | Value from 0 to 100 representing the host's volume setting for this guest.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;assigned_at | ${type.string}  | Timestamp when this guest was assigned a slot in the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;audio_settings | ${type.struct}  | Information about the guest's audio settings  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_host_enabled | ${type.boolean}  | Flag determining whether the host is allowing the guest's audio to be seen or heard within the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_guest_enabled | ${type.boolean}  | Flag determining whether the guest is allowing their audio to be transmitted to the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;is_available | ${type.boolean}  | Flag determining whether the guest has an appropriate audio device available to be transmitted to the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;video_settings | ${type.struct}  | Information about the guest's video settings  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_host_enabled | ${type.boolean}  | Flag determining whether the host is allowing the guest's video to be seen or heard within the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_guest_enabled | ${type.boolean}  | Flag determining whether the guest is allowing their video to be transmitted to the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;is_available | ${type.boolean}  | Flag determining whether the guest has an appropriate video device available to be transmitted to the session.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_guest_star_create_guest_star_session(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_guest_star_end_guest_star_session
 * @desc **Twitch Endpoint:** [End Guest Star Session](https://dev.twitch.tv/docs/api/reference/#end-guest-star-session)
 * 
 * This function programmatically ends a Guest Star session on behalf of the broadcaster. Performs the same action as if the host clicked the "End Call" button in the Guest Star UI.
 * 
 * * Parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
 * * Requires ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_GUEST_STAR`
 * 
 * @param {string} broadcaster_id : The ID of the broadcaster you want to end a Guest Star session for. Provided `broadcaster_id` must match the `user_id` in the auth token.
 * @param {string} session_id : ID for the session to end on behalf of the broadcaster.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | Summary of the session details when the session was ended.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | ID uniquely representing the Guest Star session.  |
 * | &nbsp;├──&nbsp;guests | ${type.array}  | List of guests currently interacting with the Guest Star session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;slot_id | ${type.string}  | ID representing this guest's slot assignment. Host is always in slot `"0"`. Guests are assigned the following consecutive IDs (e.g, `"1"`, `"2"`, `"3"`, etc.). Screen Share is represented as a special guest with the ID `"SCREENSHARE"`. The identifier here matches the ID referenced in browser source links used in broadcasting software.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_live | ${type.boolean}  | Flag determining whether or not the guest is visible in the browser source in the host's streaming software.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_id | ${type.string}  | User ID of the guest assigned to this slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_display_name | ${type.string}  | Display name of the guest assigned to this slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_login | ${type.string}  | Login of the guest assigned to this slot.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;volume | ${type.number}  | Value from 0 to 100 representing the host's volume setting for this guest.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;assigned_at | ${type.string}  | Timestamp when this guest was assigned a slot in the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;audio_settings | ${type.struct}  | Information about the guest's audio settings  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_host_enabled | ${type.boolean}  | Flag determining whether the host is allowing the guest's audio to be seen or heard within the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_guest_enabled | ${type.boolean}  | Flag determining whether the guest is allowing their audio to be transmitted to the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;is_available | ${type.boolean}  | Flag determining whether the guest has an appropriate audio device available to be transmitted to the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;video_settings | ${type.struct}  | Information about the guest's video settings  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_host_enabled | ${type.boolean}  | Flag determining whether the host is allowing the guest's video to be seen or heard within the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;is_guest_enabled | ${type.boolean}  | Flag determining whether the guest is allowing their video to be transmitted to the session.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;is_available | ${type.boolean}  | Flag determining whether the guest has an appropriate video device available to be transmitted to the session.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_guest_star_end_guest_star_session(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_guest_star_get_guest_star_invites
 * @desc **Twitch Endpoint:** [Get Guest Star Invites](https://dev.twitch.tv/docs/api/reference/#get-guest-star-invites)
 * 
 * This function provides the caller with a list of pending invites to a Guest Star session, including the invitee's ready status while joining the waiting room.
 * 
 * * Parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
 * * Requires ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_READ_GUEST_STAR`, `TWITCH_SCOPE_CHANNEL_MANAGE_GUEST_STAR`, `TWITCH_SCOPE_MODERATOR_READ_GUEST_STAR` or `TWITCH_SCOPE_MODERATOR_MANAGE_GUEST_STAR`
 * 
 * @param {string} broadcaster_id The ID of the broadcaster running the Guest Star session.
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the `user_id` in the user access token.
 * @param {string} session_id The session ID to query for invite status.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list of invite structs describing the invited user as well as their ready status.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | Twitch User ID corresponding to the invited guest  |
 * | &nbsp;├──&nbsp;invited_at | ${type.string}  | Timestamp when this user was invited to the session.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | Status representing the invited user's join state. Can be one of the following: `"INVITED"`: The user has been invited to the session but has not acknowledged it. `"ACCEPTED"`: The invited user has acknowledged the invite and joined the waiting room, but may still be setting up their media devices or otherwise preparing to join the call. `"READY"`: The invited user has signaled they are ready to join the call from the waiting room.  |
 * | &nbsp;├──&nbsp;is_video_enabled | ${type.boolean}  | Flag signaling that the invited user has chosen to disable their local video device. The user has hidden themselves, but they may choose to reveal their video feed upon joining the session.  |
 * | &nbsp;├──&nbsp;is_audio_enabled | ${type.boolean}  | Flag signaling that the invited user has chosen to disable their local audio device. The user has muted themselves, but they may choose to unmute their audio feed upon joining the session.  |
 * | &nbsp;├──&nbsp;is_video_available | ${type.boolean}  | Flag signaling that the invited user has a video device available for sharing.  |
 * | &nbsp;└──&nbsp;is_audio_available | ${type.boolean}  | Flag signaling that the invited user has an audio device available for sharing.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_guest_star_get_guest_star_invites(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_guest_star_send_guest_star_invite
 * @desc **Twitch Endpoint:** [Send Guest Star Invite](https://dev.twitch.tv/docs/api/reference/#send-guest-star-invite)
 * 
 * This function sends an invite to a specified guest on behalf of the broadcaster for a Guest Star session in progress.
 * 
 * * Parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
 * * Requires ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_GUEST_STAR` or `TWITCH_SCOPE_MODERATOR_MANAGE_GUEST_STAR`
 * 
 * @param {string} broadcaster_id The ID of the broadcaster running the Guest Star session.
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the `user_id` in the user access token.
 * @param {string} session_id The session ID for the invite to be sent on behalf of the broadcaster.
 * @param {string} guest_id Twitch User ID for the guest to invite to the Guest Star session.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_guest_star_send_guest_star_invite(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_guest_star_delete_guest_star_invite
 * @desc **Twitch Endpoint:** [Delete Guest Star Invite](https://dev.twitch.tv/docs/api/reference/#delete-guest-star-invite)
 * 
 * This function revokes a previously sent invite for a Guest Star session.
 * 
 * * Parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
 * * Requires ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_GUEST_STAR` or `TWITCH_SCOPE_MODERATOR_MANAGE_GUEST_STAR`
 * 
 * @param {string} broadcaster_id The ID of the broadcaster running the Guest Star session.
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the `user_id` in the user access token.
 * @param {string} session_id The ID of the session for the invite to be revoked on behalf of the broadcaster.
 * @param {string} guest_id Twitch User ID for the guest to revoke the Guest Star session invite from.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_guest_star_delete_guest_star_invite(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_guest_star_assign_guest_star_slot
 * @desc **Twitch Endpoint:** [Assign Guest Star Slot](https://dev.twitch.tv/docs/api/reference/#assign-guest-star-slot)
 * 
 * This function allows a previously invited user to be assigned a slot within the active Guest Star session, once that guest has indicated they are ready to join.
 * 
 * * Parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
 * * Requires ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_GUEST_STAR` or `TWITCH_SCOPE_MODERATOR_MANAGE_GUEST_STAR`
 * 
 * @param {string} broadcaster_id The ID of the broadcaster running the Guest Star session.
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the `user_id` in the user access token.
 * @param {string} session_id The ID of the Guest Star session in which to assign the slot.
 * @param {string} guest_id The Twitch User ID corresponding to the guest to assign a slot in the session. This user must already have an invite to this session, and have indicated that they are ready to join.
 * @param {string} slot_id The slot assignment to give to the user. Must be a numeric identifier between `"1"` and `"N"` where N is the max number of slots for the session. Max number of slots allowed for the session is reported by ${function.twitch_guest_star_get_channel_guest_star_settings}.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_guest_star_assign_guest_star_slot(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_guest_star_update_guest_star_slot
 * @desc **Twitch Endpoint:** [Update Guest Star Slot](https://dev.twitch.tv/docs/api/reference/#update-guest-star-slot)
 * 
 * This function allows a user to update the assigned slot for a particular user within the active Guest Star session.
 * 
 * * Parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
 * * Requires ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_GUEST_STAR` or `TWITCH_SCOPE_MODERATOR_MANAGE_GUEST_STAR`
 * 
 * @param {string} broadcaster_id The ID of the broadcaster running the Guest Star session.
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the `user_id` in the user access token.
 * @param {string} session_id The ID of the Guest Star session in which to update slot settings.
 * @param {string} source_slot_id The slot assignment previously assigned to a user.
 * @param {string} destination_slot_id The slot to move this user assignment to. If the destination slot is occupied, the user assigned will be swapped into `source_slot_id`.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_guest_star_update_guest_star_slot(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_guest_star_delete_guest_star_slot
 * @desc **Twitch Endpoint:** [Delete Guest Star Slot](https://dev.twitch.tv/docs/api/reference/#delete-guest-star-slot)
 * 
 * This function allows a caller to remove a slot assignment from a user participating in an active Guest Star session. This revokes their access to the session immediately and disables their access to publish or subscribe to media within the session.
 * 
 * * Parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
 * * Requires ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_GUEST_STAR` or `TWITCH_SCOPE_MODERATOR_MANAGE_GUEST_STAR`
 * 
 * @param {string} broadcaster_id The ID of the broadcaster running the Guest Star session.
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the user ID in the user access token.
 * @param {string} session_id The ID of the Guest Star session in which to remove the slot assignment.
 * @param {string} guest_id The Twitch User ID corresponding to the guest to remove from the session.
 * @param {string} slot_id The slot ID representing the slot assignment to remove from the session.
 * @param {bool} should_reinvite_guest Flag signaling that the guest should be reinvited to the session, sending them back to the invite queue.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_guest_star_delete_guest_star_slot(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_guest_star_update_guest_star_slot_settings
 * @desc **Twitch Endpoint:** [Update Guest Star Slot Settings](https://dev.twitch.tv/docs/api/reference/#update-guest-star-slot-settings)
 * 
 * This function allows a user to update slot settings for a particular guest within a Guest Star session, such as allowing the user to share audio or video within the call as a host. These settings will be broadcasted to all subscribers which control their view of the guest in that slot. One or more of the optional parameters to this API can be specified at any time.
 * 
 * * Parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
 * * Requires ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_GUEST_STAR` or `TWITCH_SCOPE_MODERATOR_MANAGE_GUEST_STAR`
 * 
 * @param {string} broadcaster_id The ID of the broadcaster running the Guest Star session.
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the user ID in the user access token.
 * @param {string} session_id The ID of the Guest Star session in which to update a slot's settings.
 * @param {string} slot_id The slot assignment that has previously been assigned to a user.
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `is_audio_enabled` : ${type.bool} : Flag indicating whether the slot is allowed to share their audio with the rest of the session. If `false`, the slot will be muted in any views containing the slot.
 * - `is_video_enabled` : ${type.bool} : Flag indicating whether the slot is allowed to share their video with the rest of the session. If `false`, the slot will have no video shared in any views containing the slot.
 * - `is_live` : ${type.bool} : Flag indicating whether the user assigned to this slot is visible/can be heard from any public subscriptions. Generally, this determines whether or not the slot is enabled in any broadcasting software integrations.
 * - `volume` : ${type.real} : Value from 0-100 that controls the audio volume for shared views containing the slot.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_guest_star_update_guest_star_slot_settings(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_hype_train_get_hype_train_events
 * @desc **Twitch Endpoint:** [Get Hype Train Events](https://dev.twitch.tv/docs/api/reference/#get-hype-train-events)
 * 
 * This function gets information about the broadcaster's current or most recent Hype Train event.
 * 
 * Instead of polling for events, consider [subscribing](https://dev.twitch.tv/docs/eventsub/manage-subscriptions) to Hype Train events ([Begin](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelhype_trainbegin), [Progress](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelhype_trainprogress), [End](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelhype_trainend)).
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_READ_HYPE_TRAIN`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that's running the Hype Train. This ID must match the User ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 1.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of Hype Train events. The list is empty if the broadcaster hasn't run a Hype Train within the last 5 days.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this event.  |
 * | &nbsp;├──&nbsp;event_type | ${type.string}  | The type of event. The string is in the form, hypetrain.{event_name}. The request returns only progress event types (i.e., hypetrain.progression).  |
 * | &nbsp;├──&nbsp;event_timestamp | ${type.string}  | The UTC date and time (in RFC3339 format) that the event occurred.  |
 * | &nbsp;├──&nbsp;version | ${type.string}  | The version number of the definition of the event's data. For example, the value is 1 if the data in `event_data` uses the first definition of the event's data.  |
 * | &nbsp;└──&nbsp;event_data | ${type.struct}  | The event's data.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID of the broadcaster that's running the Hype Train.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;cooldown_end_time | ${type.string}  | The UTC date and time (in RFC3339 format) that another Hype Train can start.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;expires_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the Hype Train ends.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;goal | ${type.number}  | The value needed to reach the next level.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this Hype Train.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;last_contribution | ${type.struct}  | The most recent contribution towards the Hype Train's goal.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;total | ${type.number}  | The total amount contributed. If `type` is `"BITS"`, `total` represents the amount of Bits used. If type is `"SUBS"`, total is 500, 1000, or 2500 to represent tier 1, 2, or 3 subscriptions, respectively.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;type | ${type.string}  | The contribution method used. Possible values are: `"BITS"` - Cheering with Bits. `"SUBS"` - Subscription activity like subscribing or gifting subscriptions. `"OTHER"` - Covers other contribution methods not listed.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;user | ${type.string}  | The ID of the user that made the contribution.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;level | ${type.number}  | The highest level that the Hype Train reached (the levels are 1 through 5).  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;started_at | ${type.string}  | The UTC date and time (in RFC3339 format) that this Hype Train started.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;top_contributions | ${type.array}  | The top contributors for each contribution type. For example, the top contributor using BITS (by aggregate) and the top contributor using SUBS (by count).  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;total | ${type.number}  | The total amount contributed. If `type` is `"BITS"`, `total` represents the amount of Bits used. If `type` is `"SUBS"`, `total` is 500, 1000, or 2500 to represent tier 1, 2, or 3 subscriptions, respectively.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;type | ${type.string}  | The contribution method used. Possible values are: `"BITS"` - Cheering with Bits. `"SUBS"` - Subscription activity like subscribing or gifting subscriptions. `"OTHER"` - Covers other contribution methods not listed.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;user | ${type.string}  | The ID of the user that made the contribution.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;total | ${type.number}  | The current total amount raised.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_hype_train_get_hype_train_events(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_check_automod_status
 * @desc **Twitch Endpoint:** [Check AutoMod Status](https://dev.twitch.tv/docs/api/reference/#check-automod-status)
 * 
 * This function checks whether AutoMod would flag the specified message for review.
 * 
 * AutoMod is a moderation tool that holds inappropriate or harassing chat messages for moderators to review. Moderators approve or deny the messages that AutoMod flags; only approved messages are released to chat. AutoMod detects misspellings and evasive language automatically. For information about AutoMod, see [How to Use AutoMod](https://help.twitch.tv/s/article/how-to-use-automod).
 * 
 * **Rate Limits**: Rates are limited per channel based on the account type rather than per access token.
 * 
 * |Account Type|Limit per minute|Limit per hour|
 * |------------|----------------|--------------|
 * |Normal      |5               |50            |
 * |Affiliate   |10              |100           |
 * |Partner     |30              |300           |
 * 
 * The above limits are in addition to the standard [Twitch API rate limits](https://dev.twitch.tv/docs/api/guide#twitch-rate-limits). The rate limit headers in the response represent the Twitch rate limits and not the above limits.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATION_READ`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose AutoMod settings and list of blocked terms are used to check the message. This ID must match the user ID in the access token. 
 * @param {array} data The list of messages to check. The list must contain at least one message and may contain up to a maximum of 100 messages. 
 * @param {string} msg_id A caller-defined ID used to correlate this message with the same message in the response. 
 * @param {string} msg_text The message to check. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -------| -----| ------------|
 * | data | ${type.array}  | The list of messages and whether Twitch would approve them for chat.  |
 * | &nbsp;├──&nbsp;msg_id | ${type.string}  | The caller-defined ID passed in the request.  |
 * | &nbsp;└──&nbsp;is_permitted | ${type.boolean}  | A Boolean value that indicates whether Twitch would approve the message for chat or hold it for moderator review or block it from chat. Is `true` if Twitch would approve the message; otherwise, `false` if Twitch would hold the message for moderator review or block it from chat.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_check_automod_status(broadcaster_id, data, msg_id, msg_text, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_manage_held_automod_messages
 * @desc **Twitch Endpoint:** [Manage Held AutoMod Messages](https://dev.twitch.tv/docs/api/reference/#manage-held-automod-messages)
 * 
 * This function allows or denies the message that AutoMod flagged for review. For information about AutoMod, see [How to Use AutoMod](https://help.twitch.tv/s/article/how-to-use-automod).
 * 
 * To get messages that AutoMod is holding for review, subscribe to the **automod-queue.<moderator_id>.<channel_id>** [topic](https://dev.twitch.tv/docs/pubsub#topics) using [PubSub](https://dev.twitch.tv/docs/pubsub). PubSub sends a notification to your app when AutoMod holds a message for review.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_MANAGE_AUTOMOD`.]]
 * 
 * @param {string} user_id The moderator who is approving or denying the held message. This ID must match the user ID in the access token. 
 * @param {string} msg_id The ID of the message to allow or deny. 
 * @param {string} action The action to take for the message. Possible values are: `"ALLOW"`, `"DENY"` 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_manage_held_automod_messages(user_id, msg_id, action, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_get_automod_settings
 * @desc **Twitch Endpoint:** [Get AutoMod Settings](https://dev.twitch.tv/docs/api/reference/#get-automod-settings)
 * 
 * This function gets the broadcaster's AutoMod settings. The settings are used to automatically block inappropriate or harassing messages from appearing in the broadcaster's chat room.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_READ_AUTOMOD_SETTINGS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose AutoMod settings you want to get. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the user ID in the user access token. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of AutoMod settings. The list contains a single struct that contains all the AutoMod settings.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The broadcaster's ID.  |
 * | &nbsp;├──&nbsp;moderator_id | ${type.string}  | The moderator's ID.  |
 * | &nbsp;├──&nbsp;overall_level | ${type.number}  | The default AutoMod level for the broadcaster. This field is `undefined` if the broadcaster has set one or more of the individual settings.  |
 * | &nbsp;├──&nbsp;disability | ${type.number}  | The Automod level for discrimination against disability.  |
 * | &nbsp;├──&nbsp;aggression | ${type.number}  | The Automod level for hostility involving aggression.  |
 * | &nbsp;├──&nbsp;sexuality_sex_or_gender | ${type.number}  | The AutoMod level for discrimination based on sexuality, sex, or gender.  |
 * | &nbsp;├──&nbsp;misogyny | ${type.number}  | The Automod level for discrimination against women.  |
 * | &nbsp;├──&nbsp;bullying | ${type.number}  | The Automod level for hostility involving name calling or insults.  |
 * | &nbsp;├──&nbsp;swearing | ${type.number}  | The Automod level for profanity.  |
 * | &nbsp;├──&nbsp;race_ethnicity_or_religion | ${type.number}  | The Automod level for racial discrimination.  |
 * | &nbsp;└──&nbsp;sex_based_terms | ${type.number}  | The Automod level for sexual content.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_get_automod_settings(broadcaster_id, moderator_id, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_update_automod_settings
 * @desc **Twitch Endpoint:** [Update AutoMod Settings](https://dev.twitch.tv/docs/api/reference/#update-automod-settings)
 * 
 * This function updates the broadcaster's AutoMod settings. The settings are used to automatically block inappropriate or harassing messages from appearing in the broadcaster's chat room.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_MANAGE_AUTOMOD_SETTINGS`.]]
 * 
 * You must include all the fields that you want set after the operation completes. Typically, you'll call ${function.twitch_moderation_get_automod_settings}, update the fields you want to change in the sturct, and then pass the struct to this function.
 * 
 * You may set either `overall_level` or the individual settings like `aggression`, but not both.
 * 
 * Setting `overall_level` applies default values to the individual settings. However, setting `overall_level` to 4 does not necessarily mean that it applies 4 to all the individual settings. Instead, it applies a set of recommended defaults to the rest of the settings. For example, if you set `overall_level` to 2, Twitch provides some filtering on discrimination and sexual content, but more filtering on hostility.
 * 
 * If `overall_level` is currently set and you update `swearing` to 3, `overall_level` will be set to `undefined` and all settings other than `swearing` will be set to 0. The same is true if individual settings are set and you update `overall_level` to 3 — all the individual settings are updated to reflect the default level.
 * 
 * Note that if you set all the individual settings to values that match what `overall_level` would have set them to, Twitch changes AutoMod to use the default AutoMod level instead of using the individual settings.
 * 
 * Valid values for all levels are from 0 (no filtering) through 4 (most aggressive filtering). These levels affect how aggressively AutoMod holds back messages for moderators to review before they appear in chat or are denied (not shown).
 * 
 * | Field | Type | Description |
 * | ----- | ---- | ----------- |
 * | aggression | ${type.number}  | The Automod level for hostility involving aggression.  |
 * | bullying | ${type.number}  | The Automod level for hostility involving name calling or insults.  |
 * | disability | ${type.number}  | The Automod level for discrimination against disability.  |
 * | misogyny | ${type.number}  | The Automod level for discrimination against women.  |
 * | overall_level | ${type.number}  | The default AutoMod level for the broadcaster.  |
 * | race_ethnicity_or_religion | ${type.number}  | The Automod level for racial discrimination.  |
 * | sex_based_terms | ${type.number}  | The Automod level for sexual content.  |
 * | sexuality_sex_or_gender | ${type.number}  | The AutoMod level for discrimination based on sexuality, sex, or gender.  |
 * | swearing | ${type.number}  | The Automod level for profanity.  |
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose AutoMod settings you want to update. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the user ID in the user access token. 
 * @param {struct} settings The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the user ID in the user access token. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of AutoMod settings. The list contains a single struct that contains all the AutoMod settings.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The broadcaster's ID.  |
 * | &nbsp;├──&nbsp;moderator_id | ${type.string}  | The moderator's ID.  |
 * | &nbsp;├──&nbsp;overall_level | ${type.number}  | The default AutoMod level for the broadcaster. This field is `undefined` if the broadcaster has set one or more of the individual settings.  |
 * | &nbsp;├──&nbsp;disability | ${type.number}  | The Automod level for discrimination against disability.  |
 * | &nbsp;├──&nbsp;aggression | ${type.number}  | The Automod level for hostility involving aggression.  |
 * | &nbsp;├──&nbsp;sexuality_sex_or_gender | ${type.number}  | The AutoMod level for discrimination based on sexuality, sex, or gender.  |
 * | &nbsp;├──&nbsp;misogyny | ${type.number}  | The Automod level for discrimination against women.  |
 * | &nbsp;├──&nbsp;bullying | ${type.number}  | The Automod level for hostility involving name calling or insults.  |
 * | &nbsp;├──&nbsp;swearing | ${type.number}  | The Automod level for profanity.  |
 * | &nbsp;├──&nbsp;race_ethnicity_or_religion | ${type.number}  | The Automod level for racial discrimination.  |
 * | &nbsp;└──&nbsp;sex_based_terms | ${type.number}  | The Automod level for sexual content.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_update_automod_settings(broadcaster_id, moderator_id, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_get_banned_users
 * @desc **Twitch Endpoint:** [Get Banned Users](https://dev.twitch.tv/docs/api/reference/#get-banned-users)
 * 
 * This function gets all users that the broadcaster banned or put in a timeout.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the `TWITCH_SCOPE_MODERATION_READ` or `TWITCH_SCOPE_MODERATOR_MANAGE_BANNED_USERS` scope.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose list of banned users you want to get. This ID must match the user ID in the access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `user_id` : ${type.real} or ${type.array} of ${type.real} : A list of user IDs used to filter the results. To specify more than one ID, pass an array with the ID of each user you want to get. You may specify a maximum of 100 IDs. The returned list includes only those users that were banned or put in a timeout. The list is returned in the same order that you specified the IDs.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * - `before` : ${type.string} : The cursor used to get the previous page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users that were banned or put in a timeout.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | The ID of the banned user.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The banned user's login name.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The banned user's display name.  |
 * | &nbsp;├──&nbsp;expires_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the timeout expires, or an empty string if the user is permanently banned.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the user was banned.  |
 * | &nbsp;├──&nbsp;reason | ${type.string}  | The reason the user was banned or put in a timeout if the moderator provided one.  |
 * | &nbsp;├──&nbsp;moderator_id | ${type.string}  | The ID of the moderator that banned the user or put them in a timeout.  |
 * | &nbsp;├──&nbsp;moderator_login | ${type.string}  | The moderator's login name.  |
 * | &nbsp;└──&nbsp;moderator_name | ${type.string}  | The moderator's display name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_get_banned_users(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_ban_user
 * @desc **Twitch Endpoint:** [Ban User](https://dev.twitch.tv/docs/api/reference/#ban-user)
 * 
 * This function bans a user from participating in the specified broadcaster's chat room or puts them in a timeout.
 * 
 * For information about banning or putting users in a timeout, see [Ban a User](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat#TheBanFeature) and [Timeout a User](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat#TheTimeoutFeature).
 * 
 * If the user is currently in a timeout, you can call this endpoint to change the duration of the timeout or ban them altogether. If the user is currently banned, you cannot call this method to put them in a timeout instead.
 * 
 * To remove a ban or end a timeout, see [Unban user](https://dev.twitch.tv/docs/api/reference/#unban-user).
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_MANAGE_BANNED_USERS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose chat room the user is being banned from. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the user ID in the user access token. 
 * @param {struct} data Identifies the user and type of ban. 
 * @param {string} user_id The ID of the user to ban or put in a timeout. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `duration` : ${type.number} : To ban a user indefinitely, don't include this field. To put a user in a timeout, include this field and specify the timeout period, in seconds. The minimum timeout is 1 second and the maximum is 1,209,600 seconds (2 weeks). To end a user's timeout early, set this field to 1, or use the ${function.twitch_moderation_unban_user} endpoint.
 * - `reason` : ${type.string} : The reason the you're banning the user or putting them in a timeout. The text is user defined and is limited to a maximum of 500 characters.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the user you successfully banned or put in a timeout.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The broadcaster whose chat room the user was banned from chatting in.  |
 * | &nbsp;├──&nbsp;moderator_id | ${type.string}  | The moderator that banned or put the user in the timeout.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | The user that was banned or put in a timeout.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the ban or timeout was placed.  |
 * | &nbsp;└──&nbsp;end_time | ${type.string}  | The UTC date and time (in RFC3339 format) that the timeout will end. Is `undefined` if the user was banned instead of being put in a timeout.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_ban_user(broadcaster_id, moderator_id, data, user_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_unban_user
 * @desc **Twitch Endpoint:** [Unban User](https://dev.twitch.tv/docs/api/reference/#unban-user)
 * 
 * This function removes the ban or timeout that was placed on the specified user.
 * 
 * To ban a user, see ${function.twitch_moderation_ban_user}.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_MANAGE_BANNED_USERS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose chat room the user is banned from chatting in. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the user ID in the user access token. 
 * @param {string} user_id The ID of the user to remove the ban or timeout from. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_unban_user(broadcaster_id, moderator_id, user_id, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_get_unban_requests
 * @desc **Twitch Endpoint:** [Get Unban Requests](https://dev.twitch.tv/docs/api/reference/#get-unban-requests)
 * 
 * This function gets a list of unban requests for a broadcaster's channel.
 * 
 * * Requires a user access token that includes the `TWITCH_SCOPE_MODERATOR_READ_UNBAN_REQUESTS` or `TWITCH_SCOPE_MODERATOR_MANAGE_UNBAN_REQUESTS` scope.
 * * Parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose channel is receiving unban requests. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's unban requests. This ID must match the user ID in the user access token. 
 * @param {string} status Filter by a status: `"pending"`, `"approved"`, `"denied"`, `"acknowledged"`, `"canceled"` 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `user_id` : ${type.string} : The ID used to filter what unban requests are returned.
 * - `after` : ${type.string} : Cursor used to get next page of results. Pagination struct in response contains cursor value.
 * - `first` : ${type.number} : The maximum number of items to return per page in response
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains information about the channel's unban requests.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | Unban request ID.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | User ID of broadcaster whose channel is receiving the unban request.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;moderator_id | ${type.string}  | User ID of moderator who approved/denied the request.  |
 * | &nbsp;├──&nbsp;moderator_login | ${type.string}  | The moderator's login name.  |
 * | &nbsp;├──&nbsp;moderator_name | ${type.string}  | The moderator's display name.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | User ID of the requestor who is asking for an unban.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;text | ${type.string}  | Text of the request from the requesting user.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | Status of the request. One of: `"pending"`, `"approved"`, `"denied"`, `"acknowledged"`, `"canceled"`  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | Timestamp of when the unban request was created.  |
 * | &nbsp;├──&nbsp;resolved_at | ${type.string}  | Timestamp of when moderator/broadcaster approved or denied the request.  |
 * | &nbsp;└──&nbsp;resolution_text | ${type.string}  | Text input by the resolver (moderator) of the unban request.  |
 * | pagination | ${type.struct}  | Contains information used to page through a list of results. The struct is empty if there are no more pages left to page through.  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_get_unban_requests(broadcaster_id, moderator_id, status, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_resolve_unban_requests
 * @desc **Twitch Endpoint:** [Resolve Unban Requests](https://dev.twitch.tv/docs/api/reference/#resolve-unban-requests)
 * 
 * This function resolves an unban request by approving or denying it.
 * 
 * * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_MANAGE_UNBAN_REQUESTS`.
 * * Parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose channel is approving or denying the unban request. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's unban requests. This ID must match the user ID in the user access token. 
 * @param {string} unban_request_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's unban requests. This ID must match the user ID in the user access token. 
 * @param {string} status Resolution status: `"approved"`, `"denied"` 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `resolution_text` : ${type.string} : Message supplied by the unban request resolver. The message is limited to a maximum of 500 characters.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  |   |
 * | &nbsp;├──&nbsp;id | ${type.string}  | Unban request ID.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | User ID of broadcaster whose channel is receiving the unban request.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;moderator_id | ${type.string}  | User ID of moderator who approved/denied the request.  |
 * | &nbsp;├──&nbsp;moderator_login | ${type.string}  | The moderator's login name.  |
 * | &nbsp;├──&nbsp;moderator_name | ${type.string}  | The moderator's display name.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | User ID of the requestor who is asking for an unban.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;text | ${type.string}  | Text of the request from the requesting user.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | Status of the request. One of: `"approved"`, `"denied"`  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | Timestamp of when the unban request was created.  |
 * | &nbsp;├──&nbsp;resolved_at | ${type.string}  | Timestamp of when moderator/broadcaster approved or denied the request.  |
 * | &nbsp;└──&nbsp;resolution_text | ${type.string}  | Text input by the resolver (moderator) of the unban request.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_resolve_unban_requests(broadcaster_id, moderator_id, unban_request_id, status, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_get_blocked_terms
 * @desc **Twitch Endpoint:** [Get Blocked Terms](https://dev.twitch.tv/docs/api/reference/#get-blocked-terms)
 * 
 * This function gets the broadcaster's list of non-private, blocked words or phrases. These are the terms that the broadcaster or moderator added manually or that were denied by AutoMod.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the `TWITCH_SCOPE_MODERATOR_READ_BLOCKED_TERMS` or `TWITCH_SCOPE_MODERATOR_MANAGE_BLOCKED_TERMS` scope.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose blocked terms you're getting. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of blocked terms. The list is in descending order of when they were created (see the `created_at` timestamp).  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The broadcaster that owns the list of blocked terms.  |
 * | &nbsp;├──&nbsp;moderator_id | ${type.string}  | The moderator that blocked the word or phrase from being used in the broadcaster's chat room.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this blocked term.  |
 * | &nbsp;├──&nbsp;text | ${type.string}  | The blocked word or phrase.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the term was blocked.  |
 * | &nbsp;├──&nbsp;updated_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the term was updated. When the term is added, this timestamp is the same as `created_at`. The timestamp changes as AutoMod continues to deny the term.  |
 * | &nbsp;└──&nbsp;expires_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the blocked term is set to expire. After the block expires, users may use the term in the broadcaster's chat room.This field is `undefined` if the term was added manually or was permanently blocked by AutoMod.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_get_blocked_terms(broadcaster_id, moderator_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_add_blocked_term
 * @desc **Twitch Endpoint:** [Add Blocked Term](https://dev.twitch.tv/docs/api/reference/#add-blocked-term)
 * 
 * This function adds a word or phrase to the broadcaster's list of blocked terms. These are the terms that the broadcaster doesn't want used in their chat room.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_MANAGE_BLOCKED_TERMS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the list of blocked terms. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the user ID in the user access token. 
 * @param {string} text The word or phrase to block from being used in the broadcaster's chat room. The term must contain a minimum of 2 characters and may contain up to a maximum of 500 characters.Terms may include a wildcard character (*). The wildcard character must appear at the beginning or end of a word or set of characters. For example, *foo or foo*.If the blocked term already exists, the response contains the existing blocked term. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single blocked term that the broadcaster added.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The broadcaster that owns the list of blocked terms.  |
 * | &nbsp;├──&nbsp;moderator_id | ${type.string}  | The moderator that blocked the word or phrase from being used in the broadcaster's chat room.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this blocked term.  |
 * | &nbsp;├──&nbsp;text | ${type.string}  | The blocked word or phrase.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the term was blocked.  |
 * | &nbsp;├──&nbsp;updated_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the term was updated. When the term is added, this timestamp is the same as `created_at`. The timestamp changes as AutoMod continues to deny the term.  |
 * | &nbsp;└──&nbsp;expires_at | ${type.string}  | The UTC date and time (in RFC3339 format) that the blocked term is set to expire. After the block expires, users may use the term in the broadcaster's chat room.This field is `undefined` if the term was added manually or was permanently blocked by AutoMod.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_add_blocked_term(broadcaster_id, moderator_id, text, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_remove_blocked_term
 * @desc **Twitch Endpoint:** [Remove Blocked Term](https://dev.twitch.tv/docs/api/reference/#remove-blocked-term)
 * 
 * This function removes the word or phrase from the broadcaster's list of blocked terms.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_MANAGE_BLOCKED_TERMS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the list of blocked terms. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the user ID in the user access token. 
 * @param {string} id The ID of the blocked term to remove from the broadcaster's list of blocked terms. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_remove_blocked_term(broadcaster_id, moderator_id, id, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_delete_chat_messages
 * @desc **Twitch Endpoint:** [func_name](https://dev.twitch.tv/docs/api/reference/#delete-chat-messages)
 * 
 * This function removes a single chat message or all chat messages from the broadcaster's chat room.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_MANAGE_CHAT_MESSAGES`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the chat room to remove messages from. 
 * @param {string} moderator_id The ID of the broadcaster or a user that has permission to moderate the broadcaster's chat room. This ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `message_id` : ${type.string} : The ID of the message to remove. The `id` tag in the [PRIVMSG](https://dev.twitch.tv/docs/irc/tags#privmsg-tags) tag contains the message's ID. Restrictions: The message must have been created within the last 6 hours. The message must not belong to the broadcaster. The message must not belong to another moderator. If not specified, the request removes all messages in the broadcaster's chat room.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_delete_chat_messages(broadcaster_id, moderator_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_get_moderated_channels
 * @desc **Twitch Endpoint:** [Get Moderated Channels](https://dev.twitch.tv/docs/api/reference/#get-moderated-channels)
 * 
 * This function gets a list of channels that the specified user has moderator privileges in.
 * 
 * * Parameter `user_id` must match the user ID in the [User-Access Token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
 * * Requires ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_MODERATED_CHANNELS`
 * 
 * @param {string} user_id A user's ID. Returns the list of channels that this user has moderator privileges in. This ID must match the user ID in the user OAuth token 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `after` : ${type.string} : The cursor used to get the next page of results. The Pagination struct in the response contains the cursor's value.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. Minimum page size is 1 item per page and the maximum is 100. The default is 20.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of channels that the user has moderator privileges in.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that uniquely identifies the channel this user can moderate.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The channel's login name.  |
 * | &nbsp;└──&nbsp;broadcaster_name | ${type.string}  | The channels' display name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through.  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_get_moderated_channels(user_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_get_moderators
 * @desc **Twitch Endpoint:** [Get Moderators](https://dev.twitch.tv/docs/api/reference/#get-moderators)
 * 
 * This function gets all users allowed to moderate the broadcaster's chat room.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATION_READ`. If your app also adds and removes moderators, you can use the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_MODERATORS`.instead.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose list of moderators you want to get. This ID must match the user ID in the access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `user_id` : ${type.real} or ${type.array} of ${type.real} : A list of user IDs used to filter the results. To specify more than one ID, pass an array with the user ID of each moderator you want to get. You may specify a maximum of 100 IDs. The returned list includes only the users from the list who are moderators in the broadcaster's channel. The list is returned in the same order as you specified the IDs.
 * - `first` : ${type.string} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of moderators.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | The ID of the user that has permission to moderate the broadcaster's channel.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | &nbsp;└──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_get_moderators(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_add_channel_moderator
 * @desc **Twitch Endpoint:** [Add Channel Moderator](https://dev.twitch.tv/docs/api/reference/#add-channel-moderator)
 * 
 * This function adds a moderator to the broadcaster's chat room.
 * 
 * **Rate Limits**: The broadcaster may add a maximum of 10 moderators within a 10-second window.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_MODERATORS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the chat room. This ID must match the user ID in the access token. 
 * @param {string} user_id The ID of the user to add as a moderator in the broadcaster's chat room. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_add_channel_moderator(broadcaster_id, user_id, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_remove_channel_moderator
 * @desc **Twitch Endpoint:** [Remove Channel Moderator](https://dev.twitch.tv/docs/api/reference/#remove-channel-moderator)
 * 
 * This function removes a moderator from the broadcaster's chat room.
 * 
 * **Rate Limits**: The broadcaster may remove a maximum of 10 moderators within a 10-second window.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_MODERATORS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the chat room. This ID must match the user ID in the access token. 
 * @param {string} user_id The ID of the user to remove as a moderator from the broadcaster's chat room. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_remove_channel_moderator(broadcaster_id, user_id, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_get_vips
 * @desc **Twitch Endpoint:** [Get VIPs](https://dev.twitch.tv/docs/api/reference/#get-vips)
 * 
 * This function gets a list of the broadcaster's VIPs.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_READ_VIPS`. If your app also adds and removes VIP status, you can use the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_VIPS`.instead.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose list of VIPs you want to get. This ID must match the user ID in the access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `user_id` : ${type.real} or ${type.array} of ${type.real} : Filters the list for specific VIPs. To specify more than one user, pass an array with the ID of each user to get. The maximum number of IDs that you may specify is 100. Ignores the ID of those users in the list that aren't VIPs.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of VIPs. The list is empty if the broadcaster doesn't have VIP users.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | An ID that uniquely identifies the VIP user.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | &nbsp;└──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_get_vips(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_add_channel_vip
 * @desc **Twitch Endpoint:** [Add Channel VIP](https://dev.twitch.tv/docs/api/reference/#add-channel-vip)
 * 
 * This function adds the specified user as a VIP in the broadcaster's channel.
 * 
 * **Rate Limits**: The broadcaster may add a maximum of 10 VIPs within a 10-second window.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_VIPS`.]]
 * 
 * @param {string} user_id The ID of the user to give VIP status to. 
 * @param {string} broadcaster_id The ID of the broadcaster that's adding the user as a VIP. This ID must match the user ID in the access token. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_add_channel_vip(user_id, broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_remove_channel_vip
 * @desc **Twitch Endpoint:** [Remove Channel VIP](https://dev.twitch.tv/docs/api/reference/#remove-channel-vip)
 * 
 * This function removes the specified user as a VIP in the broadcaster's channel.
 * 
 * If the broadcaster is removing the user's VIP status, the ID in the `broadcaster_id` parameter must match the user ID in the access token; otherwise, if the user is removing their VIP status themselves, the ID in the `user_id` parameter must match the user ID in the access token.
 * 
 * Rate Limits: The broadcaster may remove a maximum of 10 VIPs within a 10-second window.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_VIPS`.]]
 * 
 * @param {string} user_id The ID of the user to remove VIP status from. 
 * @param {string} broadcaster_id The ID of the broadcaster who owns the channel where the user has VIP status. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_remove_channel_vip(user_id, broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_update_shield_mode_status
 * @desc **Twitch Endpoint:** [Update Shield Mode Status](https://dev.twitch.tv/docs/api/reference/#update-shield-mode-status)
 * 
 * This function activates or deactivates the broadcaster's Shield Mode.
 * 
 * Twitch's Shield Mode feature is like a panic button that broadcasters can push to protect themselves from chat abuse coming from one or more accounts. When activated, Shield Mode applies the overrides that the broadcaster configured in the Twitch UX. If the broadcaster hasn't configured Shield Mode, it applies default overrides.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_MANAGE_SHIELD_MODE`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose Shield Mode you want to activate or deactivate. 
 * @param {string} moderator_id The ID of the broadcaster or a user that is one of the broadcaster's moderators. This ID must match the user ID in the access token. 
 * @param {Boolean} is_active A Boolean value that determines whether to activate Shield Mode. Set to `true` to activate Shield Mode; otherwise, `false` to deactivate Shield Mode. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains a single struct with the broadcaster's updated Shield Mode status.  |
 * | &nbsp;├──&nbsp;is_active | ${type.boolean}  | A Boolean value that determines whether Shield Mode is active. Is `true` if Shield Mode is active; otherwise, `false`.  |
 * | &nbsp;├──&nbsp;moderator_id | ${type.string}  | An ID that identifies the moderator that last activated Shield Mode.  |
 * | &nbsp;├──&nbsp;moderator_login | ${type.string}  | The moderator's login name.  |
 * | &nbsp;├──&nbsp;moderator_name | ${type.string}  | The moderator's display name.  |
 * | &nbsp;└──&nbsp;last_activated_at | ${type.string}  | The UTC timestamp (in RFC3339 format) of when Shield Mode was last activated.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_update_shield_mode_status(broadcaster_id, moderator_id, is_active, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_get_shield_mode_status
 * @desc **Twitch Endpoint:** [Get Shield Mode Status](https://dev.twitch.tv/docs/api/reference/#get-shield-mode-status)
 * 
 * This function gets the broadcaster's Shield Mode activation status.
 * 
 * To receive notification when the broadcaster activates and deactivates Shield Mode, subscribe to the [channel.shield_mode.begin](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshield_modebegin) and [channel.shield_mode.end](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshield_modeend) subscription types.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the `TWITCH_SCOPE_MODERATOR_READ_SHIELD_MODE` or `TWITCH_SCOPE_MODERATOR_MANAGE_SHIELD_MODE` scope.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose Shield Mode activation status you want to get. 
 * @param {string} moderator_id The ID of the broadcaster or a user that is one of the broadcaster's moderators. This ID must match the user ID in the access token. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains a single struct with the broadcaster's Shield Mode status.  |
 * | &nbsp;├──&nbsp;is_active | ${type.boolean}  | A Boolean value that determines whether Shield Mode is active. Is `true` if the broadcaster activated Shield Mode; otherwise, `false`.  |
 * | &nbsp;├──&nbsp;moderator_id | ${type.string}  | An ID that identifies the moderator that last activated Shield Mode. Is an empty string if Shield Mode hasn't been previously activated.  |
 * | &nbsp;├──&nbsp;moderator_login | ${type.string}  | The moderator's login name. Is an empty string if Shield Mode hasn't been previously activated.  |
 * | &nbsp;├──&nbsp;moderator_name | ${type.string}  | The moderator's display name. Is an empty string if Shield Mode hasn't been previously activated.  |
 * | &nbsp;└──&nbsp;last_activated_at | ${type.string}  | The UTC timestamp (in RFC3339 format) of when Shield Mode was last activated. Is an empty string if Shield Mode hasn't been previously activated.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_moderation_get_shield_mode_status(broadcaster_id, moderator_id, callback_success, callback_failed) {}


/**
 * @func twitch_moderation_warn_chat_user
 * @desc **Twitch Endpoint:** [Warn Chat User](https://dev.twitch.tv/docs/api/reference#warn-chat-user)
 * 
 * This function warns a user in the specified broadcaster's chat room, preventing them from chat interaction until the warning is acknowledged. New warnings can be issued to a user when they already have a warning in the channel (new warning will replace old warning).
 * 
 * [[Note: Requires a user access token that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_MODERATOR_MANAGE_WARNINGS`. Parameter `moderator_id` must match the `user_id` in the [user access token](https://dev.twitch.tv/docs/authentication/#user-access-tokens).]]
 * 
 * @param {string} broadcaster_id The ID of the channel in which the warning will take effect.
 * @param {string} moderator_id The ID of the twitch user who requested the warning.
 * @param {struct} data A list that contains information about the warning.
 * 
 * - `user_id` : ${type.string} : The ID of the twitch user to be warned.
 * - `reason` : ${type.string} : A custom reason for the warning. **Max 500 chars**.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * 
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | An array that contains information about the warning. |
 * | broadcaster_id | ${type.string}  | The ID of the channel in which the warning will take effect. |
 * | user_id | ${type.string}  | The ID of the warned user. |
 * | moderator_id | ${type.string}  | The ID of the user who applied the warning. |
 * | reason | ${type.string}  | The reason provided for warning. |
 * 
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */

/**
 * @func twitch_polls_get_polls
 * @desc **Twitch Endpoint:** [Get Polls](https://dev.twitch.tv/docs/api/reference/#get-polls)
 * 
 * This function gets a list of polls that the broadcaster created.
 * 
 * Polls are available for 90 days after they're created.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the `TWITCH_SCOPE_CHANNEL_READ_POLLS` or `TWITCH_SCOPE_CHANNEL_MANAGE_POLLS` scope.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that created the polls. This ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `id` : ${type.real} of ${type.array} of ${type.real} : A list of IDs that identify the polls to return. To specify more than one ID, pass an array with the IDs of each poll you want to get. You may specify a maximum of 20 IDs. Specify this parameter only if you want to filter the list that the request returns. The endpoint ignores duplicate IDs and those not owned by this broadcaster.
 * - `first` : ${type.string} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 20 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list of polls. The polls are returned in descending order of start time unless you specify IDs in the request, in which case they're returned in the same order as you passed them in the request. The list is empty if the broadcaster hasn't created polls.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the poll.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the poll.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The question that viewers are voting on. For example, *What game should I play next?* The title may contain a maximum of 60 characters.  |
 * | &nbsp;├──&nbsp;choices | ${type.array}  | A list of choices that viewers can choose from. The list will contain a minimum of two choices and up to a maximum of five choices.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this choice.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;title | ${type.string}  | The choice's title. The title may contain a maximum of 25 characters.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;votes | ${type.number}  | The total number of votes cast for this choice.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;channel_points_votes | ${type.number}  | The number of votes cast using Channel Points.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;bits_votes | ${type.number}  | Not used; will be set to 0.  |
 * | &nbsp;├──&nbsp;bits_voting_enabled | ${type.boolean}  | Not used; will be set to `false`.  |
 * | &nbsp;├──&nbsp;bits_per_vote | ${type.number}  | Not used; will be set to 0.  |
 * | &nbsp;├──&nbsp;channel_points_voting_enabled | ${type.boolean}  | A Boolean value that indicates whether viewers may cast additional votes using Channel Points. For information about Channel Points, see [Channel Points Guide](https://help.twitch.tv/s/article/channel-points-guide).  |
 * | &nbsp;├──&nbsp;channel_points_per_vote | ${type.number}  | The number of points the viewer must spend to cast one additional vote.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | The poll's status. Valid values are: `"ACTIVE"` — The poll is running. `"COMPLETED"` — The poll ended on schedule (see the `duration` field). `"TERMINATED"` — The poll was terminated before its scheduled end. `"ARCHIVED"` — The poll has been archived and is no longer visible on the channel. `"MODERATED"` — The poll was deleted. `"INVALID"` — Something went wrong while determining the state.  |
 * | &nbsp;├──&nbsp;duration | ${type.number}  | The length of time (in seconds) that the poll will run for.  |
 * | &nbsp;├──&nbsp;started_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the poll began.  |
 * | &nbsp;├──&nbsp;ended_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the poll ended. If `status` is `"ACTIVE"`, this field is set to `undefined`.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_polls_get_polls(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_polls_create_poll
 * @desc **Twitch Endpoint:** [Create Poll](https://dev.twitch.tv/docs/api/reference/#create-poll)
 * 
 * This function creates a poll that viewers in the broadcaster's channel can vote on.
 * 
 * The poll begins as soon as it's created. You may run only one poll at a time.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_POLLS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that's running the poll. This ID must match the user ID in the user access token. 
 * @param {string} title The question that viewers will vote on. For example, *What game should I play next?* The question may contain a maximum of 60 characters. 
 * @param {array} choices A list of choices that viewers may choose from. The list must contain a minimum of 2 choices and up to a maximum of 5 choices. 
 * @param {number} duration The length of time (in seconds) that the poll will run for. The minimum is 15 seconds and the maximum is 1800 seconds (30 minutes). 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `channel_points_voting_enabled` : ${type.boolean} : A Boolean value that indicates whether viewers may cast additional votes using Channel Points. If `true`, the viewer may cast more than one vote but each additional vote costs the number of Channel Points specified in `channel_points_per_vote`. The default is `false` (viewers may cast only one vote). For information about Channel Points, see [Channel Points Guide](https://help.twitch.tv/s/article/channel-points-guide).
 * - `channel_points_per_vote` : ${type.number} : The number of points that the viewer must spend to cast one additional vote. The minimum is 1 and the maximum is 1000000. Set only if `ChannelPointsVotingEnabled` is `true`.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single poll that you created.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the poll.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the poll.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The question that viewers are voting on. For example, *What game should I play next?* The title may contain a maximum of 60 characters.  |
 * | &nbsp;├──&nbsp;choices | ${type.array}  | A list of choices that viewers can choose from. The list will contain a minimum of two choices and up to a maximum of five choices.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this choice.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;title | ${type.string}  | The choice's title. The title may contain a maximum of 25 characters.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;votes | ${type.number}  | The total number of votes cast for this choice.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;channel_points_votes | ${type.number}  | The number of votes cast using Channel Points.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;bits_votes | ${type.number}  | Not used; will be set to 0.  |
 * | &nbsp;├──&nbsp;bits_voting_enabled | ${type.boolean}  | Not used; will be set to `false`.  |
 * | &nbsp;├──&nbsp;bits_per_vote | ${type.number}  | Not used; will be set to 0.  |
 * | &nbsp;├──&nbsp;channel_points_voting_enabled | ${type.boolean}  | A Boolean value that indicates whether viewers may cast additional votes using Channel Points. For information about Channel Points, see [Channel Points Guide](https://help.twitch.tv/s/article/channel-points-guide).  |
 * | &nbsp;├──&nbsp;channel_points_per_vote | ${type.number}  | The number of points the viewer must spend to cast one additional vote.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | The poll's status. Valid values are: `"ACTIVE"` - The poll is running. `"COMPLETED"` - The poll ended on schedule (see the `duration` field). `"TERMINATED"` - The poll was terminated before its scheduled end. `"ARCHIVED"` - The poll has been archived and is no longer visible on the channel. `"MODERATED"` - The poll was deleted. `"INVALID"` - Something went wrong while determining the state.  |
 * | &nbsp;├──&nbsp;duration | ${type.number}  | The length of time (in seconds) that the poll will run for.  |
 * | &nbsp;├──&nbsp;started_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the poll began.  |
 * | &nbsp;└──&nbsp;ended_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the poll ended. If `status` is `"ACTIVE"`, this field is set to `undefined`.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_polls_create_poll(broadcaster_id, title, choices, duration, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_polls_end_poll
 * @desc **Twitch Endpoint:** [End Poll](https://dev.twitch.tv/docs/api/reference/#end-poll)
 * 
 * This function ends an active poll. You have the option to end it or end it and archive it.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_POLLS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that's running the poll. This ID must match the user ID in the user access token. 
 * @param {string} id The ID of the poll to update. 
 * @param {string} status The status to set the poll to. Possible case-sensitive values are: `"TERMINATED"` - Ends the poll before the poll is scheduled to end. The poll remains publicly visible. `"ARCHIVED"` - Ends the poll before the poll is scheduled to end, and then archives it so it's no longer publicly visible. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | An array that contains the poll that you ended.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the poll.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the poll.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The question that viewers are voting on. For example, *What game should I play next?* The title may contain a maximum of 60 characters.  |
 * | &nbsp;├──&nbsp;choices | ${type.array}  | A list of choices that viewers can choose from. The list will contain a minimum of two choices and up to a maximum of five choices.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this choice.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;title | ${type.string}  | The choice's title. The title may contain a maximum of 25 characters.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;votes | ${type.number}  | The total number of votes cast for this choice.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;channel_points_votes | ${type.number}  | The number of votes cast using Channel Points.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;bits_votes | ${type.number}  | Not used; will be set to 0.  |
 * | &nbsp;├──&nbsp;bits_voting_enabled | ${type.boolean}  | Not used; will be set to `false`.  |
 * | &nbsp;├──&nbsp;bits_per_vote | ${type.number}  | Not used; will be set to 0.  |
 * | &nbsp;├──&nbsp;channel_points_voting_enabled | ${type.boolean}  | A Boolean value that indicates whether viewers may cast additional votes using Channel Points. For information about Channel Points, see [Channel Points Guide](https://help.twitch.tv/s/article/channel-points-guide).  |
 * | &nbsp;├──&nbsp;channel_points_per_vote | ${type.number}  | The number of points the viewer must spend to cast one additional vote.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | The poll's status. Valid values are: `"ACTIVE"` - The poll is running. `"COMPLETED"` - The poll ended on schedule (see the `duration` field). `"TERMINATED"` - The poll was terminated before its scheduled end. `"ARCHIVED"` - The poll has been archived and is no longer visible on the channel. `"MODERATED"` - The poll was deleted. `"INVALID"` - Something went wrong while determining the state.  |
 * | &nbsp;├──&nbsp;duration | ${type.number}  | The length of time (in seconds) that the poll will run for.  |
 * | &nbsp;├──&nbsp;started_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the poll began.  |
 * | &nbsp;└──&nbsp;ended_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the poll ended. If `status` is `"ACTIVE"`, this field is set to `undefined`.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_polls_end_poll(broadcaster_id, id, status, callback_success, callback_failed) {}


/**
 * @func twitch_predictions_get_predictions
 * @desc **Twitch Endpoint:** [Get Predictions](https://dev.twitch.tv/docs/api/reference/#get-predictions)
 * 
 * This function gets a list of Channel Points Predictions that the broadcaster created.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the `TWITCH_SCOPE_CHANNEL_READ_PREDICTIONS` or `TWITCH_SCOPE_CHANNEL_MANAGE_PREDICTIONS` scope.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose predictions you want to get. This ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `id` : ${type.real} or ${type.array} of ${type.real} : The ID of the prediction to get. To specify more than one ID, pass an array with the ID of each prediction you want to get. You may specify a maximum of 25 IDs. The endpoint ignores duplicate IDs and those not owned by the broadcaster.
 * - `first` : ${type.string} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 25 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The broadcaster's list of Channel Points Predictions. The list is sorted in descending ordered by when the prediction began (the most recent prediction is first). The list is empty if the broadcaster hasn't created predictions.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this prediction.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the prediction.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The question that the prediction asks. For example, *Will I finish this entire pizza?*  |
 * | &nbsp;├──&nbsp;winning_outcome_id | ${type.string}  | The ID of the winning outcome. Is `undefined` unless `status` is `"RESOLVED"`.  |
 * | &nbsp;├──&nbsp;outcomes | ${type.array}  | The list of possible outcomes for the prediction.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this outcome.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;title | ${type.string}  | The outcome's text.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;users | ${type.number}  | The number of unique viewers that chose this outcome.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;channel_points | ${type.number}  | The number of Channel Points spent by viewers on this outcome.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;top_predictors | ${type.array}  | A list of viewers who were the top predictors; otherwise, `undefined` if none.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_id | ${type.string}  | An ID that identifies the viewer.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_name | ${type.string}  | The viewer's display name.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_login | ${type.string}  | The viewer's login name.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;channel_points_used | ${type.number}  | The number of Channel Points the viewer spent.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;channel_points_won | ${type.number}  | The number of Channel Points distributed to the viewer.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;color | ${type.string}  | The color that visually identifies this outcome in the UX. Possible values are: `"BLUE"`, `"PINK"`. If the number of outcomes is two, the color is `"BLUE"` for the first outcome and `"PINK"` for the second outcome. If there are more than two outcomes, the color is `"BLUE"` for all outcomes.  |
 * | &nbsp;├──&nbsp;prediction_window | ${type.number}  | The length of time (in seconds) that the prediction will run for.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | The prediction's status. Valid values are: `"ACTIVE"` - The Prediction is running and viewers can make predictions. `"CANCELED"` - The broadcaster canceled the Prediction and refunded the Channel Points to the participants. `"LOCKED"` - The broadcaster locked the Prediction, which means viewers can no longer make predictions. `"RESOLVED"` - The winning outcome was determined and the Channel Points were distributed to the viewers who predicted the correct outcome.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The UTC date and time of when the Prediction began.  |
 * | &nbsp;├──&nbsp;ended_at | ${type.string}  | The UTC date and time of when the Prediction ended. If status is `"ACTIVE"`, this is set to `undefined`.  |
 * | &nbsp;└──&nbsp;locked_at | ${type.string}  | The UTC date and time of when the Prediction was locked. If status is not `"LOCKED"`, this is set to `undefined`.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` parameter.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_predictions_get_predictions(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_predictions_create_prediction
 * @desc **Twitch Endpoint:** [Create Prediction](https://dev.twitch.tv/docs/api/reference/#create-prediction)
 * 
 * This function creates a Channel Points Prediction.
 * 
 * With a Channel Points Prediction, the broadcaster poses a question and viewers try to predict the outcome. The prediction runs as soon as it's created. The broadcaster may run only one prediction at a time.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_PREDICTIONS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that's running the prediction. This ID must match the user ID in the user access token. 
 * @param {string} title The question that the broadcaster is asking. For example, *Will I finish this entire pizza?* The title is limited to a maximum of 45 characters. 
 * @param {array} outcomes The list of possible outcomes that the viewers may choose from. The list must contain a minimum of 2 choices and up to a maximum of 10 choices. 
 * @param {number} prediction_window The length of time (in seconds) that the prediction will run for. The minimum is 30 seconds and the maximum is 1800 seconds (30 minutes). 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single prediction that you created.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this prediction.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the prediction.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The question that the prediction asks. For example, *Will I finish this entire pizza?*  |
 * | &nbsp;├──&nbsp;winning_outcome_id | ${type.string}  | The ID of the winning outcome. Is `undefined` unless status is `"RESOLVED"`.  |
 * | &nbsp;├──&nbsp;outcomes | ${type.array}  | The list of possible outcomes for the prediction.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this outcome.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;title | ${type.string}  | The outcome's text.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;users | ${type.number}  | The number of unique viewers that chose this outcome.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;channel_points | ${type.number}  | The number of Channel Points spent by viewers on this outcome.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;top_predictors | ${type.array}  | A list of viewers who were the top predictors; otherwise, `undefined` if none.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_id | ${type.string}  | An ID that identifies the viewer.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_name | ${type.string}  | The viewer's display name.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_login | ${type.string}  | The viewer's login name.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;channel_points_used | ${type.number}  | The number of Channel Points the viewer spent.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;channel_points_won | ${type.number}  | The number of Channel Points distributed to the viewer.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;color | ${type.string}  | The color that visually identifies this outcome in the UX. Possible values are: `"BLUE"`, `"PINK"`. If the number of outcomes is two, the color is `"BLUE"` for the first outcome and `"PINK"` for the second outcome. If there are more than two outcomes, the color is `"BLUE"` for all outcomes.  |
 * | &nbsp;├──&nbsp;prediction_window | ${type.number}  | The length of time (in seconds) that the prediction will run for.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | The prediction's status. Valid values are: `"ACTIVE"` - The Prediction is running and viewers can make predictions. `"CANCELED"` - The broadcaster canceled the Prediction and refunded the Channel Points to the participants. `"LOCKED"` - The broadcaster locked the Prediction, which means viewers can no longer make predictions. `"RESOLVED"` - The winning outcome was determined and the Channel Points were distributed to the viewers who predicted the correct outcome.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The UTC date and time of when the Prediction began.  |
 * | &nbsp;├──&nbsp;ended_at | ${type.string}  | The UTC date and time of when the Prediction ended. If `status` is `"ACTIVE"`, this is set to `undefined`.  |
 * | &nbsp;└──&nbsp;locked_at | ${type.string}  | The UTC date and time of when the Prediction was locked. If `status` is not `"LOCKED"`, this is set to `undefined`.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_predictions_create_prediction(broadcaster_id, title, outcomes, prediction_window, callback_success, callback_failed) {}


/**
 * @func twitch_predictions_end_prediction
 * @desc **Twitch Endpoint:** [End Prediction](https://dev.twitch.tv/docs/api/reference/#end-prediction)
 * 
 * This function locks, resolves, or cancels a Channel Points Prediction.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_PREDICTIONS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that's running the prediction. This ID must match the user ID in the user access token. 
 * @param {string} id The ID of the prediction to update. 
 * @param {string} status The status to set the prediction to. Possible case-sensitive values are: `"RESOLVED"` - The winning outcome is determined and the Channel Points are distributed to the viewers who predicted the correct outcome. `"CANCELED"` - The broadcaster is canceling the prediction and sending refunds to the participants. `"LOCKED"` - The broadcaster is locking the prediction, which means viewers may no longer make predictions. The broadcaster can update an active prediction to `"LOCKED"`, `"RESOLVED"`, or `"CANCELED"`; and update a locked prediction to `"RESOLVED"` or `"CANCELED"`.The broadcaster has up to 24 hours after the prediction window closes to resolve the prediction. If not, Twitch sets the status to `"CANCELED"` and returns the points. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `winning_outcome_id` : ${type.string} : The ID of the winning outcome. You must set this parameter if you set `status` to `"RESOLVED"`.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single prediction that you updated.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this prediction.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that identifies the broadcaster that created the prediction.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The question that the prediction asks. For example, *Will I finish this entire pizza?*  |
 * | &nbsp;├──&nbsp;winning_outcome_id | ${type.string}  | The ID of the winning outcome. Is `undefined` unless status is `"RESOLVED"`.  |
 * | &nbsp;├──&nbsp;outcomes | ${type.array}  | The list of possible outcomes for the prediction.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this outcome.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;title | ${type.string}  | The outcome's text.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;users | ${type.number}  | The number of unique viewers that chose this outcome.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;channel_points | ${type.number}  | The number of Channel Points spent by viewers on this outcome.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;top_predictors | ${type.array}  | A list of viewers who were the top predictors; otherwise, `undefined` if none.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_id | ${type.string}  | An ID that identifies the viewer.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_name | ${type.string}  | The viewer's display name.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_login | ${type.string}  | The viewer's login name.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;channel_points_used | ${type.number}  | The number of Channel Points the viewer spent.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;channel_points_won | ${type.number}  | The number of Channel Points distributed to the viewer.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;color | ${type.string}  | The color that visually identifies this outcome in the UX. Possible values are: `"BLUE"`, `"PINK"`. If the number of outcomes is two, the color is `"BLUE"` for the first outcome and `"PINK"` for the second outcome. If there are more than two outcomes, the color is `"BLUE"` for all outcomes.  |
 * | &nbsp;├──&nbsp;prediction_window | ${type.number}  | The length of time (in seconds) that the prediction will run for.  |
 * | &nbsp;├──&nbsp;status | ${type.string}  | The prediction's status. Valid values are: `"ACTIVE"` - The Prediction is running and viewers can make predictions. `"CANCELED"` - The broadcaster canceled the Prediction and refunded the Channel Points to the participants. `"LOCKED"` - The broadcaster locked the Prediction, which means viewers can no longer make predictions. `"RESOLVED"` - The winning outcome was determined and the Channel Points were distributed to the viewers who predicted the correct outcome.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The UTC date and time of when the Prediction began.  |
 * | &nbsp;├──&nbsp;ended_at | ${type.string}  | The UTC date and time of when the Prediction ended. If `status` is `"ACTIVE"`, this is set to `undefined`.  |
 * | &nbsp;└──&nbsp;locked_at | ${type.string}  | The UTC date and time of when the Prediction was locked. If `status` is not `"LOCKED"`, this is set to `undefined`.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_predictions_end_prediction(broadcaster_id, id, status, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_raids_start_a_raid
 * @desc **Twitch Endpoint:** [Start a raid](https://dev.twitch.tv/docs/api/reference/#start-a-raid)
 * 
 * This function raids another channel by sending the broadcaster's viewers to the targeted channel.
 * 
 * When you call the API from a chat bot or extension, the Twitch UX pops up a window at the top of the chat room that identifies the number of viewers in the raid. The raid occurs when the broadcaster clicks Raid Now or after the 90-second countdown expires.
 * 
 * To determine whether the raid successfully occurred, you must subscribe to the [Channel Raid](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelraid) event. For more information, see [Get notified when a raid begins](https://dev.twitch.tv/docs/api/raids#get-notified-when-a-raid-begins).
 * 
 * To cancel a pending raid, use the [Cancel a raid](https://dev.twitch.tv/docs/api/reference/#cancel-a-raid) endpoint.
 * 
 * **Rate Limit:** The limit is 10 requests within a 10-minute window.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_RAIDS`.]]
 * 
 * @param {string} from_broadcaster_id The ID of the broadcaster that's sending the raiding party. This ID must match the user ID in the user access token. 
 * @param {string} to_broadcaster_id The ID of the broadcaster to raid. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains a single struct with information about the pending raid.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The UTC date and time, in RFC3339 format, of when the raid was requested.  |
 * | &nbsp;└──&nbsp;is_mature | ${type.boolean}  | A Boolean value that indicates whether the channel being raided contains mature content.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_raids_start_a_raid(from_broadcaster_id, to_broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_raids_cancel_a_raid
 * @desc **Twitch Endpoint:** [Cancel a raid](https://dev.twitch.tv/docs/api/reference/#cancel-a-raid)
 * 
 * This function cancel a pending raid.
 * 
 * You can cancel a raid at any point up until the broadcaster clicks **Raid Now** in the Twitch UX or the 90-second countdown expires.
 * 
 * **Rate Limit**: The limit is 10 requests within a 10-minute window.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_RAIDS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that initiated the raid. This ID must match the user ID in the user access token. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_raids_cancel_a_raid(broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_schedule_get_channel_stream_schedule
 * @desc **Twitch Endpoint:** [Get Channel Stream Schedule](https://dev.twitch.tv/docs/api/reference/#get-channel-stream-schedule)
 * 
 * This function gets the broadcaster's streaming schedule. You can get the entire schedule or specific segments of the schedule. [Learn More](https://help.twitch.tv/s/article/channel-page-setup#Schedule)
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the streaming schedule you want to get. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `id` : ${type.real} or ${type.array} of ${type.real} : The ID of the scheduled segment to return. To specify more than one segment, pass an array with the IDs of the segments you want to get. You may specify a maximum of 100 IDs.
 * - `start_time` : ${type.string} : The UTC date and time that identifies when in the broadcaster's schedule to start returning segments. If not specified, the request returns segments starting after the current UTC date and time. Specify the date and time in RFC3339 format (for example, `2022-09-01T00:00:00Z`).
 * - `utc_offset` : ${type.string} : Not supported.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 25 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.struct}  | The broadcaster's streaming schedule.  |
 * | &nbsp;├──&nbsp;segments | ${type.array}  | The list of broadcasts in the broadcaster's streaming schedule.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this broadcast segment.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;start_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast starts.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;end_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast ends.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;title | ${type.string}  | The broadcast segment's title.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;canceled_until | ${type.string}  | Indicates whether the broadcaster canceled this segment of a recurring broadcast. If the broadcaster canceled this segment, this field is set to the same value that's in the  `end_time` field; otherwise, it's set to `undefined`.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;category | ${type.struct}  | The type of content that the broadcaster plans to stream or `undefined` if not specified.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the category that best represents the content that the broadcaster plans to stream. For example, the game's ID if the broadcaster will play a game or the Just Chatting ID if the broadcaster will host a talk show.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;name | ${type.string}  | The name of the category. For example, the game's title if the broadcaster will playing a game or Just Chatting if the broadcaster will host a talk show.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;is_recurring | ${type.boolean}  | A Boolean value that determines whether the broadcast is part of a recurring series that streams at the same time each week or is a one-time broadcast. Is `true` if the broadcast is part of a recurring series.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID of the broadcaster that owns the broadcast schedule.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;vacation | ${type.struct}  | The dates when the broadcaster is on vacation and not streaming. Is set to `undefined` if vacation mode is not enabled.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;start_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster's vacation starts.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;end_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster's vacation ends.  |
 * | &nbsp;├──&nbsp;pagination | ${type.struct}  | The information used to page through a list of results. The struct is empty if there are no more pages left to page through. [Read more](https://dev.twitch.tv/docs/api/guide#pagination).  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Set the request's `after` parameter to this value.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_schedule_get_channel_stream_schedule(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_schedule_get_channel_icalendar
 * @desc **Twitch Endpoint:** [Get Channel iCalendar](https://dev.twitch.tv/docs/api/reference/#get-channel-icalendar)
 * 
 * This function gets the broadcaster's streaming schedule as an iCalendar.
 * 
 * The response body contains the iCalendar data (see [RFC5545](https://datatracker.ietf.org/doc/html/rfc5545)).
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the streaming schedule you want to get. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * 
 * @event callback_success
 * @desc The iCalendar data.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_schedule_get_channel_icalendar(broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_schedule_update_channel_stream_schedule
 * @desc **Twitch Endpoint:** [Update Channel Stream Schedule](https://dev.twitch.tv/docs/api/reference/#update-channel-stream-schedule)
 * 
 * This function updates the broadcaster's schedule settings, such as scheduling a vacation.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_SCHEDULE`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose schedule settings you want to update. The ID must match the user ID in the user access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `is_vacation_enabled` : ${type.boolean} : A Boolean value that indicates whether the broadcaster has scheduled a vacation. Set to `true` to enable Vacation Mode and add vacation dates, or `false` to cancel a previously scheduled vacation.
 * - `vacation_start_time` : ${type.string} : The UTC date and time of when the broadcaster's vacation starts. Specify the date and time in RFC3339 format (for example, 2021-05-16T00:00:00Z). Required if `is_vacation_enabled` is `true`.
 * - `vacation_end_time` : ${type.string} : The UTC date and time of when the broadcaster's vacation ends. Specify the date and time in RFC3339 format (for example, 2021-05-30T23:59:59Z). Required if `is_vacation_enabled` is `true`.
 * - `timezone` : ${type.string} : The time zone that the broadcaster broadcasts from. Specify the time zone using [IANA time zone database](https://www.iana.org/time-zones) format (for example, America/New_York). Required if `is_vacation_enabled` is `true`.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_schedule_update_channel_stream_schedule(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_schedule_create_channel_stream_schedule_segment
 * @desc **Twitch Endpoint:** [Create Channel Stream Schedule Segment](https://dev.twitch.tv/docs/api/reference/#create-channel-stream-schedule-segment)
 * 
 * This function adds a single or recurring broadcast to the broadcaster's streaming schedule. For information about scheduling broadcasts, see [Stream Schedule](https://help.twitch.tv/s/article/channel-page-setup#Schedule).
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_SCHEDULE`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the schedule to add the broadcast segment to. This ID must match the user ID in the user access token. 
 * @param {string} start_time The date and time that the broadcast segment starts. Specify the date and time in RFC3339 format (for example, 2021-07-01T18:00:00Z). 
 * @param {string} timezone The time zone where the broadcast takes place. Specify the time zone using [IANA time zone database](https://www.iana.org/time-zones) format (for example, America/New_York). 
 * @param {string} duration The length of time, in minutes, that the broadcast is scheduled to run. The duration must be in the range 30 through 1380 (23 hours). 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `is_recurring` : ${type.boolean} : A Boolean value that determines whether the broadcast recurs weekly. Is `true` if the broadcast recurs weekly. Only partners and affiliates may add non-recurring broadcasts.
 * - `category_id` : ${type.string} : The ID of the category that best represents the broadcast's content. To get the category ID, use the ${function.twitch_search_categories} function.
 * - `title` : ${type.string} : The broadcast's title. The title may contain a maximum of 140 characters.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.struct}  | The broadcaster's streaming schedule.  |
 * | &nbsp;├──&nbsp;segments | ${type.array}  | A list that contains the single broadcast segment that you added.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this broadcast segment.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;start_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast starts.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;end_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast ends.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;title | ${type.string}  | The broadcast segment's title.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;canceled_until | ${type.string}  | Indicates whether the broadcaster canceled this segment of a recurring broadcast. If the broadcaster canceled this segment, this field is set to the same value that's in the  `end_time` field; otherwise, it's set to `undefined`.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;category | ${type.struct}  | The type of content that the broadcaster plans to stream or `undefined` if not specified.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the category that best represents the content that the broadcaster plans to stream. For example, the game's ID if the broadcaster will play a game or the Just Chatting ID if the broadcaster will host a talk show.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;name | ${type.string}  | The name of the category. For example, the game's title if the broadcaster will play a game or Just Chatting if the broadcaster will host a talk show.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;is_recurring | ${type.boolean}  | A Boolean value that determines whether the broadcast is part of a recurring series that streams at the same time each week or is a one-time broadcast. Is `true` if the broadcast is part of a recurring series.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID of the broadcaster that owns the broadcast schedule.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;└──&nbsp;vacation | ${type.struct}  | The dates when the broadcaster is on vacation and not streaming. Is set to `undefined` if vacation mode is not enabled.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;start_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster's vacation starts.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;end_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster's vacation ends.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_schedule_create_channel_stream_schedule_segment(broadcaster_id, start_time, timezone, duration, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_schedule_update_channel_stream_schedule_segment
 * @desc **Twitch Endpoint:** [Update Channel Stream Schedule Segment](https://dev.twitch.tv/docs/api/reference/#update-channel-stream-schedule-segment)
 * 
 * This function updates a scheduled broadcast segment.
 * 
 * For recurring segments, updating a segment's title, category, duration, and timezone, changes all segments in the recurring schedule, not just the specified segment.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_SCHEDULE`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster who owns the broadcast segment to update. This ID must match the user ID in the user access token. 
 * @param {string} id The ID of the broadcast segment to update. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `start_time` : ${type.string} : The date and time that the broadcast segment starts. Specify the date and time in RFC3339 format (for example, 2022-08-02T06:00:00Z). **NOTE:** Only partners and affiliates may update a broadcast's start time and only for non-recurring segments.
 * - `duration` : ${type.string} : The length of time, in minutes, that the broadcast is scheduled to run. The duration must be in the range 30 through 1380 (23 hours).
 * - `category_id` : ${type.string} : The ID of the category that best represents the broadcast's content. To get the category ID, use the ${function.twitch_search_categories} function.
 * - `title` : ${type.string} : The broadcast's title. The title may contain a maximum of 140 characters.
 * - `is_canceled` : ${type.boolean} : A Boolean value that indicates whether the broadcast is canceled. Set to `true` to cancel the segment.**NOTE**: For recurring segments, the API cancels the first segment after the current UTC date and time and not the specified segment (unless the specified segment is the next segment after the current UTC date and time).
 * - `timezone` : ${type.string} : The time zone where the broadcast takes place. Specify the time zone using [IANA time zone database](https://www.iana.org/time-zones) format (for example, America/New_York).
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.struct}  | The broadcaster's streaming scheduled.  |
 * | &nbsp;├──&nbsp;segments | ${type.array}  | A list that contains the single broadcast segment that you updated.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this broadcast segment.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;start_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast starts.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;end_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast ends.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;title | ${type.string}  | The broadcast segment's title.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;canceled_until | ${type.string}  | Indicates whether the broadcaster canceled this segment of a recurring broadcast. If the broadcaster canceled this segment, this field is set to the same value that's in the `end_time` field; otherwise, it's set to `undefined`.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;category | ${type.struct}  | The type of content that the broadcaster plans to stream or `undefined` if not specified.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the category that best represents the content that the broadcaster plans to stream. For example, the game's ID if the broadcaster will play a game or the Just Chatting ID if the broadcaster will host a talk show.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;name | ${type.string}  | The name of the category. For example, the game's title if the broadcaster will play a game or Just Chatting if the broadcaster will host a talk show.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;is_recurring | ${type.boolean}  | A Boolean value that determines whether the broadcast is part of a recurring series that streams at the same time each week or is a one-time broadcast. Is `true` if the broadcast is part of a recurring series.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | The ID of the broadcaster that owns the broadcast schedule.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;└──&nbsp;vacation | ${type.struct}  | The dates when the broadcaster is on vacation and not streaming. Is set to `undefined` if vacation mode is not enabled.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;start_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster's vacation starts.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;end_time | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster's vacation ends.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_schedule_update_channel_stream_schedule_segment(broadcaster_id, id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_schedule_delete_channel_stream_schedule_segment
 * @desc **Twitch Endpoint:** [Delete Channel Stream Schedule Segment](https://dev.twitch.tv/docs/api/reference/#delete-channel-stream-schedule-segment)
 * 
 * This function removes a broadcast segment from the broadcaster's streaming schedule.
 * 
 * [[Note: For recurring segments, removing a segment removes all segments in the recurring schedule.]]
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_SCHEDULE`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the streaming schedule. This ID must match the user ID in the user access token. 
 * @param {string} id The ID of the broadcast segment to remove. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_schedule_delete_channel_stream_schedule_segment(broadcaster_id, id, callback_success, callback_failed) {}


/**
 * @func twitch_search_categories
 * @desc **Twitch Endpoint:** [Search Categories](https://dev.twitch.tv/docs/api/reference/#search-categories)
 * 
 * This function gets the games or categories that match the specified query.
 * 
 * To match, the category's name must contain all parts of the query string. For example, if the query string is 42, the response includes any category name that contains 42 in the title. If the query string is a phrase like *love computer*, the response includes any category name that contains the words love and computer anywhere in the name. The comparison is case insensitive.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string} query The URI-encoded search string. For example, encode #archery as `%23archery` and search strings like angel of death as `angel%20of%20death`.
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of games or categories that match the query. The list is empty if there are no matches.  |
 * | &nbsp;├──&nbsp;box_art_url | ${type.string}  | A URL to an image of the game's box art or streaming category.  |
 * | &nbsp;├──&nbsp;name | ${type.string}  | The name of the game or category.  |
 * | &nbsp;└──&nbsp;id | ${type.string}  | An ID that uniquely identifies the game or category.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_search_categories(query, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_search_channels
 * @desc **Twitch Endpoint:** [Search Channels](https://dev.twitch.tv/docs/api/reference/#search-channels)
 * 
 * This function gets the channels that match the specified query and have streamed content within the past 6 months.
 * 
 * The fields that the API uses for comparison depends on the value that the `live_only` parameter is set to. If `live_only` is `false`, the API matches on the broadcaster's login name. However, if `live_only` is `true`, the API matches on the broadcaster's name and category name.
 * 
 * To match, the beginning of the broadcaster's name or category must match the query string. The comparison is case insensitive. If the query string is `"angel_of_death"`, it matches all names that begin with `"angel_of_death"`. However, if the query string is a phrase like `"angel of death"`, it matches to names starting with `"angelofdeath"` or names starting with `"angel_of_death"`.
 * 
 * By default, the results include both live and offline channels. To get only live channels set the `live_only` parameter to `true`.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string} query The URI-encoded search string. For example, encode search strings like `"angel of death"` as `"angel%20of%20death"`.
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `live_only` : ${type.boolean} : A Boolean value that determines whether the response includes only channels that are currently streaming live. Set to `true` to get only channels that are streaming live; otherwise, `false` to get live and offline channels. The default is `false`.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of channels that match the query. The list is empty if there are no matches.  |
 * | &nbsp;├──&nbsp;broadcaster_language | ${type.string}  | The ISO 639-1 two-letter language code of the language used by the broadcaster. For example, `"en"` for English. If the broadcaster uses a language not in the list of [supported stream languages](https://help.twitch.tv/s/article/languages-on-twitch#streamlang), the value is `"other"`. |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;display_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;game_id | ${type.string}  | The ID of the game that the broadcaster is playing or last played.  |
 * | &nbsp;├──&nbsp;game_name | ${type.string}  | The name of the game that the broadcaster is playing or last played.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that uniquely identifies the channel (this is the broadcaster's ID).  |
 * | &nbsp;├──&nbsp;is_live | ${type.boolean}  | A Boolean value that determines whether the broadcaster is streaming live. Is `true` if the broadcaster is streaming live; otherwise, `false`.  |
 * | &nbsp;├──&nbsp;tag_ids | ${type.array} of ${type.string}  | **IMPORTANT** As of February 28, 2023, this field is deprecated and returns only an empty array. If you use this field, please update your code to use the `tags` field.The list of tags that apply to the stream. The list contains IDs only when the channel is streaming live. For a list of possible tags, see [List of All Tags](https://www.twitch.tv/directory/all/tags). The list doesn't include Category Tags. |
 * | &nbsp;├──&nbsp;tags | ${type.array} of ${type.string}  | The tags applied to the channel.  |
 * | &nbsp;├──&nbsp;thumbnail_url | ${type.string}  | A URL to a thumbnail of the broadcaster's profile image.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The stream's title. Is an empty string if the broadcaster didn't set it.  |
 * | &nbsp;└──&nbsp;started_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcaster started streaming. The string is empty if the broadcaster is not streaming live.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_search_channels(query, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_streams_get_stream_key
 * @desc **Twitch Endpoint:** [Get Stream Key](https://dev.twitch.tv/docs/api/reference/#get-stream-key)
 * 
 * This function gets the channel's stream key.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_READ_STREAM_KEY`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster that owns the channel. The ID must match the user ID in the access token. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the channel's stream key.  |
 * | &nbsp;└──&nbsp;stream_key | ${type.string}  | The channel's stream key.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_streams_get_stream_key(broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_streams_get_streams
 * @desc **Twitch Endpoint:** [Get Streams](https://dev.twitch.tv/docs/api/reference/#get-streams)
 * 
 * This function gets a list of all streams. The list is in descending order by the number of viewers watching the stream. Because viewers come and go during a stream, it's possible to find duplicate or missing streams in the list as you page through the results.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `user_id` : ${type.string} : A user ID used to filter the list of streams. Returns only the streams of those users that are broadcasting. You may specify a maximum of 100 IDs. To specify multiple IDs, include the `user_id` parameter for each user. For example, `&amp;user_id=1234&amp;user_id=5678`.
 * - `user_login` : ${type.string} : A user login name used to filter the list of streams. Returns only the streams of those users that are broadcasting. You may specify a maximum of 100 login names. To specify multiple names, include the `user_login` parameter for each user. For example, `&amp;user_login=foo&amp;user_login=bar`.
 * - `game_id` : ${type.string} : A game (category) ID used to filter the list of streams. Returns only the streams that are broadcasting the game (category). You may specify a maximum of 100 IDs. To specify multiple IDs, include the `game_id` parameter for each game. For example, `&amp;game_id=9876&amp;game_id=5432`.
 * - `type` : ${type.string} : The type of stream to filter the list of streams by. Possible values are: `"all"`, `"live"`. The default is `"all"`.
 * - `language` : ${type.string} : A language code used to filter the list of streams. Returns only streams that broadcast in the specified language. Specify the language using an ISO 639-1 two-letter language code or `"other"` if the broadcast uses a language not in the list of [supported stream languages](https://help.twitch.tv/s/article/languages-on-twitch#streamlang). You may specify a maximum of 100 language codes. To specify multiple languages, include the `language` parameter for each language. For example, `&amp;language=de&amp;language=fr`.
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `before` : ${type.string} : The cursor used to get the previous page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of streams.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the stream. You can use this ID later to look up the video on demand (VOD).  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | The ID of the user that's broadcasting the stream.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;game_id | ${type.string}  | The ID of the category or game being played.  |
 * | &nbsp;├──&nbsp;game_name | ${type.string}  | The name of the category or game being played.  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The type of stream. Possible values are: `"live"`. If an error occurs, this field is set to an empty string.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The stream's title. Is an empty string if not set.  |
 * | &nbsp;├──&nbsp;tags | ${type.array} of ${type.string}  | The tags applied to the stream.  |
 * | &nbsp;├──&nbsp;viewer_count | ${type.number}  | The number of users watching the stream.  |
 * | &nbsp;├──&nbsp;started_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast began.  |
 * | &nbsp;├──&nbsp;language | ${type.string}  | The language that the stream uses. This is an ISO 639-1 two-letter language code or `"other"` if the stream uses a language not in the list of [supported stream languages](https://help.twitch.tv/s/article/languages-on-twitch#streamlang).  |
 * | &nbsp;├──&nbsp;thumbnail_url | ${type.string}  | A URL to an image of a frame from the last 5 minutes of the stream. Replace the width and height placeholders in the URL (`{width}x{height}`) with the size of the image you want, in pixels.  |
 * | &nbsp;├──&nbsp;tag_ids | ${type.array} of ${type.string}  | **IMPORTANT** As of February 28, 2023, this field is deprecated and returns only an empty array. If you use this field, please update your code to use the `tags` field. The list of tags that apply to the stream. The list contains IDs only when the channel is streaming live. For a list of possible tags, see [List of All Tags](https://www.twitch.tv/directory/all/tags). The list doesn't include Category Tags.  |
 * | &nbsp;└──&nbsp;is_mature | ${type.boolean}  | A Boolean value that indicates whether the stream is meant for mature audiences.  |
 * | pagination | ${type.struct}  | The information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Set the request's `after` or `before` parameter to this value depending on whether you're paging forwards or backwards.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_streams_get_streams(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_streams_get_followed_streams
 * @desc **Twitch Endpoint:** [Get Followed Streams](https://dev.twitch.tv/docs/api/reference/#get-followed-streams)
 * 
 * This function gets the list of broadcasters that the user follows and that are streaming live.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_FOLLOWS`.]]
 * 
 * @param {string} user_id The ID of the user whose list of followed streams you want to get. This ID must match the user ID in the access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 100.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of live streams of broadcasters that the specified user follows. The list is in descending order by the number of viewers watching the stream. Because viewers come and go during a stream, it's possible to find duplicate or missing streams in the list as you page through the results. The list is empty if none of the followed broadcasters are streaming live.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the stream. You can use this ID later to look up the video on demand (VOD).  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | The ID of the user that's broadcasting the stream.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;game_id | ${type.string}  | The ID of the category or game being played.  |
 * | &nbsp;├──&nbsp;game_name | ${type.string}  | The ID of the category or game being played.  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The type of stream. Possible values are: `"live"`. If an error occurs, this field is set to an empty string.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The stream's title. Is an empty string if not set.  |
 * | &nbsp;├──&nbsp;viewer_count | ${type.number}  | The number of users watching the stream.  |
 * | &nbsp;├──&nbsp;started_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the broadcast began.  |
 * | &nbsp;├──&nbsp;language | ${type.string}  | The language that the stream uses. This is an ISO 639-1 two-letter language code or `"other"` if the stream uses a language not in the list of [supported stream languages](https://help.twitch.tv/s/article/languages-on-twitch#streamlang).  |
 * | &nbsp;├──&nbsp;thumbnail_url | ${type.string}  | A URL to an image of a frame from the last 5 minutes of the stream. Replace the width and height placeholders in the URL (`{width}x{height}`) with the size of the image you want, in pixels.  |
 * | &nbsp;├──&nbsp;tag_ids | ${type.array} of ${type.string}  | **IMPORTANT** As of February 28, 2023, this field is deprecated and returns only an empty array. If you use this field, please update your code to use the `tags` field. The list of tags that apply to the stream. The list contains IDs only when the channel is streaming live. For a list of possible tags, see [List of All Tags](https://www.twitch.tv/directory/all/tags). The list doesn't include Category Tags.  |
 * | &nbsp;├──&nbsp;tags | ${type.array} of ${type.string}  | The tags applied to the stream.  |
 * | &nbsp;└──&nbsp;is_mature | ${type.boolean}  | A Boolean value that indicates whether the stream is meant for mature audiences.  |
 * | pagination | ${type.struct}  | The information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Set the request's `after` parameter to this value.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_streams_get_followed_streams(user_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_streams_create_stream_marker
 * @desc **Twitch Endpoint:** [Create Stream Marker](https://dev.twitch.tv/docs/api/reference/#create-stream-marker)
 * 
 * This function adds a marker to a live stream. A marker is an arbitrary point in a live stream that the broadcaster or editor wants to mark, so they can return to that spot later to create video highlights (see Video Producer, Highlights in the Twitch UX).
 * 
 * You may not add markers:
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_BROADCAST`.]]
 * 
 * @param {string} user_id The ID of the broadcaster that's streaming content. This ID must match the user ID in the access token or the user in the access token must be one of the broadcaster's editors. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `description` : ${type.string} : A short description of the marker to help the user remember why they marked the location. The maximum length of the description is 140 characters.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single marker that you added.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this marker.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the user created the marker.  |
 * | &nbsp;├──&nbsp;position_seconds | ${type.number}  | The relative offset (in seconds) of the marker from the beginning of the stream.  |
 * | &nbsp;└──&nbsp;description | ${type.string}  | A description that the user gave the marker to help them remember why they marked the location.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_streams_create_stream_marker(user_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_streams_get_stream_markers
 * @desc **Twitch Endpoint:** [Get Stream Markers](https://dev.twitch.tv/docs/api/reference/#get-stream-markers)
 * 
 * This function gets a list of markers from the user's most recent stream or from the specified VOD/video. A marker is an arbitrary point in a live stream that the broadcaster or editor marked, so they can return to that spot later to create video highlights (see Video Producer, Highlights in the Twitch UX).
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the `TWITCH_SCOPE_USER_READ_BROADCAST` or `TWITCH_SCOPE_CHANNEL_MANAGE_BROADCAST` scope.]]
 * 
 * @param {string} user_id A user ID. The request returns the markers from this user's most recent video. This ID must match the user ID in the access token or the user in the access token must be one of the broadcaster's editors. This parameter and the `video_id` parameter are mutually exclusive. 
 * @param {string} video_id A video on demand (VOD)/video ID. The request returns the markers from this VOD/video. The user in the access token must own the video or the user must be one of the broadcaster's editors. This parameter and the `user_id` parameter are mutually exclusive. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `first` : ${type.string} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `before` : ${type.string} : The cursor used to get the previous page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of markers grouped by the user that created the marks.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | The ID of the user that created the marker.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;videos | ${type.array}  | A list of videos that contain markers. The list contains a single video.  |
 * | &nbsp;├──&nbsp;video_id | ${type.string}  | An ID that identifies this video.  |
 * | &nbsp;└──&nbsp;markers | ${type.array}  | The list of markers in this video. The list in ascending order by when the marker was created.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies this marker.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;created_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the user created the marker.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;description | ${type.string}  | The description that the user gave the marker to help them remember why they marked the location. Is an empty string if the user didn't provide one.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;position_seconds | ${type.number}  | The relative offset (in seconds) of the marker from the beginning of the stream.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;url | ${type.string}  | A URL that opens the video in Twitch Highlighter.  |
 * | pagination | ${type.struct}  | The information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Set the request's `after` or `before` parameter to this value depending on whether you're paging forwards or backwards.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_streams_get_stream_markers(user_id, video_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_subscriptions_get_broadcaster_subscriptions
 * @desc **Twitch Endpoint:** [Get Broadcaster Subscriptions](https://dev.twitch.tv/docs/api/reference/#get-broadcaster-subscriptions)
 * 
 * This function gets a list of users that subscribe to the specified broadcaster.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_READ_SUBSCRIPTIONS`.]]
 * 
 * A Twitch extensions may use an app access token if the broadcaster has granted the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_READ_SUBSCRIPTIONS`.from within the Twitch Extensions manager.
 * 
 * @param {string} broadcaster_id The broadcaster's ID. This ID must match the user ID in the access token. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `user_id` : ${type.real} or ${type.array} of ${type.real} : Filters the list to include only the specified subscribers. To specify more than one subscriber, pass an array with the ID of each subscriber. You may specify a maximum of 100 subscribers.
 * - `first` : ${type.string} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. Do not specify if you set the `user_id` parameter. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * - `before` : ${type.string} : The cursor used to get the previous page of results. Do not specify if you set the `user_id` parameter. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users that subscribe to the broadcaster. The list is empty if the broadcaster has no subscribers.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that identifies the broadcaster.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;gifter_id | ${type.string}  | The ID of the user that gifted the subscription to the user. Is an empty string if `is_gift` is `false`.  |
 * | &nbsp;├──&nbsp;gifter_login | ${type.string}  | The gifter's login name. Is an empty string if `is_gift` is `false`.  |
 * | &nbsp;├──&nbsp;gifter_name | ${type.string}  | The gifter's display name. Is an empty string if `is_gift` is `false`.  |
 * | &nbsp;├──&nbsp;is_gift | ${type.boolean}  | A Boolean value that determines whether the subscription is a gift subscription. Is `true` if the subscription was gifted.  |
 * | &nbsp;├──&nbsp;plan_name | ${type.string}  | The name of the subscription.  |
 * | &nbsp;├──&nbsp;tier | ${type.string}  | The type of subscription. Possible values are: 1000 - Tier 1, 2000 - Tier 2, 3000 - Tier 3  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | An ID that identifies the subscribing user.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The user's display name.  |
 * | &nbsp;└──&nbsp;user_login | ${type.string}  | The user's login name.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next or previous page of results. Use the cursor to set the request's `after` or `before` parameter depending on whether you're paging forwards or backwards.  |
 * | points | ${type.number}  | The current number of subscriber points earned by this broadcaster. Points are based on the subscription tier of each user that subscribes to this broadcaster. For example, a Tier 1 subscription is worth 1 point, Tier 2 is worth 2 points, and Tier 3 is worth 6 points. The number of points determines the number of emote slots that are unlocked for the broadcaster (see [Subscriber Emote Slots](https://help.twitch.tv/s/article/subscriber-emote-guide#emoteslots)).  |
 * | total | ${type.number}  | The total number of users that subscribe to this broadcaster.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_subscriptions_get_broadcaster_subscriptions(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_subscriptions_check_user_subscription
 * @desc **Twitch Endpoint:** [Check User Subscription](https://dev.twitch.tv/docs/api/reference/#check-user-subscription)
 * 
 * This function checks whether the user subscribes to the broadcaster's channel.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_SUBSCRIPTIONS`.]]
 * 
 * A Twitch extension may use an app access token if the broadcaster has granted the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_SUBSCRIPTIONS`.from within the Twitch Extensions manager.
 * 
 * @param {string} broadcaster_id The ID of a partner or affiliate broadcaster. 
 * @param {string} user_id The ID of the user that you're checking to see whether they subscribe to the broadcaster in `broadcaster_id`. This ID must match the user ID in the access Token. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains a single struct with information about the user's subscription.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that identifies the broadcaster.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;gifter_id | ${type.string}  | The ID of the user that gifted the subscription. The struct includes this field only if `is_gift` is `true`.  |
 * | &nbsp;├──&nbsp;gifter_login | ${type.string}  | The gifter's login name. The struct includes this field only if `is_gift` is `true`.  |
 * | &nbsp;├──&nbsp;gifter_name | ${type.string}  | The gifter's display name. The struct includes this field only if `is_gift` is `true`.  |
 * | &nbsp;├──&nbsp;is_gift | ${type.boolean}  | A Boolean value that determines whether the subscription is a gift subscription. Is `true` if the subscription was gifted. |
 * | &nbsp;└──&nbsp;tier | ${type.string}  | The type of subscription. Possible values are: 1000 - Tier 1, 2000 - Tier 2, 3000 - Tier 3  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_subscriptions_check_user_subscription(broadcaster_id, user_id, callback_success, callback_failed) {}


/**
 * @func twitch_teams_get_channel_teams
 * @desc **Twitch Endpoint:** [Get Channel Teams](https://dev.twitch.tv/docs/api/reference/#get-channel-teams)
 * 
 * This function gets the list of Twitch teams that the broadcaster is a member of.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose teams you want to get. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of teams that the broadcaster is a member of. Returns an empty array if the broadcaster is not a member of a team.  |
 * | &nbsp;├──&nbsp;broadcaster_id | ${type.string}  | An ID that identifies the broadcaster.  |
 * | &nbsp;├──&nbsp;broadcaster_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;broadcaster_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;background_image_url | ${type.string}  | A URL to the team's background image.  |
 * | &nbsp;├──&nbsp;banner | ${type.string}  | A URL to the team's banner.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the team was created.  |
 * | &nbsp;├──&nbsp;updated_at | ${type.string}  | The UTC date and time (in RFC3339 format) of the last time the team was updated.  |
 * | &nbsp;├──&nbsp;info | ${type.string}  | The team's description. The description may contain formatting such as Markdown, HTML, newline (\n) characters, etc.  |
 * | &nbsp;├──&nbsp;thumbnail_url | ${type.string}  | A URL to a thumbnail image of the team's logo.  |
 * | &nbsp;├──&nbsp;team_name | ${type.string}  | The team's name.  |
 * | &nbsp;├──&nbsp;team_display_name | ${type.string}  | The team's display name.  |
 * | &nbsp;└──&nbsp;id | ${type.string}  | An ID that identifies the team.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_teams_get_channel_teams(broadcaster_id, callback_success, callback_failed) {}


/**
 * @func twitch_teams_get_teams
 * @desc **Twitch Endpoint:** [Get Teams](https://dev.twitch.tv/docs/api/reference/#get-teams)
 * 
 * This function gets information about the specified Twitch team. [Read More](https://help.twitch.tv/s/article/twitch-teams)
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string} name The name of the team to get. This parameter and the `id` parameter are mutually exclusive; you must specify the team's name or ID but not both. 
 * @param {string} id The ID of the team to get. This parameter and the `name` parameter are mutually exclusive; you must specify the team's name or ID but not both. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list that contains the single team that you requested.  |
 * | &nbsp;├──&nbsp;users | ${type.array}  | The list of team members.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_id | ${type.string}  | An ID that identifies the team member.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;user_login | ${type.string}  | The team member's login name.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;user_name | ${type.string}  | The team member's display name.  |
 * | &nbsp;├──&nbsp;background_image_url | ${type.string}  | A URL to the team's background image.  |
 * | &nbsp;├──&nbsp;banner | ${type.string}  | A URL to the team's banner.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The UTC date and time (in RFC3339 format) of when the team was created.  |
 * | &nbsp;├──&nbsp;updated_at | ${type.string}  | The UTC date and time (in RFC3339 format) of the last time the team was updated.  |
 * | &nbsp;├──&nbsp;info | ${type.string}  | The team's description. The description may contain formatting such as Markdown, HTML, newline (\n) characters, etc.  |
 * | &nbsp;├──&nbsp;thumbnail_url | ${type.string}  | A URL to a thumbnail image of the team's logo.  |
 * | &nbsp;├──&nbsp;team_name | ${type.string}  | The team's name.  |
 * | &nbsp;├──&nbsp;team_display_name | ${type.string}  | The team's display name.  |
 * | &nbsp;└──&nbsp;id | ${type.string}  | An ID that identifies the team.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_teams_get_teams(name, id, callback_success, callback_failed) {}


/**
 * @func twitch_users_get_user
 * @desc **Twitch Endpoint:** N / A
 * 
 * This function returns the current Twitch user.
 * 
 * This function is not part of the Twitch API and is specific to the extension.
 * 
 * @func_end
 */

/**
 * @func twitch_users_get_users
 * @desc **Twitch Endpoint:** [Get Users](https://dev.twitch.tv/docs/api/reference/#get-users)
 * 
 * This function gets information about one or more users. 
 * You may look up users using their user ID, login name, or both but the sum total of the number of users you may look up is 100. For example, you may specify 50 IDs and 50 names or 100 IDs or names, but you cannot specify 100 IDs and 100 names. 
 * If you don't specify IDs or login names, the request returns information about the user in the access token if you specify a user access token. 
 * To include the user's verified email address in the response, you must use a user access token that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_EMAIL`.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `id` : ${type.real} or ${type.array} of ${type.real} : The ID of the user to get. To specify more than one user, pass an array with the ID of each user to get. The maximum number of IDs you may specify is 100.
 * - `login` : ${type.string} or ${type.array} of ${type.string} : The login name of the user to get. To specify more than one user, pass an array with the ID of each user to get. The maximum number of login names you may specify is 100.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of users.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the user.  |
 * | &nbsp;├──&nbsp;login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;display_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The type of user. Possible values are: `"admin"` — Twitch administrator, `"global_mod"`, `"staff"` — Twitch staff, `""` — Normal user  |
 * | &nbsp;├──&nbsp;broadcaster_type | ${type.string}  | The type of broadcaster. The type of broadcaster. Possible values are: `"affiliate"` — An affiliate broadcaster [affiliate broadcaster](https://help.twitch.tv/s/article/joining-the-affiliate-program?language=en_US), `"partner"` — A partner broadcaster [partner broadcaster](https://help.twitch.tv/s/article/partner-program-overview), `""` — A normal broadcaster  |
 * | &nbsp;├──&nbsp;description | ${type.string}  | The user's description of their channel.  |
 * | &nbsp;├──&nbsp;profile_image_url | ${type.string}  | A URL to the user's profile image.  |
 * | &nbsp;├──&nbsp;offline_image_url | ${type.string}  | A URL to the user's offline image.  |
 * | &nbsp;├──&nbsp;view_count | ${type.number}  | The number of times the user's channel has been viewed. **NOTE:** This field has been deprecated (see [Get Users API endpoint – "view_count" deprecation](https://discuss.dev.twitch.tv/t/get-users-api-endpoint-view-count-deprecation/37777)). Any data in this field is not valid and should not be used.  |
 * | &nbsp;├──&nbsp;email | ${type.string}  | The user's verified email address. The struct includes this field only if the user access token includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_EMAIL`. If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | &nbsp;└──&nbsp;created_at | ${type.string}  | The UTC date and time that the user's account was created. The timestamp is in RFC3339 format.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_users_get_users(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_users_update_user
 * @desc **Twitch Endpoint:** [Update User](https://dev.twitch.tv/docs/api/reference/#update-user)
 * 
 * This function updates the specified user's information. The user ID in the OAuth token identifies the user whose information you want to update.
 * 
 * To include the user's verified email address in the response, the user access token must also include the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_EMAIL`.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_EDIT`.]]
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `description` : ${type.string} : The string to update the channel's description to. The description is limited to a maximum of 300 characters. To remove the description, specify this member and set it to an empty string `""`.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | A list contains the single user that you updated.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the user.  |
 * | &nbsp;├──&nbsp;login | ${type.string}  | The user's login name.  |
 * | &nbsp;├──&nbsp;display_name | ${type.string}  | The user's display name.  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The type of user. Possible values are: `"admin"` — Twitch administrator, `"global_mod"`, `"staff"` — Twitch staff, `""` — Normal user  |
 * | &nbsp;├──&nbsp;broadcaster_type | ${type.string}  | The type of broadcaster. Possible values are: `"affiliate"` — An affiliate broadcaster, `"partner"` — A partner broadcaster, `""` — A normal broadcaster  |
 * | &nbsp;├──&nbsp;description | ${type.string}  | The user's description of their channel.  |
 * | &nbsp;├──&nbsp;profile_image_url | ${type.string}  | A URL to the user's profile image.  |
 * | &nbsp;├──&nbsp;offline_image_url | ${type.string}  | A URL to the user's offline image.  |
 * | &nbsp;├──&nbsp;view_count | ${type.number}  | The number of times the user's channel has been viewed. **NOTE:** This field has been deprecated (see [Get Users API endpoint – "view_count" deprecation](https://discuss.dev.twitch.tv/t/get-users-api-endpoint-view-count-deprecation/37777)). Any data in this field is not valid and should not be used.  |
 * | &nbsp;├──&nbsp;email | ${type.string}  | The user's verified email address. The struct includes this field only if the user access token includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_EMAIL`.If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.  |
 * | &nbsp;└──&nbsp;created_at | ${type.string}  | The UTC date and time that the user's account was created. The timestamp is in RFC3339 format.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_users_update_user(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_users_get_user_block_list
 * @desc **Twitch Endpoint:** [Get User Block List](https://dev.twitch.tv/docs/api/reference/#get-user-block-list)
 * 
 * This function gets the list of users that the broadcaster has blocked. [Read More](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat?language=en_US#BlockWhispersandMessagesfromStrangers)
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_READ_BLOCKED_USERS`.]]
 * 
 * @param {string} broadcaster_id The ID of the broadcaster whose list of blocked users you want to get. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `first` : ${type.number} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of blocked users. The list is in descending order by when the user was blocked.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | An ID that identifies the blocked user.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The blocked user's login name.  |
 * | &nbsp;└──&nbsp;display_name | ${type.string}  | The blocked user's display name.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_users_get_user_block_list(broadcaster_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_users_block_user
 * @desc **Twitch Endpoint:** [Block User](https://dev.twitch.tv/docs/api/reference/#block-user)
 * 
 * This function blocks the specified user from interacting with or having contact with the broadcaster. The user ID in the OAuth token identifies the broadcaster who is blocking the user.
 * 
 * To learn more about blocking users, see [Block Other Users on Twitch](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat?language=en_US#BlockWhispersandMessagesfromStrangers).
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_MANAGE_BLOCKED_USERS`.]]
 * 
 * @param {string} target_user_id The ID of the user to block. The API ignores the request if the broadcaster has already blocked the user. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `source_context` : ${type.string} : The location where the harassment took place that is causing the broadcaster to block the user. Possible values are: `"chat"`, `"whisper"`.
 * - `reason` : ${type.string} : The reason that the broadcaster is blocking the user. Possible values are: `"harassment"`, `"spam"`, `"other"`
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_users_block_user(target_user_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_users_unblock_user
 * @desc **Twitch Endpoint:** [Unblock User](https://dev.twitch.tv/docs/api/reference/#unblock-user)
 * 
 * This function removes the user from the broadcaster's list of blocked users. The user ID in the OAuth token identifies the broadcaster who's removing the block.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_MANAGE_BLOCKED_USERS`.]]
 * 
 * @param {string} target_user_id The ID of the user to remove from the broadcaster's list of blocked users. The API ignores the request if the broadcaster hasn't blocked the user. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_users_unblock_user(target_user_id, callback_success, callback_failed) {}


/**
 * @func twitch_users_get_user_extensions
 * @desc **Twitch Endpoint:** [Get User Extensions](https://dev.twitch.tv/docs/api/reference/#get-user-extensions)
 * 
 * This function gets a list of all extensions (both active and inactive) that the broadcaster has installed. The user ID in the access token identifies the broadcaster.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the `TWITCH_SCOPE_USER_READ_BROADCAST` or `TWITCH_SCOPE_USER_EDIT_BROADCAST` scope. To include inactive extensions, you must include the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_EDIT_BROADCAST`.]]
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of extensions that the user has installed.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the extension.  |
 * | &nbsp;├──&nbsp;version | ${type.string}  | The extension's version.  |
 * | &nbsp;├──&nbsp;name | ${type.string}  | The extension's name.  |
 * | &nbsp;├──&nbsp;can_activate | ${type.boolean}  | A Boolean value that determines whether the extension is configured and can be activated. Is `true` if the extension is configured and can be activated.  |
 * | &nbsp;└──&nbsp;type | ${type.array} of ${type.string}  | The extension types that you can activate for this extension. Possible values are: `"component"`, `"mobile"`, `"overlay"`, `"panel"`  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_users_get_user_extensions(callback_success, callback_failed) {}


/**
 * @func twitch_users_get_user_active_extensions
 * @desc **Twitch Endpoint:** [Get User Active Extensions](https://dev.twitch.tv/docs/api/reference/#get-user-active-extensions)
 * 
 * This function gets the active extensions that the broadcaster has installed for each configuration.
 * 
 * [[Note: To include extensions that you have under development, you must specify a user access token that includes the `TWITCH_SCOPE_USER_READ_BROADCAST` or `TWITCH_SCOPE_USER_EDIT_BROADCAST` scope.]]
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `user_id` : ${type.string} : The ID of the broadcaster whose active extensions you want to get. This parameter is required if you specify an app access token and is optional if you specify a user access token. If you specify a user access token and don't specify this parameter, the API uses the user ID from the access token.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.struct}  | The active extensions that the broadcaster has installed.  |
 * | &nbsp;├──&nbsp;panel | ${type.struct}  | A dictionary that contains the data for a panel extension. The dictionary's key is a sequential number beginning with `"1"`. The following fields contain the panel's data for each key.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;active | ${type.boolean}  | A Boolean value that determines the extension's activation state. If `false`, the user has not configured this panel extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;version | ${type.string}  | The extension's version.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;name | ${type.string}  | The extension's name.  |
 * | &nbsp;├──&nbsp;overlay | ${type.struct}  | A dictionary that contains the data for a video-overlay extension. The dictionary's key is a sequential number beginning with `"1"`. The following fields contain the overlay's data for each key.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;active | ${type.boolean}  | A Boolean value that determines the extension's activation state. If `false`, the user has not configured this overlay extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;version | ${type.string}  | The extension's version.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;name | ${type.string}  | The extension's name.  |
 * | &nbsp;└──&nbsp;component | ${type.struct}  | A dictionary that contains the data for a video-component extension. The dictionary's key is a sequential number beginning with `"1"`. The following fields contain the component's data for each key.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;active | ${type.boolean}  | A Boolean value that determines the extension's activation state. If `false`, the user has not configured this component extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;version | ${type.string}  | The extension's version.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;name | ${type.string}  | The extension's name.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;x | ${type.number}  | The x-coordinate where the extension is placed.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;y | ${type.number}  | The y-coordinate where the extension is placed.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_users_get_user_active_extensions(optionals, callback_success, callback_failed) {}


/**
 * @func twitch_users_update_user_extensions
 * @desc **Twitch Endpoint:** [Update User Extensions](https://dev.twitch.tv/docs/api/reference/#update-user-extensions)
 * 
 * This function updates an installed extension's information. You can update the extension's activation state, ID, and version number. The user ID in the access token identifies the broadcaster whose extensions you're updating.
 * 
 * [[Note: If you try to activate an extension under multiple extension types, the last write wins (and there is no guarantee of write order).]]
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_EDIT_BROADCAST`.]]
 * 
 * @param {struct} data The extensions to update. The data field is a dictionary of extension types. The dictionary's possible keys are: `"panel"`, `"overlay"`, or `"component"`. The key's value is a dictionary of extensions.
 * 
 * For the extension's dictionary, the key is a sequential number beginning with 1. For panel and overlay extensions, the key's value is a struct that contains the following fields: `active` (`true`/`false`), `id` (the extension's ID), and `version` (the extension's version). For component extensions, the key's value includes the above fields plus the `x` and `y` fields, which identify the coordinate where the extension is placed. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.struct}  | The extensions that the broadcaster updated.  |
 * | &nbsp;├──&nbsp;panel | ${type.struct}  | A dictionary that contains the data for a panel extension. The dictionary's key is a sequential number beginning with `"1"`. The following fields contain the panel's data for each key.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;active | ${type.boolean}  | A Boolean value that determines the extension's activation state. If `false`, the user has not configured a panel extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;version | ${type.string}  | The extension's version.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;name | ${type.string}  | The extension's name.  |
 * | &nbsp;├──&nbsp;overlay | ${type.struct}  | A dictionary that contains the data for a video-overlay extension. The dictionary's key is a sequential number beginning with `"1"`. The following fields contain the overlay's data for each key.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;active | ${type.boolean}  | A Boolean value that determines the extension's activation state. If `false`, the user has not configured an overlay extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;version | ${type.string}  | The extension's version.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;name | ${type.string}  | The extension's name.  |
 * | &nbsp;└──&nbsp;component | ${type.struct}  | A dictionary that contains the data for a video-component extension. The dictionary's key is a sequential number beginning with `"1"`. The following fields contain the component's data for each key.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;active | ${type.boolean}  | A Boolean value that determines the extension's activation state. If `false`, the user has not configured a component extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the extension.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;version | ${type.string}  | The extension's version.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;name | ${type.string}  | The extension's name.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;x | ${type.number}  | The x-coordinate where the extension is placed.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;y | ${type.number}  | The y-coordinate where the extension is placed.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_users_update_user_extensions(data, callback_success, callback_failed) {}


/**
 * @func twitch_videos_get_videos
 * @desc **Twitch Endpoint:** [Get Videos](https://dev.twitch.tv/docs/api/reference/#get-videos)
 * 
 * This function gets information about one or more published videos. You may get videos by ID, by user, or by game/category.
 * 
 * You may apply several filters to get a subset of the videos. The filters are applied as an AND operation to each video. For example, if `language` is set to `"de"` and `game_id` is set to `"21779"`, the response includes only videos that show playing League of Legends by users that stream in German. The filters apply only if you get videos by user ID or game ID.
 * 
 * [[Note: Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).]]
 * 
 * @param {string} id A list of IDs that identify the videos you want to get. To get more than one video, include this parameter for each video you want to get. For example, `id=1234&amp;id=5678`. You may specify a maximum of 100 IDs. The endpoint ignores duplicate IDs and IDs that weren't found (if there's at least one valid ID).The `id`, `user_id`, and `game_id` parameters are mutually exclusive. 
 * @param {string} user_id The ID of the user whose list of videos you want to get. The `id`, `user_id`, and `game_id` parameters are mutually exclusive. 
 * @param {string} game_id A category or game ID. The response contains a maximum of 500 videos that show this content. To get category/game IDs, use the ${function.twitch_search_categories} function.The `id`, `user_id`, and `game_id` parameters are mutually exclusive. 
 * @param {struct} optionals The optional parameters to be passed into the function:
 * 
 * - `language` : ${type.string} : A filter used to filter the list of videos by the language that the video owner broadcasts in. For example, to get videos that were broadcast in German, set this parameter to the ISO 639-1 two-letter code for German (i.e., `DE`). For a list of supported languages, see [Supported Stream Language](https://help.twitch.tv/s/article/languages-on-twitch?language=en_US#streamlang). If the language is not supported, use `"other"`. Specify this parameter only if you specify the `game_id` parameter.
 * - `period` : ${type.string} : A filter used to filter the list of videos by when they were published. For example, videos published in the last week. Possible values are: `"all"`, `"day"`, `"month"`, `"week"`. The default is `"all"`, which returns videos published in all periods. Specify this parameter only if you specify the `game_id` or `user_id` parameter.
 * - `sort` : ${type.string} : The order to sort the returned videos in. Possible values are: `"time"` — Sort the results in descending order by when they were created (i.e., latest video first),  `"trending"` — Sort the results in descending order by biggest gains in viewership (i.e., highest trending video first), `"views"` — Sort the results in descending order by most views (i.e., highest number of views first). The default is `"time"`. Specify this parameter only if you specify the `game_id` or `user_id` parameter.
 * - `type` : ${type.string} : A filter used to filter the list of videos by the video's type. Possible case-sensitive values are: `"all"`, `"archive"` — On-demand videos (VODs) of past streams, `"highlight"` — Highlight reels of past streams, `"upload"` — External videos that the broadcaster uploaded using the Video Producer. The default is `"all"`, which returns all video types. Specify this parameter only if you specify the `game_id` or `user_id` parameter.
 * - `first` : ${type.string} : The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100. The default is 20. Specify this parameter only if you specify the `game_id` or `user_id` parameter.
 * - `after` : ${type.string} : The cursor used to get the next page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination). Specify this parameter only if you specify the `user_id` parameter.
 * - `before` : ${type.string} : The cursor used to get the previous page of results. The **Pagination** struct in the response contains the cursor's value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination). Specify this parameter only if you specify the `user_id` parameter.
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array}  | The list of published videos that match the filter criteria.  |
 * | &nbsp;├──&nbsp;id | ${type.string}  | An ID that identifies the video.  |
 * | &nbsp;├──&nbsp;stream_id | ${type.string}  | The ID of the stream that the video originated from if the video's type is `"archive"`; otherwise, `undefined`.  |
 * | &nbsp;├──&nbsp;user_id | ${type.string}  | The ID of the broadcaster that owns the video.  |
 * | &nbsp;├──&nbsp;user_login | ${type.string}  | The broadcaster's login name.  |
 * | &nbsp;├──&nbsp;user_name | ${type.string}  | The broadcaster's display name.  |
 * | &nbsp;├──&nbsp;title | ${type.string}  | The video's title.  |
 * | &nbsp;├──&nbsp;description | ${type.string}  | The video's description.  |
 * | &nbsp;├──&nbsp;created_at | ${type.string}  | The date and time, in UTC, of when the video was created. The timestamp is in RFC3339 format.  |
 * | &nbsp;├──&nbsp;published_at | ${type.string}  | The date and time, in UTC, of when the video was published. The timestamp is in RFC3339 format.  |
 * | &nbsp;├──&nbsp;url | ${type.string}  | The video's URL.  |
 * | &nbsp;├──&nbsp;thumbnail_url | ${type.string}  | A URL to a thumbnail image of the video. Before using the URL, you must replace the `%{width}` and `%{height}` placeholders with the width and height of the thumbnail you want returned. Due to current limitations, `${width}` must be 320 and `${height}` must be 180.  |
 * | &nbsp;├──&nbsp;viewable | ${type.string}  | The video's viewable state. Always set to `"public"`.  |
 * | &nbsp;├──&nbsp;view_count | ${type.number}  | The number of times that users have watched the video.  |
 * | &nbsp;├──&nbsp;language | ${type.string}  | The ISO 639-1 two-letter language code that the video was broadcast in. For example, the language code is `"DE"` if the video was broadcast in German. For a list of supported languages, see [Supported Stream Language](https://help.twitch.tv/s/article/languages-on-twitch#streamlang). The language value is `"other"` if the video was broadcast in a language not in the list of supported languages.  |
 * | &nbsp;├──&nbsp;type | ${type.string}  | The video's type. Possible values are: `"archive"` — An on-demand video (VOD) of one of the broadcaster's past streams, `"highlight"` — A highlight reel of one of the broadcaster's past streams. See [Creating Highlights](https://help.twitch.tv/s/article/creating-highlights-and-stream-markers), `"upload"` — A video that the broadcaster uploaded to their video library. See Upload under [Video Producer](https://help.twitch.tv/s/article/video-on-demand?language=en_US#videoproducer).  |
 * | &nbsp;├──&nbsp;duration | ${type.string}  | The video's length in ISO 8601 duration format. For example, 3m21s represents 3 minutes, 21 seconds.  |
 * | &nbsp;└──&nbsp;muted_segments | ${type.array}  | The segments that Twitch Audio Recognition muted; otherwise, `undefined`.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;duration | ${type.number}  | The duration of the muted segment, in seconds.  |
 * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;offset | ${type.number}  | The offset, in seconds, from the beginning of the video to where the muted segment begins.  |
 * | pagination | ${type.struct}  | Contains the information used to page through the list of results. The struct is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  |
 * | &nbsp;└──&nbsp;cursor | ${type.string}  | The cursor used to get the next page of results. Use the cursor to set the request's `after` or `before` parameter depending on whether you're paging forwards or backwards through the results.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_videos_get_videos(id, user_id, game_id, optionals, callback_success, callback_failed) {}


/**
 * @func twitch_videos_delete_videos
 * @desc **Twitch Endpoint:** [Delete Videos](https://dev.twitch.tv/docs/api/reference/#delete-videos)
 * 
 * This function deletes one or more videos. You may delete past broadcasts, highlights, or uploads.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_CHANNEL_MANAGE_VIDEOS`.]]
 * 
 * @param {real|array} id The list of videos to delete. To specify more than one video, pass an array with the ID of each video to delete. You can delete a maximum of 5 videos per request. Ignores invalid video IDs.If the user doesn't have permission to delete one of the videos in the list, none of the videos are deleted. 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 * @event callback_success
 * @desc These members are returned in the success callback:
 * 
 * | Member | Type | Description |
 * | -----------| ------------| ------------------------------|
 * | data | ${type.array} of ${type.string}  | The list of IDs of the videos that were deleted.  |
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_videos_delete_videos(id, callback_success, callback_failed) {}


/**
 * @func twitch_whispers_send_whisper
 * @desc **Twitch Endpoint:** [Send Whisper](https://dev.twitch.tv/docs/api/reference/#send-whisper)
 * 
 * This function sends a whisper message to the specified user.
 * 
 * [[Note: The user sending the whisper must have a verified phone number (see the **Phone Number** setting in your [Security and Privacy](https://www.twitch.tv/settings/security) settings).]]
 * 
 * [[Note: The API may silently drop whispers that it suspects of violating Twitch policies. (The API does not indicate that it dropped the whisper; it returns a 204 status code as if it succeeded.)]]
 *  
 * **Rate Limits:** You may whisper to a maximum of 40 unique recipients per day. Within the per day limit, you may whisper a maximum of 3 whispers per second and a maximum of 100 whispers per minute.
 * 
 * [[Note: Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the ${constant.TWITCH_SCOPE}: `TWITCH_SCOPE_USER_MANAGE_WHISPERS`.]]
 * 
 * @param {string} from_user_id The ID of the user sending the whisper. This user must have a verified phone number. This ID must match the user ID in the user access token. 
 * @param {string} to_user_id The ID of the user to receive the whisper. 
 * @param {string} message The whisper message to send. The message must not be empty.
 * 
 * The maximum message lengths are:
 * 
 * * 500 characters if the user you're sending the message to hasn't whispered you before.
 * * 10,000 characters if the user you're sending the message to has whispered you before.
 * 
 * Messages that exceed the maximum length are truncated. 
 * 
 * @param {function} callback_success Triggered if the request succeeded
 * @param {function} callback_failed Triggered if the request failed
 *
 * @event callback_success
 * @desc This method is triggered on success. It has no response body.
 * @event_end
 * @event callback_failed
 * @desc This method is triggered on failure.
 * @event_end
 * @func_end
 */
function twitch_whispers_send_whisper(from_user_id, to_user_id, message, callback_success, callback_failed) {}

// Modules

/**
 * @module home
 * @title Home
 * @desc This is the Twitch extension for GameMaker.
 * 
 * This extension allows you to interact with Twitch using the [Twitch API](https://dev.twitch.tv/docs/api/).
 * 
 * @section Guides
 * @desc These are the available guides for the Twitch extension:
 * @ref page.setup
 * @ref page.getting_started
 * @section_end
 * 
 * @section Modules
 * @desc **Twitch:** [Reference](https://dev.twitch.tv/docs/api/reference/)
 * 
 * These are the modules available in the Twitch extension:
 * @ref module.ads
 * @ref module.analytics
 * @ref module.auth
 * @ref module.bits
 * @ref module.channels
 * @ref module.channel_points
 * @ref module.charity
 * @ref module.chat
 * @ref module.clips
 * @ref module.conduits
 * @ref module.ccls
 * @ref module.entitlements
 * @ref module.extensions
 * @ref module.eventsub
 * @ref module.games
 * @ref module.goals
 * @ref module.guest_star
 * @ref module.hype_train
 * @ref module.moderation
 * @ref module.polls
 * @ref module.predictions
 * @ref module.raids
 * @ref module.schedule
 * @ref module.search
 * @ref module.streams
 * @ref module.subscriptions
 * @ref module.tags
 * @ref module.teams
 * @ref module.users
 * @ref module.videos
 * @ref module.whispers
 * @section_end
 *
 * @module_end
 */


/**
 * @module ads
 * @title Ads
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_ads_start_commercial
 * @ref twitch_ads_get_ad_schedule
 * @ref twitch_ads_snooze_next_ad
 * @section_end
 * 
 * @module_end
 */

/**
 * @module analytics
 * @title Analytics
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_analytics_get_extension_analytics
 * @ref twitch_analytics_get_game_analytics
 * @section_end
 * 
 * @module_end
 */

/**
 * @module auth
 * @title Auth
 * @desc **Twitch:** [Authentication](https://dev.twitch.tv/docs/authentication/)
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_auth
 * @ref twitch_auth_exchange_code
 * @ref twitch_auth_app_token
 * @ref twitch_auth_refresh_token
 * @ref twitch_auth_from_cache
 * @ref twitch_auth_signout
 * @section_end
 * 
 * @section_const
 * @desc These are the constants of this module: 
 * @ref TWITCH_SCOPE
 * @section_end
 * 
 * @module_end
 */

/**
 * @module bits
 * @title Bits
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_bits_get_cheermotes
 * @ref twitch_bits_get_extension_transactions
 * @section_end
 * 
 * @module_end
 */

/**
 * @module channels
 * @title Channels
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_channels_get_channel_information
 * @ref twitch_channels_modify_channel_information
 * @ref twitch_channels_get_channel_editors
 * @ref twitch_channels_get_followed_channels
 * @ref twitch_channels_get_channel_followers
 * @section_end
 * 
 * @module_end
 */

/**
 * @module channel_points
 * @title Channel Points
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_channel_points_create_custom_rewards
 * @ref twitch_channel_points_delete_custom_reward
 * @ref twitch_channel_points_get_custom_reward
 * @ref twitch_channel_points_get_custom_reward_redemption
 * @ref twitch_channel_points_update_custom_reward
 * @ref twitch_channel_points_update_redemption_status
 * @section_end
 * 
 * @module_end
 */

/**
 * @module charity
 * @title Charity
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_charity_get_charity_campaign
 * @ref twitch_charity_get_charity_campaign_donations
 * @section_end
 * 
 * @module_end
 */

/**
 * @module chat
 * @title Chat
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_chat_get_chatters
 * @ref twitch_chat_get_channel_emotes
 * @ref twitch_chat_get_global_emotes
 * @ref twitch_chat_get_emote_sets
 * @ref twitch_chat_get_channel_chat_badges
 * @ref twitch_chat_get_global_chat_badges
 * @ref twitch_chat_get_chat_settings
 * @ref twitch_chat_get_user_emotes
 * @ref twitch_chat_live_connect
 * @ref twitch_chat_live_send
 * @ref twitch_chat_live_send_raw
 * @ref twitch_chat_live_disconnect
 * @ref twitch_chat_update_chat_settings
 * @ref twitch_chat_send_chat_announcement
 * @ref twitch_chat_send_a_shoutout
 * @ref twitch_chat_send_chat_message
 * @ref twitch_chat_get_user_chat_color
 * @ref twitch_chat_update_user_chat_color
 * @section_end
 * 
 * @module_end
 */

/**
 * @module clips
 * @title Clips
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_clips_create_clip
 * @ref twitch_clips_get_clips
 * @section_end
 * 
 * @module_end
 */

/**
 * @module conduits
 * @title Conduits
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_conduits_get_conduits
 * @ref twitch_conduits_create_conduits
 * @ref twitch_conduits_update_conduits
 * @ref twitch_conduits_delete_conduit
 * @ref twitch_conduits_get_conduit_shards
 * @ref twitch_conduits_update_conduit_shards
 * @section_end
 * 
 * @module_end
 */

/**
 * @module ccls
 * @title CCLs (Content Classification Labels)
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_ccls_get_content_classification_labels
 * @section_end
 * 
 * @module_end
 */

/**
 * @module entitlements
 * @title Entitlements
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_ccls_get_content_classification_labels
 * @ref twitch_entitlements_get_drops_entitlements
 * @section_end
 * 
 * @module_end
 */

/**
 * @module extensions
 * @title Extensions
 * @desc [[Note: These functions haven not been implemented yet.]]
 * 
 * @section_func
 * @desc These are the functions of this module: 
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
 * @section_end
 * 
 * @module_end
 */

/**
 * @module eventsub
 * @title EventSub
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_eventsub_create_eventsub_subscription
 * @ref twitch_eventsub_delete_eventsub_subscription
 * @ref twitch_eventsub_get_eventsub_subscriptions
 * @ref twitch_eventsub_live_connect
 * @ref twitch_eventsub_live_disconnect
 * @section_end
 * 
 * @module_end
 */

/**
 * @module games
 * @title Games
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_games_get_top_games
 * @ref twitch_games_get_games
 * @section_end
 * 
 * @module_end
 */

/**
 * @module goals
 * @title Goals
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_goals_get_creator_goals
 * @section_end
 * 
 * @module_end
 */

/**
 * @module guest_star
 * @title Guest Star
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
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
 * @section_end
 * 
 * @module_end
 */

/**
 * @module hype_train
 * @title Hype Train
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_hype_train_get_hype_train_events
 * @section_end
 * 
 * @module_end
 */

/**
 * @module moderation
 * @title Moderation
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
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
 * @ref twitch_moderation_warn_chat_user
 * @section_end
 * 
 * @module_end
 */

/**
 * @module polls
 * @title Polls
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_polls_get_polls
 * @ref twitch_polls_create_poll
 * @ref twitch_polls_end_poll
 * @section_end
 * 
 * @module_end
 */

/**
 * @module predictions
 * @title Predictions
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_predictions_get_predictions
 * @ref twitch_predictions_create_prediction
 * @ref twitch_predictions_end_prediction
 * @section_end
 * 
 * @module_end
 */

/**
 * @module raids
 * @title Raids
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_raids_start_a_raid
 * @ref twitch_raids_cancel_a_raid
 * @section_end
 * 
 * @module_end
 */

/**
 * @module schedule
 * @title Schedule
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_schedule_get_channel_stream_schedule
 * @ref twitch_schedule_get_channel_icalendar
 * @ref twitch_schedule_update_channel_stream_schedule
 * @ref twitch_schedule_create_channel_stream_schedule_segment
 * @ref twitch_schedule_update_channel_stream_schedule_segment
 * @ref twitch_schedule_delete_channel_stream_schedule_segment
 * @section_end
 * 
 * @module_end
 */

/**
 * @module search
 * @title Search
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_search_categories
 * @ref twitch_search_channels
 * @section_end
 * 
 * @module_end
 */

/**
 * @module streams
 * @title Streams
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_streams_get_stream_key
 * @ref twitch_streams_get_streams
 * @ref twitch_streams_get_followed_streams
 * @ref twitch_streams_create_stream_marker
 * @ref twitch_streams_get_stream_markers
 * @section_end
 * 
 * @module_end
 */

/**
 * @module subscriptions
 * @title Subscriptions
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_subscriptions_get_broadcaster_subscriptions
 * @ref twitch_subscriptions_check_user_subscription
 * @section_end
 * 
 * @module_end
 */


/**
 * @module teams
 * @title Teams
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_teams_get_channel_teams
 * @ref twitch_teams_get_teams
 * @section_end
 * 
 * @module_end
 */

/**
 * @module users
 * @title Users
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_users_get_users
 * @ref twitch_users_get_user
 * @ref twitch_users_update_user
 * @ref twitch_users_get_user_block_list
 * @ref twitch_users_block_user
 * @ref twitch_users_unblock_user
 * @ref twitch_users_get_user_extensions
 * @ref twitch_users_get_user_active_extensions
 * @ref twitch_users_update_user_extensions
 * @section_end
 * 
 * @module_end
 */
/**
 * @module videos
 * @title Videos
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_videos_get_videos
 * @ref twitch_videos_delete_videos
 * @section_end
 * 
 * @module_end
 */

/**
 * @module whispers
 * @title Whispers
 * @desc 
 * 
 * @section_func
 * @desc These are the functions of this module: 
 * @ref twitch_whispers_send_whisper
 * @section_end
 * 
 * @module_end
 */
