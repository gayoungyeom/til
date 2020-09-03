# Model Field Types

## 🍞 Primary Key

#### AutoField(\*\*options)

- 사용 가능한 id에 따라 자동으로 증가되는 IntergerField이다. 따로 지정하지 않으면 [primary key field](https://docs.djangoproject.com/en/3.1/topics/db/models/#automatic-primary-key-fields)가 모델에 자동으로 추가된다.

## 🍞 문자열

#### CharField(max_length=None, \*\*options)

- small to large size의 문자열을 다룰 때 사용
- max-length 필수!

#### TextField(\*\*options)

- 더 많은 양의 문자열을 다룰 때 사용

#### SlugField(max_length=50, \*\*options)

- 짧은 label 설정할 때 사용

## 🍞 숫자

#### IntegerField(\*\*options)

- 2147483648 ~ 2147483647

#### PositiveIntegerField(\*\*options)

- 0 ~ 2147483647

#### FloatField(\*\*options)

## 🍞 날짜/ 시간

#### DateField(auto_now=False, auto_now_add=False, \*\*options)

- auto_now=True: object가 저장되는 날짜을 현재로 설정
- auto_now_add=True: object가 처음 생성된 날짜을 현재로 설정

#### TimeField(auto_now=False, auto_now_add=False, \*\*options)

- auto_now=True: object가 저장되는 시간을 현재로 설정
- auto_now_add=True: object가 처음 생성된 시간을 현재로 설정

#### DateTimeField(auto_now=False, auto_now_add=False, \*\*options)

- auto_now=True: object가 저장되는 날짜와 시간을 현재로 설정
- auto_now_add=True: object가 처음 생성된 날짜와 시간을 현재로 설정

## 🍞 참/ 거짓

#### BooleanField(\*\*options)

#### NullBooleanField(\*\*options)

- BooleanField에서 NULL 값을 받고 싶을 때 사용

## 🍞 파일

#### FileField(upload_to=None, max_length=100, \*\*options)

- upload_to: 업로드할 파일의 이름(경로) 설정

#### ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, \*\*options)

- height_field: 모델 인스턴스 저장할 때 이미지의 높이가 자동으로 채워지는 필드
- width_field: 모델 인스턴스 저장할 때 이미지의 너비가 자동으로 채워지는 필드

#### FilePathField(path='', match=None, recursive=False, allow_files=True, allow_folders=False, max_length=100, \*\*options)

- 파일 시스템의 파일을 참조할 때 사용
- path: 파일 경로 -> 필수 인자!
- match: 파일 이름으로 필터링할 때 사용. 정규표현식으로 작성
- recursive: 경로의 모든 서브 디렉토리의 포함 여부 설정
- allow_files: 지정된 위치에 파일을 포함 여부 설정
- allow_folders: 지정된 위치에 폴더 포함 여부 설정

## 📌Reference

https://docs.djangoproject.com/en/3.1/ref/models/fields/#field-types<br>
https://brunch.co.kr/@ddangdol/4
