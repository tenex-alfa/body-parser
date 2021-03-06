import * as qs from "qs";

const parser = (request: any) => {
    console.log(buildBody(request))
    return {
        body: buildBody(request),
        headers: buildHeaders(request)
    }
}

function buildHeaders(request: any) {
    if (!request) return;

    const type = request.headers["Content-Type"];
    const body = request.body;
    switch (type) {
        case 'application/x-www-form-urlencoded':
            return qs.parse(body);
    }

}


function buildBody(request: any) {
    if (!request) return;



    const type = request.headers["Content-Type"] || request.headers["content-type"];
    const body = request.body;

    console.log(type.split(";")[0])

    switch (type.split(";")[0]) {
        case 'application/x-www-form-urlencoded':
            return qs.parse(body);

        default: return JSON.parse(body)
    }

}

export default parser;