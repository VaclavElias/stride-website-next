  - Content Updates
    - Small Updates
    - Major Updates
  - Creating New Posts
    - Post Naming Convention
  - Creating New Pages
  - Shortcodes and Includes
  - Web Assets
    - Images
    - Videos
  - Styling
    - Bootstrap Customization
    - CSS Guidelines



## Web Assets

### Images

Add responsive images using shortcodes. Be sure to include a descriptive title, as it will improve your post's search engine visibility. Also, if possible, use the **webp** format for images, which can also be used for transparent images. This will improve the performance of your site.

To add a responsive image, use the following shortcode:

`{% img 'title' 'url' %}`

Replace `title` with a descriptive title for the image and `url` with the image URL. This shortcode renders as:

```html
<img alt="title" src="url" class="img-fluid mb-2" loading="lazy" data-src="url">
```

To add a responsive image with a clickable link that opens the image in full size, use the following shortcode:

`{% img-click 'title' 'url' %}`

Replace `title` with a descriptive title for the image and `url` with the image URL. This shortcode renders as:

```html
<a href="url" title="title" class="mb-2"><img alt="title" src="url" class="img-fluid" loading="lazy" data-src="url"></a>
```

To add a responsive image with a clickable link that directs users to a custom destination, use the following shortcode:

`{% img-click 'title' 'url' 'destinationUrl' %}`

Replace `title` with a descriptive title for the image, `url` with the image URL, and `destinationUrl` with the target URL when the image is clicked. This shortcode renders as:

```html
<a href="destinationUrl" title="title" class="mb-2"><img alt="title" src="url" class="img-fluid" loading="lazy" data-src="url"></a>
```

### Videos

To embed a **YouTube video**, use the following shortcode:

`{% youtube 'id' %}`

Replace `id` with the YouTube video ID. This shortcode renders as:

```html
<div class="ratio ratio-16x9 mb-2"><iframe src="https://www.youtube.com/embed/id" title="YouTube video" allowfullscreen></iframe></div>
```

To embed a **YouTube playlist**, use the following shortcode:

`{% youtube-playlist 'id' %}`

Replace `id` with the YouTube playlist ID. This shortcode renders as:

```html
<div class="ratio ratio-16x9 mb-2"><iframe src="https://www.youtube.com/embed/videoseries?list=id" title="YouTube video" allowfullscreen></iframe></div>
```

To embed a video hosted elsewhere, use the following shortcode:

`{% video 'url' %}`

Replace `url` with the video URL (e.g., .mp4 file). Make sure you have a matching .jpg file with the same name as the .mp4 file for the poster attribute. This shortcode renders as:

```html
<!-- jpgUrl = url.replace(".mp4", ".jpg") // make sure you have a pair .mp4 and .jpg -->
<div class="ratio ratio-16x9 mb-2"><video autoplay loop class="responsive-video" poster="jpgUrl"><source src="url" type="video/mp4"></video></div>
```