# Detail page 구현

<details>
<summary>Post 모델의 객체 예시</summary>

| id  | image     | title     | description      |
| --- | --------- | --------- | ---------------- |
| 1   | post1.jpg | firstpost | It's first post! |
| 2   | dog.png   | dogpost   | About a dog      |

</details>

## 🍞PK

primary key의 약어로 model을 통해 생성된 <strong>객체들을 구분할 수 있는 고유한 key</strong>이다. 위의 예시에서 id에 해당하는 값이다. 객체의 id는 자동으로 부여되는 것으로 unique하다.<br>

detail page를 구현할 때, pk는 각 객체에 해당하는 페이지를 모두 만드는 불필요한 과정을 줄여준다. template에서 pk를 통해 `firstpost`와 `dogpost`를 구분하기 때문이다. pk 설정은 views.py 파일에서 한다.<br>

##### views.py

```python
def detail(request, post_id): # request할 때 post_id라는 변수 같이 넘긴다.
    post = get_object_or_404(Post, pk=post_id) # post_id를 pk로 설정한다.
    return render(request, 'detail.html', {'post': post})
```

## 🍞Path Converter

Path converter는 <strong>객체들의 url를 계층적으로</strong> 다룰 수 있도록 도와주는 도구로, 아래 코드의 `<int:post_id>`부분이다. 기존 url은 string타입으로 인식하기 때문에 int로 형변환을 해줘야 한다. url 설정 시 주의해야 할 것은 <strong>views.py에서 설정한 pk값인 post_id를 변수로 사용해야 한다</strong>는 것이다.

##### urls.py

```python
urlpatterns = [
    # 객체의 id값에 따라 url이 결정된다.
    path('home/<int:post_id>/', views.detail, name="detail"),
]
```

##### home.html

```html
{% for post in posts.all %}
<!-- urls.py에서 설정한 name인 detail에 post.id를 넘긴다 -->
<h1><a href="{% url 'detail' post.id %}">{{post.title}}</a></h1>
{% endfor %}
```

## 🍞get_object_or_404

get_object_or_404는 모델에서 객체를 가져오려 했는데, <strong>객체가 없는 경우 404에러를 띄우는 메소드</strong>이다. pk 부분에서 설명했던 views.py 코드를 다시 살펴보면 get_object_or_404 메소드를 이용해 객체를 가져오는 것을 볼 수 있다.

##### views.py

```python
from django.shortcuts import get_object_or_404

# Post 객체가 있다면 가져오고, 객체가 없을 경우 404에러를 나타낸다.
post = get_object_or_404(Post, pk=post_id)
```
