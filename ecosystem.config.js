module.exports = {
  apps : [{
    script: 'app.js',
    watch: '.',
		args: 'one two',
		instances: 'max',
		autorestart: true,
		watch: true,
		max_memory_restart: '1G',
		append_env_to_name: true,
  }],

};
