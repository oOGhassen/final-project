import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createProduct, getAllProducts } from '../redux/actions/actionProduct';


function AddProduct() {

  //state
  //ProductName
  const [ProductName, setProductName] = useState("");
  //price
  const [price, setPrice] = useState("");
  //category
  const [category, setCategory] = useState("");

  //image
  const [image, setImage] = useState(null);
  //description
  const [description, setDescription] = useState("nothing")

  //handel upload
  const fileSelectedHandler = async (e) => {
    // setImage(e.target.files[0]);
    // console.log(image);

    const file = e.target.files[0]
    const fd = new FormData()
    fd.append('image', file)
    // setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/upload/up', fd, config)

      setImage(data)
      image && console.log(image)
      // setUploading(false)
    } catch (error) {
      console.log(error)
      // setUploading(false)
    }

  }

  //handle submit
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('image', setImage(image.name))
    const newProduct = { ProductName, price, category, description, image };
    dispatch(createProduct(newProduct));
    // dispatch(getAllProducts());
    closeModal();
  }
  // modal
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement('#root');

  return (
    <div>
      <Button onClick={openModal}>Add Product</Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Control type="text" placeholder='product name' value={ProductName} onChange={(e) => setProductName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Control type="text" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Control type="text" placeholder='category' value={category} onChange={(e) => setCategory(e.target.value)} />
          </Form.Group>

         
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Control type="text" placeholder='subCategory' value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>

          {/* uploadfile */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Control type="file" onChange={fileSelectedHandler} />
          </Form.Group>

          <div className='btn-add' >
            <Button variant="secondary" onClick={() => closeModal()}> Cancel </Button>
            <Button variant="primary" type="submit" > Add </Button>
          </div>
        </Form>
      </Modal>

    </div>
  );
}

export default AddProduct;