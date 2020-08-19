# Template Language

템플릿 언어는 python의 변수와 문법을 HTML에서 쓸 수 있도록 django에서 제공하는 언어이다.

## 🍞템플릿 변수

- <strong>{{ variable }}</strong>
- view에서 template으로 객체를 전달할 때 사용한다.
- `.`을 통해 개체(변수)의 속성에 접근 가능하다.

## 🍞템플릿 태그

- <strong>{{% tag %}}</strong>
- 로직을 제어할 때 사용한다.
- 단독으로 사용하는 태그도 있고, 닫아주어야 하는 태그도 있다.
- [내장된 태그 살펴보기](https://django-doc-test-kor.readthedocs.io/en/old_master/ref/templates/builtins.html#ref-templates-builtins-tags)

## 🍞템플릿 필터

- <strong>{{ value | filter }}</strong>
- 변수의 값을 특정 형식으로 변환할 때 사용한다.
- [내장된 필터 살펴보기](https://django-doc-test-kor.readthedocs.io/en/old_master/ref/templates/builtins.html#ref-templates-builtins-filters)

## 🍞템플릿 주석

- <strong>{# comment #}</strong>
- 주석이 필요할 때 사용한다.

## 📌Reference

https://django-doc-test-kor.readthedocs.io/en/old_master/topics/templates.html#template-inheritance<br>
https://velog.io/@hidaehyunlee/Django-%ED%85%9C%ED%94%8C%EB%A6%BF-%EC%96%B8%EC%96%B4
