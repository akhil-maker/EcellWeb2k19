# Generated by Django 2.2.2 on 2019-07-31 02:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='team_type',
            field=models.CharField(choices=[['tech', 'tech'], ['spons', 'spons'], ['pr', 'pr'], ['doc', 'doc'], ['design', 'design']], default='pr', max_length=100),
        ),
    ]