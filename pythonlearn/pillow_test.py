from PIL import Image

im = Image.open('./image/1.jpg')
print(im.format, im.size, im.mode)

im.thumbnail((100, 100))
im.save('./image/1_thumb.jpg', 'JPEG')
