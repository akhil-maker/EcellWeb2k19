# Generated by Django 2.2.2 on 2019-08-04 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('proof_checker', models.CharField(blank=True, max_length=500)),
                ('proof_pic', models.ImageField(upload_to='static/uploads/caportal/')),
                ('points', models.IntegerField(default=-1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('description', models.TextField(blank=True)),
                ('platform', models.CharField(choices=[['facebook', 'facebook'], ['linkedin', 'linkedin'], ['whatsapp', 'whatsapp'], ['youtube', 'youtube'], ['instagram', 'instagram'], ['twitter', 'twitter']], max_length=100)),
                ('madeby', models.CharField(max_length=500)),
                ('url', models.URLField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('deleted', models.BooleanField(default=False)),
            ],
        ),
    ]
