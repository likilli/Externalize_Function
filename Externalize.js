"use strict"
function externalize(document)
{
    var regExp = /^(https?)?:\/\//i,
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

