from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True)

    store = models.OneToOneField('Store', on_delete=models.CASCADE, null=True, blank=True)  # Optional: OneToOne with Store

    def __str__(self):
        return self.username


class Store(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)  # ForeignKey to User

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name
    
    def get_products(self):
        """
        Retrieves all products associated with the current category.
        """
        return self.product_set.all()

class Subcategory(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='products/')  # For storing product images
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategory = models.ForeignKey(Subcategory, on_delete=models.CASCADE, blank=True, null=True)  # Optional ForeignKey to Subcategory
    stock = models.PositiveIntegerField(default=0)  # Track product availability

    def __str__(self):
        return self.name

    def get_subcategory(self):
        """
        Retrieves the subcategory associated with the product (if any).
        """
        return self.subcategory
    
    def get_tags(self):
        """
        Retrieves all tags associated with the current product.
        """
        return self.tags.all()  # Leverage the related manager 'tags'
    
    def add_tag(self, tag_name):
        """
        Adds a tag to the product by creating a ProductTag instance.
        """
        tag, created = Tag.objects.get_or_create(name=tag_name)  # Get or create the tag object
        if not created:
            # Tag already exists, avoid duplicates
            return
        self.tags.add(tag)  # Add the tag to the product's tags using the related manager


class Tag(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class ProductTag(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.product.name} - {self.tag.name}"

from datetime import datetime

class Order(models.Model):
    customer_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15, blank=True)
    address = models.TextField()
    placed_at = models.DateTimeField(default=datetime.now)  # Order creation time
    # ... other order details (payment method, status, etc.)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)  # Optional: ForeignKey to User
    items = models.ManyToManyField(Product, through='OrderItem')  # ManyToManyField with products through OrderItem model

    def __str__(self):
        return f"Order #{self.id} - {self.customer_name}"

class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    street_address = models.CharField(max_length=255)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=20)
    country = models.CharField(max_length=50)

# Payment Method Model
class PaymentMethod(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)

# Order Status Model
class OrderStatus(models.Model):
    status = models.CharField(max_length=50)

# Cart Model
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField('Product', through='CartProduct')

class CartProduct(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.IntegerField()

# Product Review Model
class ProductReview(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    review_text = models.TextField()

# Promotion Model
class Promotion(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    discount_type = models.CharField(max_length=50)
    discount_value = models.DecimalField(max_digits=6, decimal_places=2)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField(blank=True, null=True)

# Wishlist Model
class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField('Product')


