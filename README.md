# Image processing API
## usage
the API is used to resize  .jpg images

## usage instructions
after running it the server will start listnenin on port : 3000 on the local host 

**you can access it from :**
[http://localhost:3000/](http://localhost:3000/)

to resize an image with the API follow the following instructions :

 - put your image on the path `/images/full`
 - form a query with your file name and new dimentions :
	

  `?filename={yourimg.jpg}&width={newwidth}&height={newheight}` 
  

 - then combine it with the subdomain` /api/images` 
 ex:
 
 [`http://localhost:3000/api/images?filename=fjord&width=500&heixght=500`](%60http://localhost:3000/api/images?filename=fjord&width=500&heixght=500%60)
 

 - you can now find your new image on the path `/images/thumb`

## scripts
`"lint"`: "**eslint src/\*\*/\*.ts"**

`"lint:fix"`: **"eslint --fix"**

`"format"`: **"prettier --write \"src/\*\*/\*.ts\" ",**
`"jasmine"`: **"jasmine",**

`"build"`: **"npx tsc",**

`"test`": **"npm run build && npm run jasmine",**

`"start"`: **"npx nodemon src/index.ts"**

## Technologies
**node js**

**express js**

**type script**

## dependencies
**[Sharp](https://github.com/lovell/sharp)**
