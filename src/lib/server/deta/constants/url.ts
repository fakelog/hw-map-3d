const url = {
  BASE: `https://:host/v1/:project_id/:base_name`,
};

/**
 * base function returns API URL for base
 *
 * @param {string} [host]
 * @returns {string}
 */
function base(host?: string): string {
  const hostPath =
    host?.trim() || process.env.DETA_BASE_HOST?.trim() || 'database.deta.sh';
  return url.BASE.replace(':host', hostPath);
}

export default {
  base,
};
