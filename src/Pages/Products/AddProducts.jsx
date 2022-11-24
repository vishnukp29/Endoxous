
import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CreateProduct, clearErrors } from "../../redux/actions/productAction";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import { getAllCategories } from "../../redux/actions/categoryAction";
import { toast } from "react-toastify";

const AddProducts = () => {
  const dispatch = useDispatch();
//   const alert = useAlert();
  const navigate = useNavigate();

  const { loading, error, success,message } = useSelector((state) => state.newProduct);
  const { categoryList } = useSelector((state) => state.allCategories);

  const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState(0);
	const [mrp, setMrp] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [stock, setStock] = useState(0);
	const [rating, setRating] = useState(0);
	const [images, setImages] = useState([]);
	const [oldImages, setOldImages] = useState([]);
	const [imagesPreviw, setImagesPreviw] = useState([]);
	const [inventory, setInventory] = useState(0);
	const [faqs, setFaqs] = useState([]);
	// tags
	const [tags, setTags] = useState([]);
	const [tag, setTag] = useState('');



  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success(message);
      navigate("/products");
      dispatch({ type: NEW_PRODUCT_RESET });
    }

    dispatch(getAllCategories());
  }, [dispatch,error,success,message,navigate]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name + " " + category);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("price", price);
    myForm.set("mrp", mrp);
    myForm.set("stock", stock);
    myForm.set("inventory", inventory);
    myForm.set("tags", tags);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(CreateProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreviw([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreviw((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const createCategoryList = (categories, options = []) => {
    if (categories) {
      for (let category of categories) {
        options.push({ value: category._id, name: category.name });
        if (category && category.children.length > 0) {
          createCategoryList(category.children, options);
        }
      }
      return options;
    }
  };

  // Tags
	const handleTagInput = (e) => {
		if (e.target.value.length > 0) {
			console.log("🚀 ~ file: EditProducts.jsx ~ line 149 ~ handleTagInput ~ e.target.value", e.target.value)
			setTag(e.target.value);
			console.log(tag);
		}
		
	}
	const addTag = (e) => {
		if (tags.length < 0) {
		setTags(tag)
		} else {
				console.log(
					'🚀 ~ file: EditProducts.jsx ~ line 149 ~ addTag ~ tag.length',
					tag.length,
					tag,
					tags
				);
				setTags([...tags, tag]);
				console.log(tags);
		}
		setTag('');
	};
	const removeTag = (removedTag) => {
		const newTags = tags.filter((tag) => tag !== removedTag);
		setTags(newTags);
	};
	const clearTags = () => {
		setTags([]);
	};

  return (
    <div className="">
      <nav
        className="s2-navabar navbar navbar-expand-lg"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid px-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <NavLink className="fw-bold navbar-brand" to="">
            Add Products
          </NavLink>
          <button
            className="btn btn-outline-success btnround"
            type="submit"
          ></button>
        </div>
        <hr />
      </nav>

      <div
        className="conatiner-sm d-flex justify-content-center flex-column align-items-center section bg-light h-100"
        style={{ height: "100vh" }}
      >
        <h2 className="mb-5 mt-5">Add New Product</h2>
        <form
          action=""
          className="createproductForm"
          encType="multipart/form-data"
          onSubmit={createProductSubmitHandler}
        >
          <div class="bg-white p-4 rounded">
            <div class="mb-2">
              <label for="exampleInputNumber" class="form-label">
                Product Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputNumber"
                aria-describedby="numberHelp"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div class="mb-2">
              <label for="exampleInputNumber" class="form-label">
                Description
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputNumber"
                aria-describedby="numberHelp"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div class="mb-2">
              <label for="exampleInputNumber" class="form-label">
                Product Category
              </label>
              <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    <option value="">Choose Category</option>

                    {categoryList &&
                      createCategoryList(categoryList).map((option) => (
                        <option key={option.value} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                  </select>
            </div>

            <div class="d-flex flex-row gap-2">
              <div class="mb-2">
                <label for="exampleInputNumber" class="form-label">
                  Price
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputNumber"
                  aria-describedby="numberHelp"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div class="mb-2">
                <label for="exampleInputNumber" class="form-label">
                  Price
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputNumber"
                  aria-describedby="numberHelp"
                  value={mrp}
                  onChange={(e) => setMrp(e.target.value)}
                />
                <label
                  for="exampleInputNumber"
                  class="form-label bg-success mt-1 px-1 text-white rounded"
                >
                  20$ OFF
                </label>
              </div>
            </div>

            <div class="d-flex flex-row gap-2">
              <div class="mb-2">
                <label for="exampleInputNumber" class="form-label">
                  Product Stock
                </label>
                <input
                  type="number"
                  class="form-control" 
                  id="exampleInputNumber"
                  aria-describedby="numberHelp"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div class="bg-white p-4 rounded mt-3">
            <div class="mb-2" id="createProductFormFile">
              <label for="exampleInputNumber" class="form-label">
                Product Images
              </label>
              <input
                type="file"
                class="form-control"
                id="exampleInputNumber1"
                aria-describedby="numberHelp"
                name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>
            <div id="createProductFormImage">
                {imagesPreviw.map((image, index) => (
                    <img key={index} src={image} alt="Avatar Preview" />
                ))}
            </div>
          </div>

          <div class="bg-white p-4 rounded mt-3">
            <div class="mb-2">
              <h6>Inventory</h6>
              <label for="exampleInputNumber" class="form-label">
                Quantity
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputNumber1"
                aria-describedby="numberHelp"
                value={inventory}
                onChange={(e) => setInventory(e.target.value)}
              />
            </div>
          </div>

          <div className="bg-white p-4 rounded mt-3">
						<div className="mb-2">
							<h6>Tags to Products</h6>

							<input
								type="text"
								className="form-control"
								id="exampleInputNumber1"
								aria-describedby="numberHelp"
								value={tag || ''}
								onChange={handleTagInput}
							/>
						</div>
						<div className="gap-2 d-flex">
							<button
								onClick={addTag}
								type="button"
								className="btn btn-secondary rounded-pill"
							>
								Add Tag
							</button>
							{tags && (
								<>
									{tags?.map((tag, index) => (
										<button
											key={index}
											onClick={() => removeTag(tag)}
											type="button"
											className="btn btn-danger rounded-pill"
										>
											{tag}{' '}
											<span className="ml-1">X</span>
										</button>
									))}

									<button
										onClick={() => clearTags()}
										type="button"
										className="btn btn-danger rounded-pill ml-1"
									>
										Clear All Tags{' '}
										<span className="ml-1">X</span>
									</button>
								</>
							)}
						</div>
					</div>


          <button type="submit" class="btn btn-success w-100 mt-3 mb-5">
            <Link to="" style={{ color: "white", textDecoration: "none" }}>
              Add Products
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;