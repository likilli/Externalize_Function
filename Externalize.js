"use strict"
function externalize(document)
{
    var external = /^(https?)?:\/\//i,
        $links = Array.from(document.querySelectorAll("a, area"))

        $links.forEach(function ($link)
        {
            if (regExp.test($link.href))
            {
                Object.assign($link,
                {
                    rel: "external",
                    target: "_blank"
                })
            }
        })
}

