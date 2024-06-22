## Detailed E-commerce App Models with Relationships in Django

# Here's a comprehensive breakdown of model schemas and methods 
# for your e-commerce app in Django, including relationships between models:

# **1. User Model:**

# ```python
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # Inherit additional fields from AbstractUser (username, email, etc.)
    phone_number = models.CharField(max_length=15, blank=True)
    # ... other user related fields (address, profile picture, etc.)

    store = models.OneToOneField('Store', on_delete=models.CASCADE, null=True, blank=True)  # Optional: OneToOne with Store

    def __str__(self):
        return self.username
# ```

# * This model inherits from `django.contrib.auth.models.AbstractUser`, 
# providing built-in authentication functionalities.
# * You can add additional user-specific fields like `phone_number`.
# * The `store` field is an optional `OneToOneField` to a `Store` model, 
# allowing a user to own a store (if applicable). 
# * The `__str__` method defines how user objects are represented as strings.

# **2. Store Model:**

# ```python

class Store(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)  # ForeignKey to User
    # ... other store related fields (address, logo image, etc.)

    def __str__(self):
        return self.name
# ```

# * This model represents stores with a unique name, description, and a `ForeignKey` to the `User` model, indicating the store owner.
# * You can add additional store-specific fields.
# * The `__str__` method defines how store objects are represented as strings.

# **3. Product Model:**

# ```python

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
# ```

# * This model defines two related models: `Category` and `Product`.
# * The `Category` model stores product categories with a unique name and optional description.
# * The `Product` model has details like name, description, price, image, a `ForeignKey` to the `Category` model, and a `stock` field to track product availability.
# * Each product belongs to a single category.
# * The `__str__` methods define how category and product objects are represented as strings.

# **4. Order Model:**

# ```python
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
# ```

# * This model represents an order with customer details, order placement time, and optional fields for additional information.
# * It has an optional `ForeignKey` to the `User` model, allowing users to have associated orders.
# * The `items` field uses a `ManyToManyField` relationship with the `Product` model through a separate `OrderItem` model (explained 

# Address Model
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

# Remember to define the Product model as well.
    
# Beyond the core models you've built so far (User, Store, Product, Category, Subcategory, Tag, Order, OrderItem), here are some additional data models you might consider for your e-commerce application:

# **1. Address Model:**

# * This model can store user billing and shipping addresses for order processing. It could include fields like:
#     * `street_address`
#     * `city`
#     * `state`
#     * `postal_code`
#     * `country`
# * You can link this model to the `User` model through a `ForeignKey`.

# **2. Payment Method Model:**

# * This model can store different payment methods supported by your e-commerce platform. It could include fields like:
#     * `name` (e.g., Credit Card, Debit Card, PayPal)
#     * `description` (optional)

# **3. Order Status Model:**

# * This model can define different order statuses (e.g., "Pending", "Processing", "Shipped", "Delivered", "Cancelled").
# * You can link this model to the `Order` model through a `ForeignKey` to track order progress.

# **4. Cart Model (Optional):**

# * This model can be used to manage user carts and store temporary product selections before checkout. It could involve:
#     * `user` (ForeignKey to User)
#     * `products` (ManyToManyField to Product)
#     * `quantity` field for each product in the cart

# **5. Product Review Model:**

# * This model can allow users to leave reviews and ratings for products. It could include:
#     * `user` (ForeignKey to User)
#     * `product` (ForeignKey to Product)
#     * `rating` (integer or decimal field)
#     * `review_text` (TextField)

# **6. Promotion Model:**

# * This model can define different promotions or discounts offered on products or categories. It could include:
#     * `name` (e.g., "Summer Sale", "New User Discount")
#     * `description` (optional)
#     * `discount_type` (e.g., "percentage", "fixed_amount")
#     * `discount_value`
#     * `start_date`
#     * `end_date` (optional)

# **7. Wishlist Model (Optional):**

# * This model can be used for users to save products they're interested in for later purchase. It could include:
#     * `user` (ForeignKey to User)
#     * `products` (ManyToManyField to Product)

# **Choosing Additional Models:**

# * The specific models you need will depend on the functionality of your e-commerce application.
# * Consider features like user authentication, address management, payment processing, order tracking, product reviews, promotions, and wishlists.
# * Start with a core set of models and expand as needed based on your requirements.

# Remember, these are just suggestions. You can tailor your data models to fit the unique needs of your e-commerce platform.
