console.log(navigator)
console.log(navigator.userAgentData)
navigator
  .userAgentData.getHighEntropyValues(
    ["model", "platform", "platformVersion"])
  .then(ua => { console.log(ua) });
