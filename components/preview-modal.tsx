"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from "@/components/gallery";
import ProductInfo from "@/components/product-info";
import Modal from "@/components/modal";
import ProductPageClient from "@/app/product/[productId]/components/product-page-client";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return ( 
    <Modal 
      open={previewModal.isOpen} 
      onClose={previewModal.onClose}
    >
      <div className="">
          <ProductPageClient  product={product}   ></ProductPageClient>      
      </div>
    </Modal>
  );
}
 
export default PreviewModal;