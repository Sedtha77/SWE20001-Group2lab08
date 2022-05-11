import Head from "next/head";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import { makeClassName } from "@/utils/string";
import { makeImageCaption } from "@/utils/number";
import InputFile from "@/components/form/InputFile";
import MEDIA from "@/constant/media";
import IconPlus from "@/icons/IconPlus";
import IconClose from "@/icons/IconClose";
import { BORDER_DASH } from "@/constant/style";
import Image from "next/image";
import { HINT_CHOOSE_PHOTO } from "@/constant/hint";
import { MAX_IMAGE_LENGTH, MIN_IMAGE_LENGTH } from "@/constant/limit";
import api from "@/config/api";
import IconLoading from "@/icons/IconLoading";
import ErrorText from "@/components/ErrorText";

function ProductDetail() {
    const router = useRouter();
    const {id} = router.query;
    const [product,setProduct] = useState({
        'name':"",
        "imageURL": "",
        "productType": "",
        "stockAmount": "",
        "targetStock": "",
        "globalPrice": "",
    });

    const [photos, setPhotos] = useState<Array<any>>([]);
    const [customErrors, setCustomErrors] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      const getUser = async ()=>{
          api.get(`Products/` + id)
          .then((res: { data: any; })=>{
             setProduct({...res.data});
          })
          .catch(res=>{
              console.log("Error access to API")
          })
      }

      getUser();
     
  },[id]);

    const onPhotoSelected = (e: { target: { files: any; }; }) => {
        const selectedImages = e.target.files;
    
        if (selectedImages?.length > 0) {

        var photoList = photos;

          for (const image of selectedImages) {

            photoList.push({file:image});
           
          }
          setPhotos(photoList);
    
          if (selectedImages.length + (photos?.length || 0) < MIN_IMAGE_LENGTH) {
            setCustomErrors((previous) => ({
              ...previous,
              images: `You must upload at least ${MIN_IMAGE_LENGTH} images.`,
            }));
          } else if (selectedImages.length + (photos?.length || 0) > MAX_IMAGE_LENGTH) {
            setCustomErrors((previous) => ({ ...previous, images: `You can upload only ${MAX_IMAGE_LENGTH} images.` }));
          } else {
            setCustomErrors({});
          }
        }
      };

      const removePhoto = (i: number) => {
        setPhotos((currentPhotos) => currentPhotos.filter((_, index) => index !== i));
      };

      const validate = ()=>{
        
        if(product.name == "" || /^[0-9]+$/.test(product.name) ){
            setError("Please enter product name with only characters");
            return false;
        }
        else if(product.globalPrice == "" ){
            setError("Please enter product price");
            return false;
        }
        else if(product.stockAmount == "" ){
          setError("Please enter stock quantity");
          return false;
      }
      else if(product.targetStock == "" ){
        setError("Please enter target stock");
        return false;
    }

        else{
            setError("");
            return true;
        };
    }

    const onSubmit = async () =>{

      if(validate()){
          setLoading(true);

        const res = await api.post("products", {
              "name": product.name,
              "imageURL": "https://images.freeimages.com/images/large-previews/0a7/apples-1329832.jpg",
              "productType": product.productType,
              "stockAmmount": product.stockAmount,
              "targetStock": product.targetStock,
              "globalPrice" : product.globalPrice
          });

          if(res) router.push("/product")
          else setError("Unable to create new product at the moment, please try again later.");
      }
  }



      
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;

        setProduct({ ...product, [name]: value });
        
    }
    
    return (  
        <>
            
        <div style={{display:"flex", justifyContent:"center"}}>
    <Head>
      <title>Product {id}</title>
    </Head>
    <div  style={{ width: '70%'}}>
        
        <h3 className="header" >Product Detail: {id}</h3>

        <div className=" w-full border-primary border-2 rounded-lg bg-white py-10" >
        <div className="flex flex-col justify-center items-center">
            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Name</h1>
                <input name="name" value={product.name} onChange={handleInputChange}  className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"text"}/>
            </div>

            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3" >Category</h1>

                <select className="border-2 border-primary rounded-lg h-10 w-full px-3" 
                name="productType" value={product.productType} onChange={handleInputChange}>
                    <option value="vegetable" >Vegetable</option>
                    <option value="fruit" >Fruit</option>
                    <option value="meat" >Meat</option>
                    <option value="dairy" >Dairy</option>
                </select>
            </div>

            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Images</h1>
                <div
          className={makeClassName(
            "grid gap-4", "border-2 border-primary rounded-lg px-5 py-5 shadow-md ",
            photos?.length > 0 ? "grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"
          )}
        >
          {photos?.length >= MAX_IMAGE_LENGTH ? null : (
            <InputFile
              multiple
              name="photos"
              type={MEDIA.image}
              className="w-full block"
              onChange={onPhotoSelected}
             
            >
              {photos?.length > 0 ? (
                <div className=" ml-3 " style={{height:90}}>
                  <div className="w-full h-full rounded-md flex justify-center items-center" style={BORDER_DASH}>
                    <IconPlus className="w-10 h-10 transform transition-all group-hover:scale-150" />
                  </div>
                </div>
              ) : (
                <div className="w-full h-40 bg-white  rounded-md flex justify-center items-center">
                  <span className="text-center px-4 text-sm md:text-sm lg:text-base">{HINT_CHOOSE_PHOTO}</span>
                </div>
              )}
            </InputFile>
          )}

          {photos?.map((photo, index) => {
            const { file, url } = photo;
            const alt = makeImageCaption({ prefix: "Image: ", index, lastIndex: photos.length });
            return (
              <div className="relative" key={index}>
                <Image
                  unoptimized={true}
                  src={url ?? URL.createObjectURL(file)}
                  alt={alt}
                    width={200}
                    height={200}
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-25 hidden group-hover:block"></div>
                <div className=" absolute left-auto top-1 right-1 w-6 h-6" onClick={() => removePhoto(index)}>
                  <IconClose className="w-6 h-6 text-red-500 cursor-pointer" />
                </div>
              </div>
            );
          })}
        </div>
            </div>


            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Price</h1>
                <input name="globalPrice" value={product.globalPrice} onChange={handleInputChange} className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"number"} min="0"/>
            </div>

            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Quantity</h1>
                <input name="stockAmount" value={product.stockAmount} onChange={handleInputChange} className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"number"} min="0"/>
            </div>

            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Target Stock</h1>
                <input name="targetStock" value={product.targetStock} onChange={handleInputChange} className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"number"} min="0"/>
            </div>

            <div className=" w-2/4 my-3">
                
                <ErrorText message={error} />
                </div>
                
            <button
                onClick={onSubmit}
              disabled={loading}
              type="submit"
              className="cursor-pointer primary-button flex justify-center items-center rounded-lg"
            >
              {loading ? <IconLoading /> : <span>Create</span>}
            </button>
        </div>
        </div>
    
        
    </div>
    </div>
    </>

    );
}

export default ProductDetail;