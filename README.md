## web-service-todos

# Daftar endpoint web service todolist

## Membuat User baru 
Endpoint : /register
-Metode : POST
-Contoh Body :
{
  "nama": "Ilham",
  "username": "ilham",
  "email": "ilham@example.com",
  "password": "123"
}


## Melihat User
-Endpoint : /register
-Metode : GET 
-Output : daftar user


## Login User
-Endpoint : /auth/login
-Metode : POST
-Contoh Body :
{
  "email": "johne@example.com",
  "password": "456"
}
-Output : token


##Membuat todo baru
-Endpoint : /todos
-Metode : POST
-Contoh Body :
{
  "value": "makan",
  "status": false,
  "userID": "655391bb2e6964e4548e871a"
}


## Melihat semua todo sesuai user id
-Endpoint : /todos
-Metode : GET
-Header : Authorization : bearer {token}
-Output : daftar todo


## Melihat detail todo by id
-Endpoint : /todos/:id
-Metode : GET
-Header : Authorization : bearer {token}
-Output : todo sesuai id


## Merubah detail todo 
-Endpoint : /todos/:id
-Metode : PUT
-Header : Authorization : bearer {token}
-Contoh Body :
{
  "value": "makan",
  "status": true,
  "userID": "655391bb2e6964e4548e871a"
}


## Menghapus todo by id
-Endpoint : /todos/:id
-Metode : DELETE
-Header : Authorization : bearer {token}


## Menghapus semua todo 
-Endpoint : /todos
-Metode : DELETE
-Header : Authorization : bearer {token}




