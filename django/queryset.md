# QuerySet

> Internally, a QuerySet can be constructed, filtered, sliced, and generally passed around without actually hitting the database. No database activity actually occurs until you do something to evaluate the queryset. [출처: django document] <br>

## 🍞QuerySet이란?

간단히 말해 QuerySet은 <strong>모델에서 전달받은 객체의 목록</strong>이다.

<details>
<summary>model example</summary>

```python
class Post(models.Model):
    image = models.ImageField(upload_to="images/")
    title = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.title
```

</details>

Post 모델의 객체가 다음과 같이 두 개 있을 때, 이 목록을 queryset이라 한다.

| id  | image     | title     | description      |
| --- | --------- | --------- | ---------------- |
| 1   | post1.jpg | firstpost | It's first post! |
| 2   | dog.png   | dogpost   | About a dog      |

## 🍞model을 화면에 띄우는 방법

모델의 인스턴스를 templats으로 보내 화면에 뿌리는 방법이다.

##### 1. views.py 수정

```python
from .models import Post # Post 모델의 존재 알리기

def home(request):
    posts = Post.objects.all() # queryset을 templates으로 보내는 작업 (Post 모델의 모든 객체를 posts라는 변수에 넘기는 것)
    return render(request, 'home.html', {'posts': posts}) # 위의 posts 변수에서 받은 값을 home.html에서 'posts'라고 부르겠다는 설정
```

##### 2. templates 수정

템플릿 언어로 views에서 넘긴 객체를 사용한다.

home.html

```html
{% for post in posts.all %}
<h1>{{ post.title }}</h1>
<p>{{ post.description }}</p>
{% endfor %}
```

[Media 처리하기 참고!](./static_file.md)
