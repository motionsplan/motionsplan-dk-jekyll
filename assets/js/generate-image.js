function paramsToObject(paramString) {
  const params = new URLSearchParams(paramString)
  const object = {}
  for (const [key, value] of params.entries()) {
    object[key] = value
  }
  return object
}

function replace(id, content, domAttr) {
  const element = document.getElementById(id)
  if(element) {
    element[domAttr] = content
  }
}

const data = paramsToObject(window.location.search)

document.addEventListener('DOMContentLoaded', function(){
  Object.entries(data).map(([key, value]) => {
    if (key === 'post-image' || key === 'author-image') {
      replace(key, value, 'src')
    } else {
      replace(key, value, 'innerHTML')
    }
  })
})