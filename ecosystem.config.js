module.exports = {
  apps: [
    {
      name: "julaygroup-website",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/var/www/julaygroup.com",
      instances: 2,
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        NEXT_PUBLIC_SITE_URL: "https://julaygroup.com",
      },
      error_file: "/var/log/pm2/julaygroup-error.log",
      out_file: "/var/log/pm2/julaygroup-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      max_restarts: 10,
      restart_delay: 3000,
    },
  ],
};
