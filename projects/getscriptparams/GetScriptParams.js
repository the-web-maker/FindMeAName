function getScriptParameters() {
    let scriptParameters = {};

    const currentScript = document.currentScript;

    if (currentScript) {
        const src = currentScript.src;
        const queryStringIndex = src.indexOf('?');

        if (queryStringIndex !== -1) {
            const queryString = src.substring(queryStringIndex + 1);
            const params = new URLSearchParams(queryString);

            for (let [key, value] of params.entries()) {
                scriptParameters[key] = value;
            }
        }
    } else {
        console.warn("document.currentScript is not available. This function must be called directly within the script's initial execution context.");
    }

    return scriptParameters;
}