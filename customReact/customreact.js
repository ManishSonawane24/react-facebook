function customRender(reactElement, container) {
//   // Create a root element
//   const root = document.createElement('div')
//   root.id = 'root'
//   container.appendChild(root)

//   // Create a custom React element
//   const customReactElement = document.createElement('div')
//   customReactElement.innerHTML = reactElement

//   // Append the custom React element to the root
//   root.appendChild(customReactElement)
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for (const prop in props) {
   
}

}


const reactElement = {
  type: 'div',
  props: {
    href: 'https://vitejs.dev',
    target: '_blank',
   
    },
     children: 'Vite Docs'
}


const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)