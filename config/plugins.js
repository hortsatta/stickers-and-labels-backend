module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          public_id: 'sal',
          responsive_breakpoints: {
            max_width: 2000 ,
          },
        },
        delete: {},
      },
    },
  },
  // ...
});