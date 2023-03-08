import { useState, useEffect } from 'react'
import {collection, getDocs, query, where, doc, updateDoc, addDoc} from 'firebase/firestore'
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { db, storage } from '../FirebaseConfigs/firebaseConfig'

export default function AddProduct() {
  const [productTittle, setProductTittle] = useState('')
  const [productType, setProductType] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [mark, setMark] = useState('')
  const [productImage, setProductImage] = useState('')
  const [brand, setBrand] = useState('')

  const [imageError, setImageError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [uploadError, setUploadError] = useState('')

  const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG']

  const handleProductImg = (e) => {
    e.preventDefault()
    let selectedFile = e.target.files[0]

    if (selectedFile) {
      if(selectedFile && types.includes(selectedFile.type)) {
        setProductImage(selectedFile)
        setImageError('')
      } else {
        setProductImage(null)
        setImageError('please select a valid image file(png or jpg)')
      }

    } else {
      setImageError('please select your file)')
    }
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    const storageRef = ref(storage, `product-images${productType.toUpperCase()}/${Date.now()}`)

    uploadBytes(storageRef, productImage)
      .then(() => {
        getDownloadURL(storageRef).then(url => {
          addDoc(collection(db, `products-${productType.toUpperCase()}`), {
            productTittle,
            productType,
            description,
            price,
            mark,
            brand,
            productImage: url
          })
        })    
      })
  } 

  return (
    <div className='container_content'>
      <div className='flex justify-center py-3'>
        <div>
          <form onSubmit={handleAddProduct}>
            <h2>Add Data</h2>
            {successMsg && <div className='text-green-700'>{successMsg}</div>}
            {uploadError && <div className='text-red-700'>{uploadError}</div>}

            <label className='block pt-2' htmlFor='product-type'>
              Product Type
            </label>
            <input
              type='text'
              onChange={(e) => setProductType(e.target.value)}
              placeholder='product type'
              id='product-type'
              className='w-full'
            />

            <label className='block pt-2' htmlFor='product-title'>
              Product Title
            </label>
            <input
              type='text'
              onChange={(e) => setProductTittle(e.target.value)}
              placeholder='product title'
              id='product-title'
              className='w-full'
            />

            <label className='block pt-2' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block pt-2 w-full'
              type='text'
              onChange={(e) => setDescription(e.target.value)}
              placeholder='description'
              id='description'
            ></textarea>

            <label className='block pt-2' htmlFor='price'>
              Price
            </label>
            <input
              type='text'
              onChange={(e) => setPrice(e.target.value)}
              placeholder='price'
              id='price'
              className='w-full'
            />

            <label className='block pt-2' htmlFor='brand'>
              Brand
            </label>
            <input
              type='text'
              onChange={(e) => setBrand(e.target.value)}
              placeholder='brand'
              id='brand'
              className='w-full'
            />

            <label className='block pt-2' htmlFor='image'>
              Image
            </label>
            <input
              type='file'
              onChange={handleProductImg}
              placeholder='image'
              id='image'
              className='w-full'
            />
            {imageError && <div className='text-red-600'>{imageError}</div>}

            <label className='block pt-2' htmlFor='mark'>
              Mark
            </label>
            <input
              type='text'
              onChange={(e) => setMark(e.target.value)}
              placeholder='mark'
              id='mark'
              className='w-full'
            />
            <button className='border mt-3 w-full bg-green-400  p-2' type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}
