// import React, { useMemo } from 'react'
// import imageExtensions from 'image-extensions'
// import isUrl from 'is-url'
// import { Transforms, createEditor, Descendant } from 'slate'
// import {
//   Slate,
//   Editable,
//   useSlateStatic,
//   useSelected,
//   useFocused,
//   withReact,
//   ReactEditor,
// } from 'slate-react'
// import { withHistory } from 'slate-history'
// import { css } from '@emotion/css'
// import { Button, Icon, Toolbar } from '../components'
// import { ImageElement } from './custom-types'

// const EditorImageRender = () => {
//   const Element = props => {
//     const { attributes, children, element } = props

//     switch (element.type) {
//       case 'image':
//         return <Image {...props} />
//       default:
//         return <p {...attributes}>{children}</p>
//     }
//   }

//   const isImageUrl = url => {
//     if (!url) return false
//     if (!isUrl(url)) return false
//     const ext = new URL(url).pathname.split('.').pop()
//     return imageExtensions.includes(ext)
//   }

//   const InsertImageButton = () => {
//     const editor = useSlateStatic()
//     return (
//       <Button
//         onMouseDown={event => {
//           event.preventDefault()
//           const url = window.prompt('Enter the URL of the image:')
//           if (url && !isImageUrl(url)) {
//             alert('URL is not an image')
//             return
//           }
//           url && insertImage(editor, url)
//         }}
//       >
//         <Icon>image</Icon>
//       </Button>
//     )
//   }

//   const insertImage = (editor, url) => {
//     const text = { text: '' }
//     const image: ImageElement = { type: 'image', url, children: [text] }
//     Transforms.insertNodes(editor, image)
//   }

//   const Image = ({ attributes, children, element }) => {
//     const editor = useSlateStatic()
//     const path = ReactEditor.findPath(editor, element)

//     const selected = useSelected()
//     const focused = useFocused()
//     return (
//       <div {...attributes}>
//         {children}
//         <div
//           contentEditable={false}
//           className={css`
//             position: relative;
//           `}
//         >
//           <img
//             src={element.url}
//             className={css`
//               display: block;
//               max-width: 100%;
//               max-height: 20em;
//               box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
//             `}
//           />
//           <Button
//             active
//             onClick={() => Transforms.removeNodes(editor, { at: path })}
//             className={css`
//               display: ${selected && focused ? 'inline' : 'none'};
//               position: absolute;
//               top: 0.5em;
//               left: 0.5em;
//               background-color: white;
//             `}
//           >
//             <Icon>delete</Icon>
//           </Button>
//         </div>
//       </div>
//     )
//   }


//   const editor = useMemo(
//     () => withImages(withHistory(withReact(createEditor()))),
//     []
//   )

//   const initialValue: Descendant[] = [
//     {
//       type: 'paragraph',
//       children: [
//         {
//           text:
//             'In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos.',
//         },
//       ],
//     },
//     {
//       type: 'image',
//       url: 'https://source.unsplash.com/kFrdX5IeQzI',
//       children: [{ text: '' }],
//     },
//     {
//       type: 'paragraph',
//       children: [
//         {
//           text:
//             'This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your clipboard and paste it anywhere in the editor!',
//         },
//       ],
//     },
//     {
//       type: 'paragraph',
//       children: [
//         {
//           text:
//             'You can delete images with the cross in the top left. Try deleting this sheep:',
//         },
//       ],
//     },
//     {
//       type: 'image',
//       url: 'https://source.unsplash.com/zOwZKwZOZq8',
//       children: [{ text: '' }],
//     },
//   ]
//   return (
//     <Slate editor={editor} value={initialValue}>
//       <Toolbar>
//         <InsertImageButton />
//       </Toolbar>
//       <Editable
//         renderElement={props => <Element {...props} />}
//         placeholder="Enter some text..."
//       />
//     </Slate>

//   )
// }

// EditorImageRender.propTypes = {};

// EditorImageRender.defaultProps = {};

// export default EditorImageRender;













