export const animate = (elt, lines, opt) => {
    if (lines.length < 2) {
        return {
            abort () {}
        };
    }

    const options = {
        startDelay: 1000,
        lineDelay: 2000,
        letterDelay: 50,
        ...(opt || {})
    };

    const cursor = animateCursor(options.cursor);
    let currentLine = 1;
    elt.textContent = lines[0] ;
    const abortController = new AbortController();
    const iterateLines = async () => {
        try {
            cursor.stop();

            await animateLine(elt, lines[currentLine], options, abortController.signal);
            currentLine = (currentLine + 1) % lines.length;

            cursor.start();
            timer = setTimeout(iterateLines, options.lineDelay);
        } catch (_) {}
    };

    let timer = setTimeout(iterateLines, options.startDelay);

    return {
        abort () {
            abortController.abort();
            clearTimeout(timer);
            elt.textContent = lines[0];
            cursor.stop();
        }
    }
};

const animateCursor = (elt) => {
    if (elt === undefined) {
        return { start () {}, stop () {} };
    }

    let attribute = false;
    let timer;
    const toggle = () => {
        attribute = !attribute;
        elt.style.visibility = attribute ? "hidden" : "visible";
        timer = setTimeout(toggle, 500);
    };

    const conteroller = {
        start () {
            conteroller.stop();
            timer = setTimeout(toggle, 400);
        },
        stop () {
            elt.style.visibility = "visible";
            clearTimeout(timer);
        }
    };
    return conteroller;
}

const animateLine = (elt, line, options, abortSignal) => {
    let direction = 0;
    let timer;

    return new Promise((res, rej) => {
        let content = elt.textContent;
        const abortAnimation = () => {
            rej(new Error("Aborted."));
            clearTimeout(timer);
        };

        abortSignal.addEventListener("abort", abortAnimation, { once: true });

        const iterate = () => {
            if (content.length === 0) {
                direction = 1;
            }

            content = direction === 0 ? content.slice(0, content.length - 1) : content + line[content.length];
            elt.textContent = content;

            if (content === line) {
                res();
                return;
            }

            timer = setTimeout(iterate, options.letterDelay);
        };

        timer = setTimeout(iterate, options.letterDelay);
    });
};