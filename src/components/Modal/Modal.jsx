
import * as basicLightbox from 'basiclightbox';

<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>;



const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show();