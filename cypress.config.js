const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://keycloack-pantheon.accurate.com.br/auth/realms/accurate/protocol/openid-connect/auth?client_id=pantheon-app&redirect_uri=https%3A%2F%2Fpantheon.accurate.com.br%2Fauthorization&state=06ea915e-4580-4035-a2bf-f0903bf7fbe8&response_mode=fragment&response_type=code&scope=openid&nonce=f0178691-e79f-42d5-b52a-8a29a191b8ea&code_challenge=lb7a580SVy3yNq0mh7GjlSSkC6ox8xmPU1UCb_yfm78&code_challenge_method=S256',
    viewportWidth: 1440,
    viewportHeight: 900
  },
});
