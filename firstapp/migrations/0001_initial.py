# Generated by Django 3.2.23 on 2023-12-26 03:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserData',
            fields=[
                ('uid', models.AutoField(primary_key=True, serialize=False)),
                ('profile_image', models.CharField(blank=True, max_length=255, null=True)),
                ('nickname_m', models.CharField(blank=True, max_length=255, null=True)),
                ('gender', models.CharField(max_length=255)),
                ('birthday', models.DateField()),
                ('health_level', models.CharField(blank=True, max_length=255, null=True)),
                ('flavor', models.CharField(blank=True, max_length=255, null=True)),
                ('purpose', models.CharField(blank=True, max_length=255, null=True)),
                ('health_time', models.CharField(blank=True, max_length=255, null=True)),
                ('health_num', models.CharField(blank=True, max_length=255, null=True)),
                ('location_num', models.CharField(blank=True, max_length=255, null=True)),
                ('etc_hist', models.CharField(blank=True, max_length=255, null=True)),
                ('weight', models.FloatField(blank=True, null=True)),
                ('height', models.FloatField(blank=True, null=True)),
                ('exercise', models.CharField(blank=True, max_length=255, null=True)),
                ('food', models.CharField(blank=True, max_length=255, null=True)),
                ('feel', models.CharField(blank=True, max_length=255, null=True)),
                ('cre_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('bmi_value', models.FloatField(blank=True, null=True)),
                ('b_one', models.FloatField(blank=True, null=True)),
                ('b_two', models.FloatField(blank=True, null=True)),
                ('b_three', models.FloatField(blank=True, null=True)),
                ('b_four', models.FloatField(blank=True, null=True)),
                ('b_five', models.FloatField(blank=True, null=True)),
                ('b_six', models.FloatField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='ResultFeedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rec_ac1', models.TextField(blank=True)),
                ('rec_ac2', models.TextField(blank=True)),
                ('rec_ac3', models.TextField(blank=True)),
                ('rec_fd1', models.TextField(blank=True)),
                ('rec_fd2', models.TextField(blank=True)),
                ('rec_fd3', models.TextField(blank=True)),
                ('rec_ta1', models.TextField(blank=True)),
                ('rec_ta2', models.TextField(blank=True)),
                ('user_data', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='firstapp.userdata')),
            ],
        ),
    ]
