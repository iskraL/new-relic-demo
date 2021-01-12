
const appName = 'Test app';
const license_key = ''


exports.config = {
    app_name: [appName],
    agent_enabled: true,
    license_key,
    logging: {
        level: 'info'
    },
    error_collector: {
        ignore_status_codes: [401, 404, 409]
    }
};