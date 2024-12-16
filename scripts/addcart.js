import { api } from "./common.js";

const getProuct = async () => {
  try {
    //get id from URl
    const search = new URLSearchParams(location.search);
    const id = search.get("id");

    if (id) {
      const data = await api({
        path: `/products/${id}`,
      });
      showProdcut(data);
    } else {
      throw new Error("Product not Valid");
    }
  } catch (e) {
    console.log(e.message);
    //show error to user
  }
};

const showProdcut = (product) => {
  const imageEl = $("#cart_img");
  const productNmEl = $("#cart_title");
  const priceEl = $("#cart_price");
  let counter = 1;
  let minusVal = $(".minus");
  let plusVal = $(".plus");
  let resultVal = $("#result");
  let newCount = [1];
  let counCartEl = $(".cart_count");
  let totalValEl = $("#total_price");
  let removeEl = $(".remove");
  let proceedEl = $("proceed");

  const { title, price, image } = product; //destructuring the obj...
  let newVal = Math.ceil(price); //Set price value
  document.title = `Quickerce | ${title}`; //SET DYNAMIC PAGE TITLE
  imageEl.attr("src", image);
  imageEl.attr("alt", title);
  productNmEl.html(title);
  priceEl.html(`Price: ${newVal} $`);
  counCartEl.text(newCount); //1st Time showing the cart value
  function updateResult() {
    newCount = counter;
    resultVal.val(counter);
    counCartEl.text(newCount);
    if (newCount > 1) {
      totalValEl.text(`Total: ${newVal * newCount} $`);
    }
  }

  // Increment button event listener
  plusVal.on("click", function (e) {
    counter++;
    updateResult();
  });

  // Decrement button event listener
  minusVal.on("click", function (e) {
    counter--;
    updateResult();
  });

  //Remove and redirect to the Index page
  removeEl.on("click", function (e) {
    e.preventDefault();
    alert("Do you want to remove ?");
    window.location.href = "index.html";
  });
};

getProuct();
