from django.shortcuts import render

# Create your views here.


def index(request):
  return render(request,'appemployee/index.html')

# def add(request):
#   basic_salary = int(request.GET['num1'])
#   house_levy = int(request.GET['num2'])
#   sha_ded = int(request.GET['num3'])
#   net_salary = int(request.GET['num4'])

#   house_levy = basic_salary * (26 / 100);
#   sha_ded = basic_salary * (6 / 100)
#   net_salary = basic_salary - (house_levy + sha_ded) 
#   res = net_salary

#   return render(request,'appemployee/result.html', { 'result' : res })


def add(request):
    # Get basic salary from GET params, default to 0 if not present or empty
    try:
        basic_salary = int(request.GET.get('num1', 0))
    except ValueError:
        basic_salary = 0

    house_levy = basic_salary * (26 / 100)
    sha_ded = basic_salary * (6 / 100)
    net_salary = basic_salary - (house_levy + sha_ded)

    res = net_salary

    return render(request, 'appemployee/result.html', {'result': res})