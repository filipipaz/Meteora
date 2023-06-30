const modalNewsletter = document.querySelector(".modal__newsletter");
const openModalBtn = document.querySelector("#enviar-email");
const closeModalBtn = document.querySelector(".btn-fechar");

openModalBtn.addEventListener("click", () => modalNewsletter.showModal());

closeModalBtn.addEventListener("click", () => modalNewsletter.close());


const modalProduto = document.querySelector('#modal__jeans');
const openModalBtnProduto = document.querySelector('#btn-modal-jeans');
const closeModalBtnProduto = document.querySelector('.btn-fechar-produto');

openModalBtnProduto.addEventListener("click", () => modalProduto.showModal());
closeModalBtnProduto.addEventListener("click", () => modalProduto.close());