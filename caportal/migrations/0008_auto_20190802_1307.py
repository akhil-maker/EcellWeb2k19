# Generated by Django 2.2.2 on 2019-08-02 13:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('caportal', '0007_auto_20190731_2114'),
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
                ('proof_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AlterField(
            model_name='task',
            name='platform',
            field=models.CharField(choices=[['facebook', 'facebook'], ['linkedin', 'linkedin'], ['whatsapp', 'whatsapp'], ['youtube', 'youtube'], ['instagram', 'instagram'], ['twitter', 'twitter']], max_length=100),
        ),
        migrations.DeleteModel(
            name='SubmitTask',
        ),
        migrations.AddField(
            model_name='review',
            name='task',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='caportal.Task'),
        ),
    ]