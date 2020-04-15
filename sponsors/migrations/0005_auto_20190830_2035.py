# Generated by Django 2.2.2 on 2019-08-30 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sponsors', '0004_auto_20190826_0738'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sponsor',
            name='spons_type',
            field=models.CharField(choices=[['TLS', 'Title'], ['ATS', 'Associate'], ['PLS', 'Platinum'], ['GDS', 'Gold'], ['PRS', 'Partner']], default='ATS', max_length=3),
        ),
    ]