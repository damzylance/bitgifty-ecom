# Generated by Django 3.2 on 2024-06-21 23:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0002_remove_store_item'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='supercategory',
            name='category',
        ),
        migrations.AddField(
            model_name='supercategory',
            name='category',
            field=models.ManyToManyField(related_name='category', to='ecommerce.Category'),
        ),
    ]
