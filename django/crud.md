# Django - CRUD

<details>
<summary>model.py</summary>
아래의 간단한 모델을 가지고 CRUD를 알아보자.
모델이 데이터베이스에 등록 되었다고 가정한다.

```
from django.db import models

class Post(models.Model):
title = models.CharField(max_length=200)
pub_date = models.DateTimeField('date published')
body = models.TextField()

```

</details>

## 🍞Create

#### 1. new.html 생성 & 폼 작성

`<form action="{% url 'create' %}" method="POST" enctype="multipart/form-data"> {% csrf_token%} </form>`부분이 포인트!
등록하기 버튼을 눌렀을 때 어떤 동작을 할 것인지 정하는 것이다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create</title>
  </head>
  <body>
    <div calss="container">
      <form
        action="{% url 'create' %}"
        method="POST"
        enctype="multipart/form-data"
      >
        {% csrf_token%}
        <h3>Title</h3>
        <input type="text" name="title" />
        <br />
        <br />
        <h3>Content</h3>
        <textarea cols="40" rows="10" name="body"></textarea>
        <br />
        <br />
        <input type="submit" value="등록하기" />
      </form>
    </div>
  </body>
</html>
```

#### 2. views.py

데이터 등록 후 redirect 부분은 detail page를 구현하는 부분과 연결되어 있다. 각 포스트 별로 url를 설정해서 포스트가 등록되면 해당 포스트의 detail 페이지로 리다이렉트 한다.

```python
from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from .models import Post

def create(reqeust):
    # 데이터 등록
    if request.method == 'POST':
        post = Post() # Post 객체 생성
        post.title = request.POST['title'] # new.html에서 name="title"인 부분 받아서 생성한 post 객체의 title에 넣기
        post.body = request.POST['body'] # new.html에서 name="body"인 부분 받아서 생성한 post 객체의 body에 넣기
        post.pub_date = timezone.datetime.now() # 현재 시간으로 설정
        post.save() # 입력한 데이터 저장
        return redirect('home', post.id) # home/id로 리다이렉트
    # 페이지 이동
    else: #reqeust.method == 'GET'
        return render(request, 'new.html')
```

#### 3. app/urls.py

```python
urlpatterns = [
    ...
    path('create/', views.new, name="create"),
]

```

#### 4. home.html

버튼 추가

```html
<a href="{% url 'new' %}">Create</a>
```

## 🍞Read

읽기는 계속 해오던 거라 할게 없다.

## 🍞Update

#### 1. update.html 생성 & 수정 폼 작성

new.html과 비슷하지만 입력 값이 이미 작성되어 있다는 점이 다르다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Update</title>
  </head>
  <body>
    <div calss="container">
      <form
        action="{% url 'update' post.id %}"
        method="POST"
        enctype="multipart/form-data"
      >
        {% csrf_token%}
        <h3>Title</h3>
        <input type="text" name="title" value="{{ post.title }}" />
        <br />
        <br />
        <h3>Content</h3>
        <textarea cols="40" rows="10" name="body">{{ post.body }}</textarea>
        <br />
        <br />
        <input type="submit" value="수정하기" />
      </form>
    </div>
  </body>
</html>
```

#### 2. views.py

```python
 def update(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    # 정보 수정
    if request.method == "POST":
        post.title = request.POST['title']
        post.body = request.POST['body']
        post.pub_date = timezone.datetime.now()
        post.save()
        return redirect('detail', post.id)
    # 페이지 이동
    else:
        return render(request, 'update.html', {'post': post})
```

#### 3. app/urls.py

```python
urlpatterns = [
    ...
    path('update/<int:post_id>', views.update, name="update"),
]

```

#### 4. detail.html

버튼 추가

```html
<a href="{% url 'update' post.id %}">Update</a>
```

## 🍞Delete

#### 1. views.py

```python
def delete(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    post.delete()
    return redirect('home')
```

#### 2. app/urls.py

```python
urlpatterns = [
    ...
    path('delete/<int:post_id>', views.delete, name="delete"),
]

```

#### 3. detail.html

버튼 추가

```html
<a href="{% url 'update' post.id %}">Delete</a>
```
