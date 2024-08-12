from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=200)
    

    def __str__(self):
        return self.name
    

class Product(models.Model):
    name = models.CharField(max_length=200)
    price =models.FloatField()
    Category = models.ForeignKey(Category,related_name='product_category',on_delete=models.SET_NULL,null=True)
    image = models.ImageField(upload_to='products/')

    def __str__(self):
        return self.name