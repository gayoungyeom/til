# Template 상속

templates 폴더 내부 html 파일의 중복을 없애는 작업이다. html 파일의 공통 요소를 base.html 이라는 파일에 넣고, 각 html 파일에는 개인적인 코드만 작성한다.

## 🍞template 상속하는 방법

##### 1. 상속 전 html 파일 살펴보기

<details open>
 <summary>home.html</summary>

```html
{% load static %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <link href="{% static 'css/home.css' %}" rel="stylesheet" />
  </head>

  <body>
    <header>Im header</header>
    <main>
      <h1>Home page</h1>
    </main>
    <footer>Im footer</footer>
  </body>
</html>
```

</details>

<details open>
 <summary>detail.html</summary>

```html
{% load static %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Detail</title>
    <link href="{% static 'css/detail.css' %}" rel="stylesheet" />
  </head>

  <body>
    <header>Im header</header>
    <main>
      <h1>Detail page</h1>
    </main>
    <footer>Im footer</footer>
  </body>
</html>
```

</details>

##### 2. 공통 부분 찾아서 base.html에 넣기

공통 부분을 제외한 부분에 `{% block title %}` `{% endblock %}`와 같은 block을 설정한다. 아래 코드에서는 title, css link, main 부분을 설정했다.

<details open>
 <summary>base.html</summary>

```html
{% load static %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 블락 1 -->
    <title>{% block title %}{% endblock %}</title>
    <!-- 블락 2 -->
    <link href="{% block link %}{% endblock %}" rel="stylesheet" />
  </head>

  <body>
    <header>Im header</header>
    <!-- 블락 3 -->
    <main>{% block content %}{% endblock %}</main>
    <footer>Im footer</footer>
  </body>
</html>
```

</details>

##### 3. 기존 html 파일 수정

- 맨 위에 `{% extends 'base.html' %}`를 작성하고 공통부분을 삭제한다.
- base.html에서 설정한 블락 안에 개별적인 값을 넣어준다.

<details open>
 <summary>home.html</summary>

```
{% extends 'base.html' %}
{% load static %}

{% block title %}Home{% endblock %}
{% block link %}{% static 'css/home.css' %}{% endblock %}
{% block content %}Home page{% endblock %}
```

</details>

<details open>
 <summary>detail.html</summary>

```
{% extends 'base.html' %}
{% load static %}

{% block title %}Detail{% endblock %}
{% block link %}{% static 'css/detail.css' %}{% endblock %}
{% block content %}Detail page{% endblock %}
```

</details>
