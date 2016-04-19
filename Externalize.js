'use strict'
function externalize(document)
{
    var redExp = /^(https?)?:\/\/+$/img,
        $a = Array.from(document.querySelectorAll("a")),
        $area = Array.from(document.querySeletorAll("area")),
        array = $a.concat($area)

        array.forEach(function (func)
        {
            if(func.hasAttribute("href") && regExp.test(hasAttribute("href")))
                    func.setAttribute("rel","external")
                    func.setAttribute("target", "_blank")   
        })
}

