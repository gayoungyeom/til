# Using the Django authentication system

## 🍞User objects

사용자 객체는 인증 시스템의 핵심이며, 장고의 인증 시스템에서는 유저 클래스가 하나 존재한다. 즉, `superusers`나 관리자 `staff` 유저는 다른 클래스에 속하는 것이 아니라 권한 설정이 다른 사용자 객체일 뿐이다.

<details>
<summary>유저 객체의 Fields</summary>

- username
- first_name
- last_name
- email
- password

[more](https://docs.djangoproject.com/en/3.1/ref/contrib/auth/#attributes)

</details>

#### 유저 생성

`User.objects.create_user('이름', '이메일', '비밀번호')`를 통해 생성한다. 이메일은 생략해도 된다.

```python
>>> from django.contrib.auth.models import User # models.py에 작성

# views.py에서 활용
>>> user = User.objects.create_user('gayoung', 'gayoung@example.com', 'gypassword')
>>> user.last_name = 'yeom'
>>> user.save()
```

#### 슈퍼유저 생성

옵션을 붙여서 생성할 수도 있다. <br>
` $ python manage.py createsupersuer`
` $ python manage.py createsupersuer --username=gayoung --email=gayoung@example.com`

#### 비밀번호 변경

` $ manage.py changepassword <username>`을 입력해 변경 가능하다.<br>

프로그램 상에서는 `set_password()`를 이용한다. (개인적으로는 많이 사용하지 않을 것 같다.)

```python
>>> from django.contrib.auth.models import User

>>> u = User.objects.get(username='john')
>>> u.set_password('new password')
>>> u.save()
```

#### 유저 인증

`authenticat(request=None, username='유저이름', password='비밀번호')`를 이용한다. 이는 사용자의 username과 password를 이용해 백엔드에 대한 자격과 비교한 후, 유효한 사용자라면 `사용자를 리턴`한다. 유효하지 않은 사용자에 대해서는 `None을 리턴`한다.

```python
#views.py에서 활용
from django.contrib.auth import authenticate

user = authenticate(username='gayoung', password='secret')
if user is not None:
    # A backend authenticated the credentials
else:
    # No backend authenticated the credentials
```
