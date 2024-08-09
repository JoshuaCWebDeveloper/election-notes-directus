-- Removes all user data from system, preserving the schema and other settings in Directus --

-- Removes users data from Directus tables --
TRUNCATE TABLE directus_revisions, directus_activity;
TRUNCATE TABLE directus_notifications;
TRUNCATE TABLE directus_sessions;

-- Remove all rows from files not referenced in settings or fields
DELETE FROM directus_files
WHERE id NOT IN (
    SELECT project_logo FROM directus_settings
    UNION
    SELECT public_background FROM directus_settings
    UNION
    SELECT public_favicon FROM directus_settings
    UNION
    SELECT public_foreground FROM directus_settings
);

-- User data database tables --
TRUNCATE TABLE candidate, fact, issue, stance, stance_fact;
