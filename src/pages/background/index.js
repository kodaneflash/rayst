chrome.runtime.onInstalled.addListener((e) => {
    e.reason === chrome.runtime.OnInstalledReason.INSTALL && (chrome.tabs.create({ url: "https://ray.st/introduction" }), chrome.runtime.setUninstallURL("https://ray.st/offboarding"));
});
chrome.action.onClicked.addListener(async () => {
    const e = await chrome.storage.local.get(["isPanelOpen"]);
    chrome.storage.local.set({ isPanelOpen: !e.isPanelOpen });
});
